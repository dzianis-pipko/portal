import './Tasks.css';
import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';

class Tasks extends Component {
   render() {

      const columns = [
         {
            title: 'Theme',
            dataIndex: 'theme',
            key: 'theme',
         },
         {
            title: 'Text',
            dataIndex: 'text',
            key: 'text',
         },
      ];

      const data = [
         {
            key: '1',
            theme: 'John Brown',
            text: 'New York No. 1 Lake Park',
         },
         {
            key: '2',
            theme: 'Jim Green',
            text: 'London No. 1 Lake Park',
         },
      ];

      return (
         <Table columns={columns} dataSource={data} />
      )
   }
}

export default Tasks