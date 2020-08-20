import React, { Component } from 'react';
import './Sidebar.css';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const links = [
   { to: '/users', label: 'Users', exact: false },
   { to: '/leeds', label: 'Leeds', exact: false },
   { to: '/quotes', label: 'Quotes', exact: false },
   { to: '/tasks', label: 'Tasks', exact: false },
   { to: '/cheatSheet', label: 'Cheat sheet', exact: false }
]

class Sidebar extends Component {

   renderLinks() {
      return links.map((link, index) => {
         return (
            <Menu.Item key={index + 1}>
               <NavLink
                  to={link.to}
                  exact={link.exact}
               >{link.label}</NavLink>
            </Menu.Item>
         )
      })
   }
   render() {
      const { Sider } = Layout

      const token = localStorage.token;

      const renderLoginLogoutLinks = () => {
         if (token) {
            return (
               <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  {this.renderLinks()}
               </Menu>
            )
         } else {
            return null
         }

      }
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
               {renderLoginLogoutLinks()}
            </Sider>
         </React.Fragment>
      )
   }
}

const mapStateToProps = state => ({
   currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Sidebar)