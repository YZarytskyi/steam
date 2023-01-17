export const PRICE = 'Price'
export const PUBLISH_DATE = 'Publish Date'

export interface Game {
      appId: string,
      title: string,
      url: string,
      imgUrl: string,
      released: string,
      reviewSummary: string,
      price: string
}

export type SortKey = typeof PRICE | typeof PUBLISH_DATE