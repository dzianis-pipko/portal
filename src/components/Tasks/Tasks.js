import './Tasks.css'
import React, { Component } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import Loader from '../../containers/UI/Loader/Loader'
import { fetchTasks } from '../../store/actions/tasks'

class Tasks extends Component {
   componentDidMount() {
      this.props.fetchTasks()
   }

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

      // const data = [
      //    {
      //       key: '1',
      //       theme: 'John Brown',
      //       text: 'New York No. 1 Lake Park',
      //    },
      //    {
      //       key: '2',
      //       theme: 'Jim Green',
      //       text: 'London No. 1 Lake Park',
      //    },
      // ];

      return (
         <React.Fragment>
            {
               this.props.loader
                  ? <Loader />
                  : <Table columns={columns} dataSource={this.props.currentTasks} />
            }
         </React.Fragment>
      )
   }
}
const mapStateToProps = (state) => {
   return {
      currentTasks: state.tasks.currentTasks,
      loader: state.tasks.loader
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchTasks: () => dispatch(fetchTasks())
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tasks)