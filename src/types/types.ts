export const PRICE = "Price";
export const PUBLISH_DATE = "Publish Date";

export interface Game {
  appId: string;
  title: string;
  url: string;
  imgUrl: string;
  released: string;
  reviewSummary: string;
  price: string;
}

export interface GameDetails {
  imgUrl: string;
  title: string;
  developer: {
    link: string;
    name: string;
  };
  publisher: {
    link: string;
    name: string;
  };
  released: string;
  description: string;
  allReviews: {
    summary: string;
    reviewCount: string;
    ratingValue: string;
    bestRating: string;
    worstRating: string;
  };
  price: string;
}

export type SortKey = typeof PRICE | typeof PUBLISH_DATE;
