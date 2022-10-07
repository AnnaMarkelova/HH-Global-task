export type UserSetting = {
    isExtraMargin: boolean
    extraMargin: number
    margin: number
    saleTax: number
    currency: string
}

export const USER_SETTING_DEFAULT: UserSetting =  {
  isExtraMargin: false,
  extraMargin: 5,
  margin: 11,
  saleTax: 7,
  currency: 'USD'
}