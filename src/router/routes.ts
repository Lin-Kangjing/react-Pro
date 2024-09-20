
import { lazy } from "react"
export const constRoutes = [
  {
    path: '/login',
    Component: lazy(() => import('@/views/login')),
  },
]