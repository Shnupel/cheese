export type ICartProduct = {
  id: number,
  name: string,
  image: string[],
  cost: number,
  sale?: number,
  category: number,
  about?: string,
  includes?: string
}