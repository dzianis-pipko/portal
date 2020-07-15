import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import Sidebar from '../containers/UI/Sidebar/Sidebar';
import Header from '../containers/UI/Header/Header';
import Users from '../components/Users/Users';

export default class App extends Component {
   render() {
      const { Content } = Layout;
      return (
         <Layout>
            <Sidebar />
            <Layout>
               <Header />
               <Content style={{ margin: '24px 40px 0' }}>
                  <Users />
               </Content>
            </Layout>
         </Layout>
      )
   }
}