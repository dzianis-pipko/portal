import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import Sidebar from '../containers/UI/Sidebar/Sidebar';
import Header from '../containers/UI/Header/Header';
import Users from '../components/Users/Users';
import Leeds from '../components/Leeds/Leeds'
import Quotes from '../components/Quotes/Quotes'
import Tasks from '../components/Tasks/Tasks'
import CheatSheetTab from '../components/CheatSheetTab/CheatSheetTab'
import Login from '../components/Login/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {
   render() {
      const { Content } = Layout;
      const token = localStorage.token;
      const loginLogout = () => {
         if (token) {
            return (
               <React.Fragment>
                  <Route path="/users" component={Users} />
                  <Route path="/leeds" component={Leeds} />
                  <Route path="/quotes" component={Quotes} />
                  <Route path="/tasks" component={Tasks} />
                  <Route path="/cheatSheet" component={CheatSheetTab} />
                  <Redirect to="/users" />
               </React.Fragment>
            )
         } else {
            return (
               <React.Fragment>
                  <Route path="/" component={Login} />
                  <Redirect to="/" />
               </React.Fragment>
            )
         }
      }
      return (
         <Layout>
            <Sidebar />
            <Layout>
               <Header />
               <Content style={{ margin: '24px 40px 0' }}>
                  <Switch>
                     {loginLogout()}
                  </Switch>
               </Content>
            </Layout>
         </Layout>
      )
   }
}

const mapStateToProps = state => ({
   currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(App)