import { createContext, useContext } from 'react'
import { ItemType } from '../types/item-type';

interface IItemsContext {
  items: ItemType[]
  setItems: (newValue: ItemType[]) => void
}

const ItemsContext = createContext<IItemsContext>({
  items: [],
  setItems: () => {},
});

export const UseItemsContext = () => useContext(ItemsContext)
export const ItemsContextProvider = ItemsContext.Provider