import React, { Component } from 'react';
import './Users.css';
import { Table } from 'antd';
import Loader from '../../containers/UI/Loader/Loader'
import { connect } from 'react-redux'
import { fetchUsers } from '../../store/actions/users'

class Users extends Component {
   async componentDidMount() {
      this.props.fetchUsers()
   }
   render() {
      const columns = [
         {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
         },
         {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
         },
         {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'birthday',
         },
         {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
         }
      ];
      return (
         <React.Fragment>
            {
               this.props.loading && this.props.tableUsers !== 0
                  ? <Loader />
                  : <Table columns={columns} dataSource={this.props.tableUsers} />
            }
         </React.Fragment>
      )
   }
}
const mapStateToProps = (state) => {
   return {
      tableUsers: state.users.tableUsers,
      loading: state.users.loading
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      fetchUsers: () => dispatch(fetchUsers())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
