import "./App.css";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";

import { createFetch } from "./api-fetch";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./components/ImageModal/ImageModal";
import { threeDotsStyles } from "./helpers";
import { IFetch, Images, ImageUrls, IModal } from "./types/images";

function App() {
  const [images, setImages] = useState<Images[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [modalData, setModalData] = useState<IModal>();
  const [topic, setTopic] = useState<string>("");
  
  useEffect(() => {
    const handleFetch = async () => {
      try {
        setError(false);
        setLoader(true);
        const data: IFetch = await createFetch(topic, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotal(data.total);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    topic && handleFetch();
  }, [topic, page]);

  const handleSearch = (newTopic: string) => {
    newTopic !== topic && setImages([]);
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (regular: IModal) => {
    setIsOpen(true);
    console.log(regular);
    setModalData(regular);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          onClick={openModal}
        />
      )}
      {modalIsOpen && (
        <ImageModal 
          modalData={modalData}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      {error && <ErrorMessage />}
      {loader && (
        <ThreeDots
          styles={threeDotsStyles}
          wrapperStyle={{ justifyContent: "center" }}
        />
      )}
      {images.length > 0 && images.length < total && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </>
  );
}

export default App;