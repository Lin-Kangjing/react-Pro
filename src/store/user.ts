import { create } from "zustand"
import storage from "store2"

import type { UserInfo, UserToken } from "#/user.ts"
import { StorageEnum } from "#/enum.ts"
type UserStore = {
  userInfo: Partial<UserInfo>
  userToken: UserToken
  setUserInfo: (userInfo: UserInfo) => void
  setUserToken: (token: UserToken) => void
  clearUserInfoAndToken: () => void
}
export const useUser = create<UserStore>((set) => ({
  userInfo: storage(StorageEnum.User) || {},
  userToken: storage(StorageEnum.Token) || {},
  setUserInfo: (userInfo) => {
    set({ userInfo })
    storage(StorageEnum.User, userInfo)
  },
  setUserToken: (userToken) => {
    set({ userToken })
    storage(StorageEnum.Token, userToken)
  },
  clearUserInfoAndToken: () => {
    set({ userInfo: {} })
    set({ userToken: {} })
    storage.remove(StorageEnum.User)
    storage.remove(StorageEnum.Token)
  },
}))

export const useUserInfo = () => useUser((state) => state.userInfo)
export const useUserPermission = () => useUserInfo().permissions
export const useToken = () => useUser((state) => state.userToken)

