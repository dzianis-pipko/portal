import React, { Component } from 'react';
import './Header.css';
import { Button } from 'antd';
import Modals from '../Modals/Modals';
import { logoutUser } from '../../../store/actions/auth'
import { connect } from 'react-redux'


class Header extends Component {
   render() {
      const token = localStorage.token;

      const logout = () => {
         localStorage.removeItem("token")
         this.props.logoutUser()
      }

      const loginLogout = () => {
         if (token) {
            return (
               <Button className="Header-button" type="primary" onClick={logout}>LogOut</Button>
            )
         } else {
            return (
               <Modals />
            )
         }
      }

      return (
         <header className="Header">
            {loginLogout()}
         </header>
      )
   }
}

const mapStateToProps = state => ({
   currentUser: state.auth.currentUser
})

const mapDispatchToProps = dispatch => ({
   logoutUser: () => dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);