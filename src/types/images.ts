export interface ImageUrls {
    regular: string,
    small: string,
    alt_description: string,
}

 export interface Images {
     urls: ImageUrls,
 }

export interface IFetch {
    total: number,
    results: Images[],
}

export interface IModal {
    urls: ImageUrls,
    description: string,  
    likes: number,
    user: {
      first_name: string,
      last_name: string,
    },
  
};
