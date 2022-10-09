export type Settings = {
    extraMargin: number
    margin: number
    saleTax: number
    currency: string
}

export const SETTINGS_DEFAULT: Settings =  {
  extraMargin: 5,
  margin: 11,
  saleTax: 7,
  currency: '$'
}