export type Settings = {
    isExtraMargin: boolean
    extraMargin: number
    margin: number
    saleTax: number
    currency: string
}

export const SETTINGS_DEFAULT: Settings =  {
  isExtraMargin: false,
  extraMargin: 5,
  margin: 11,
  saleTax: 7,
  currency: 'USD'
}