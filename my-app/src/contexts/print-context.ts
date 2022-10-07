import { createContext, useContext } from 'react'

interface IPrintContext {
  printedItems: string
  setPrintedItems: (newValue: string) => void
  printedFormActive: boolean
  setPrintedFormActive: (newValue: boolean) => void
}

const PrintContext = createContext<IPrintContext>({
  printedItems: '',
  setPrintedItems: () => {},
  printedFormActive: false,
  setPrintedFormActive: () => {}
});

export const UsePrintContext = () => useContext(PrintContext)
export const PrintContextProvider = PrintContext.Provider