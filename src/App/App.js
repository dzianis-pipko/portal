import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import Sidebar from '../containers/UI/Sidebar/Sidebar';
import Header from '../containers/UI/Header/Header';
import Users from '../components/Users/Users';
import Leeds from '../components/Leeds/Leeds'
import Quotes from '../components/Quotes/Quotes'
import Tasks from '../components/Tasks/Tasks'
import CheatSheet from '../components/CheatSheet/CheatSheet'
import Login from '../components/Login/Login'
import { Route, Switch, Redirect } from 'react-router-dom'

export default class App extends Component {
   render() {
      const { Content } = Layout;
      return (
         <Layout>
            <Sidebar />
            <Layout>
               <Header />
               <Content style={{ margin: '24px 40px 0' }}>
                  <Switch>
                     <Route path="/login" component={Login} />
                     <Route path="/users" component={Users} />
                     <Route path="/leeds" component={Leeds} />
                     <Route path="/quotes" component={Quotes} />
                     <Route path="/tasks" component={Tasks} />
                     <Route path="/cheatSheet" component={CheatSheet} />
                     <Redirect to="/users" />
                  </Switch>
               </Content>
            </Layout>
         </Layout>
      )
   }
}