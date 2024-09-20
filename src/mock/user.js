import Mock from "mockjs"
import { DEFAULT_USER } from "./data";
Mock.mock(new RegExp("/api/user/userInfo"), () => {
  return Mock.mock(DEFAULT_USER)
})

