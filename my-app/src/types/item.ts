export type Item = {
    id: string
    name: string
    cost: number
    isExempt: boolean
}

export const ITEM_DEFAULT: Item =  {
  id: '',
  name: '',
  cost: 0,
  isExempt: false,
}