import React, { Component } from 'react'
import './Quotes.css'
import { Table, Space } from 'antd'
import { connect } from 'react-redux'
import Loader from '../../containers/UI/Loader/Loader'
import { fetchQuotes } from '../../store/actions/quotes'

class Quotes extends Component {
   componentDidMount() {
      this.props.fetchQuotes()
   }
   render() {
      const columns = [
         {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
         },
         {
            title: 'Quote',
            dataIndex: 'quote',
            key: 'quote',
         },
         {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
               <Space size="middle">
                  <p style={{ cursor: 'pointer', margin: 0 }}>Delete</p>
               </Space>
            ),
         },
      ];
      return (
         <React.Fragment>
            {
               this.props.loader && this.props.quotesArray.length !== 0
                  ? <Loader />
                  : <Table columns={columns} dataSource={this.props.quotesArray} bordered />
            }
         </React.Fragment>
      )
   }
}

const mapSateToProps = (state) => {
   return {
      quotesArray: state.quotes.quotesArray,
      loader: state.quotes.loader
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      fetchQuotes: () => dispatch(fetchQuotes())
   }
}
export default connect(mapSateToProps, mapDispatchToProps)(Quotes);

