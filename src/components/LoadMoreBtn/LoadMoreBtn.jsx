export const LoadMoreBtn = ({ children, onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default LoadMoreBtn;
