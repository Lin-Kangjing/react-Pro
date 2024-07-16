/*
 * @Date: 2024-07-15 17:19:52
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-07-15 17:29:21
 * @FilePath: \react-Pro\types\user.ts
 * @Description: 
 */
import { PermissionType } from './enum.ts';

export interface UserToken {
  accessToken?: string;
  refreshToken?: string;
}

export interface UserInfo {
  id: string;
  email: string;
  username: string;
  password?: string;
  avatar?: string;
  role?: Role;
  permissions?: Permission[];
  [key:string]: unknown;
}

export interface Organization {
  id: string;
  name: string;
  status: 'enable' | 'disable';
  desc?: string;
  order?: number;
  children?: Organization[];
}

export interface Permission {
  id: string;
  parentId: string;
  name: string;
  label: string;
  type: PermissionType;
  route: string;
  order?: number;
  icon?: string;
  component?: string;
  hide?: boolean;
  hideTab?: boolean;
  frameSrc?: string;
  newFeature?: boolean;
  children?: Permission[];
}

export interface Role {
  id: string;
  name: string;
  label: string;
  order?: number;
  desc?: string;
  permission?: Permission[];
}
