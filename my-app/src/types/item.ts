export type ItemType = {
    id: string
    name: string
    cost: number
    isExempt: boolean
}

export const ITEM_DEFAULT: ItemType =  {
  id: '',
  name: '',
  cost: 0,
  isExempt: false,
}