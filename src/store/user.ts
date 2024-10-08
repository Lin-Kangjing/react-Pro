/*
 * @Date: 2024-07-15 17:09:44
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-09-19 10:53:03
 * @FilePath: \react-Pro\src\store\user.ts
 * @Description:
 */
import { create } from "zustand"
import storage from "store2"
import type { UserInfo, UserToken } from "#/user.ts"
import { StorageEnum } from "#/enum.ts"
// @ts-ignore
import { DEFAULT_USER } from "@/mock/data.js"
type UserStore = {
  userInfo: Partial<UserInfo>
  userToken: UserToken
  actions:{
    setUserInfo: (userInfo: UserInfo) => void
    setUserToken: (token: UserToken) => void
    clearUserInfoAndToken: () => void
  }
}
export const useUser = create<UserStore>((set) => ({
  userInfo: storage(StorageEnum.User) || DEFAULT_USER,
  userToken: storage(StorageEnum.Token) || {},
  actions: {
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
  },
}))

export const useUserInfo = () => useUser((state) => state.userInfo)
export const useUserPermission = () => useUserInfo().permissions
export const useToken = () => useUser((state) => state.userToken)
export const useActions = () => useUser((state) => state.actions)

// export const useLogin = () => {
//   const { setUserInfo, setUserToken } = useActions()
//   return (userInfo: UserInfo, userToken: UserToken) => {
//     setUserInfo(userInfo)
//     setUserToken(userToken)
//   }
// }
