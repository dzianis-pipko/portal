import React, { Component } from 'react';
import './Leeds.css';
import { Table } from 'antd';
import Loader from '../../containers/UI/Loader/Loader'
import { connect } from 'react-redux'
import { fetchLeeds } from '../../store/actions/leeds'

class Leeds extends Component {
   componentDidMount() {
      this.props.fetchLeeds()
   }
   render() {
      const columns = [
         {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
         },
         {
            title: 'Communication method',
            dataIndex: 'communicationMethod',
            key: 'communicationMethod'
         },
         {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
         },
      ];
      return (
         <React.Fragment>
            {
               this.props.loader && this.props.leedsArray.length !== 0
                  ? <Loader />
                  : <Table columns={columns} dataSource={this.props.leedsArray} />
            }
         </React.Fragment>
      )
   }
}

const matStateToProps = (state) => {
   return {
      leedsArray: state.leeds.leedsArray,
      loader: state.leeds.loader
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchLeeds: () => dispatch(fetchLeeds())
   }
}

export default connect(matStateToProps, mapDispatchToProps)(Leeds);
