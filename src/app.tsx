/*
 * @Date: 2024-06-27 14:27:34
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-11-21 14:47:12
 * @FilePath: \react-Pro\src\app.tsx
 * @Description:
 */

// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import { ConfigProvider } from "antd"
import { StyleProvider } from "@ant-design/cssinjs"
import Router from "@/router";
// import { useToken } from "@/store/user"

function App() {
  // const {setUserInfo,setUserToken} = useActions()
  // const navigate = useNavigate()
  // const { accessToken } = useToken()
  // useEffect(() => {
  //   if (!accessToken) {
  //     window.location.pathname
  //     // navigate("./login")
  //   }
  // }, [accessToken])
  
  return (
    <ConfigProvider>
      <StyleProvider>
        <Router />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
