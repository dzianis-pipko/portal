import React, { Component } from 'react'
import './Quotes.css'
import { Table, Popconfirm, message } from 'antd'
import { connect } from 'react-redux'
import Loader from '../../containers/UI/Loader/Loader'
import { fetchQuotes } from '../../store/actions/quotes'
import ModalsQuotes from '../../containers/UI/ModalsQuotes/ModalsQuotes'
import { quotesDeleteFetch } from '../../store/actions/quotesDelete'

class Quotes extends Component {
   componentDidMount() {
      this.props.fetchQuotes()
   }
   confirm = (id) => {
      this.props.quotesDeleteFetch(id.key)
      message.success('Цитата удалена успешно');
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
            key: 'key',
            render: (id) => (
               <Popconfirm
                  title="Are you sure delete this quote?"
                  onConfirm={() => this.confirm(id)}
                  okText="Yes"
                  cancelText="No"
               >
                  <p style={{ cursor: 'pointer', margin: 0 }}>Delete</p>
               </Popconfirm>
            ),
         }
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
      quotesDeleteFetch: (id) => dispatch(quotesDeleteFetch(id))
   }
}
export default connect(mapSateToProps, mapDispatchToProps)(Quotes);

