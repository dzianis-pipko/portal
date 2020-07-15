import React from 'react';
import './Sidebar.css';
import { Layout, Menu } from 'antd';

const Sidebar = () => {
   const { Sider } = Layout
   return (
      <React.Fragment>
         <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
               // console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
               // console.log(collapsed, type);
            }}
         >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
               <Menu.Item key="1">
                  Users
                  </Menu.Item>
               <Menu.Item key="2">
                  Leeds
                  </Menu.Item>
               <Menu.Item key="3">
                  Quotes
                  </Menu.Item>
               <Menu.Item key="4">
                  Tasks
                  </Menu.Item>
               <Menu.Item key="5">
                  Cheat sheet
                  </Menu.Item>
            </Menu>
         </Sider>
      </React.Fragment>
   )
}
export default Sidebar