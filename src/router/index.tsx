/*
 * @Date: 2024-07-11 11:36:09
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-09-20 09:53:20
 * @FilePath: \react-Pro\src\router\index.tsx
 * @Description: 
 */
/*
 * @Date: 2024-07-11 11:36:09
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-09-20 09:44:12
 * @FilePath: \react-Pro\src\router\index.tsx
 * @Description: 
 */

import type { AppRouteObject } from '#/router';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"
import BasicLayout from "@/layout/basic";
import { constRoutes } from "./routes";
// const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;
const HOMEPAGE = '/login'
export default function Router() {
  const asyncRoutes: AppRouteObject = {
    path: '/',
    element: (
      // <AuthGuard>
        <BasicLayout />
      // </AuthGuard>
    ),
    children: [{ index: true, element: <Navigate to={HOMEPAGE} replace /> }],
  };
  const routes = [...constRoutes,asyncRoutes,];
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />;
}