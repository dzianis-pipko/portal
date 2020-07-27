import './Tasks.css'
import React, { Component } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import Loader from '../../containers/UI/Loader/Loader'
import { fetchTasks } from '../../store/actions/tasks'
import ModalsTasks from '../../containers/UI/ModalsTasks/ModalsTasks'

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

      return (
         <React.Fragment>
            {
               this.props.loader
                  ? <Loader />
                  :
                  <div>
                     <ModalsTasks />
                     <Table columns={columns} dataSource={this.props.currentTasks} />
                  </div>
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