import React, { Component } from 'react';
import './CheatSheetTab.css';
import { Tabs } from 'antd';
import CheatSheetSections from './CheatSheetSections/CheatSheetSections'

class CheatSheetTab extends Component {
   render() {
      const { TabPane } = Tabs;

      function callback(key) {
         console.log(key);
      }
      return (
         <Tabs onChange={callback} type="card">
            <TabPane tab="Cheat sheet" key="1">
               <CheatSheetSections />
            </TabPane>
            <TabPane tab="Themes of cheat sheet" key="2">
               Content of Tab Pane 2
            </TabPane>
         </Tabs>
      )
   }
}

export default CheatSheetTab;
