/*
 * @Date: 2024-07-15 17:09:44
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-09-19 10:53:03
 * @FilePath: \react-Pro\src\store\user.ts
 * @Description:
 */
import type { UserInfo, UserToken } from "#/user.ts"
import { create } from "zustand"
import storage from "store2"
import { useNavigate } from 'react-router-dom';
import { StorageEnum } from "#/enum.ts"
// @ts-ignore
import { DEFAULT_USER } from "@/mock/data.js"
const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;
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

export const useLogin = (userInfo: UserInfo, userToken: UserToken) => {
  const navigatge = useNavigate();
  const { setUserInfo, setUserToken } = useActions()
  setUserInfo(userInfo)
  setUserToken(userToken)
  navigatge(HOMEPAGE, { replace: true });
}
