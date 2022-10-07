import { createContext, useContext } from 'react'
import { UserSetting, USER_SETTING_DEFAULT } from '../types/user-setting-type';

interface IUserSettingContext {
  userSetting: UserSetting
  setUserSetting: (newValue: UserSetting) => void
}

const UserSettingContext = createContext<IUserSettingContext>({
  userSetting: USER_SETTING_DEFAULT,
  setUserSetting: () => {},
});

export const UseUserSettingContext = () => useContext(UserSettingContext)
export const UserSettingContextProvider = UserSettingContext.Provider