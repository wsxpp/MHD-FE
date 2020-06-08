import React from 'react';
import { Menu } from 'antd';
import './index.styl';
import {
  Link
} from 'react-router-dom';
const { SubMenu } = Menu;

export default function LeftMenu(props) {
  return (
    <Menu
      style={{ width: 256, height: '100%' }}
      defaultSelectedKeys={[]}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <span>用户管理</span>
          </span>
        }
      >
        <Menu.Item key="1">
          <Link to="/manhua/userManage/userList">用户列表</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}