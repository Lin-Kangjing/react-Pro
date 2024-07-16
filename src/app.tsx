/*
 * @Date: 2024-06-27 14:27:34
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-07-16 15:05:31
 * @FilePath: \react-Pro\src\App.tsx
 * @Description:
 */

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ConfigProvider } from "antd"
import { StyleProvider } from "@ant-design/cssinjs"
import Layout from "@/layout/basic"
import { useToken } from "@/store/user"

function App() {
  const navigate = useNavigate()
  const { accessToken } = useToken()
  useEffect(() => {
    if (!accessToken) {
      navigate("./login")
    }
  }, [accessToken])
  return (
    <ConfigProvider>
      <StyleProvider>
        <Layout />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
