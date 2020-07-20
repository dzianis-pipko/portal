import React, { Component } from 'react'
import './Quotes.css'
import { Table, Space } from 'antd'
import { connect } from 'react-redux'
import Loader from '../../containers/UI/Loader/Loader'
import { fetchQuotes } from '../../store/actions/quotes'
import ModalsQuotes from '../../containers/UI/ModalsQuotes/ModalsQuotes'

class Quotes extends Component {
   componentDidMount() {
      this.props.fetchQuotes()
   }
   deleteQuote = () => {
      this.props.deleteQuote()
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
                  <p onClick={this.deleteQuote} style={{ cursor: 'pointer', margin: 0 }}>Delete</p>
               </Space>
            ),
         },
      ];
      return (
         <React.Fragment>
            {
               this.props.loader && this.props.quotesArray.length !== 0
                  ? <Loader />
                  :
                  <div>
                     <ModalsQuotes />
                     <Table columns={columns} dataSource={this.props.quotesArray} bordered />
                  </div>
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
      fetchQuotes: () => dispatch(fetchQuotes()),
      // deleteQuote: () => dispatch(deleteQuote())
   }
}
export default connect(mapSateToProps, mapDispatchToProps)(Quotes);

