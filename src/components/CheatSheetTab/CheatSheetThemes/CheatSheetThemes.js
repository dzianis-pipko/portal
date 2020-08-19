import React, { Component } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import Loader from '../../../containers/UI/Loader/Loader'
import { fetchCheatSheetThemes } from '../../../store/actions/CheatSheetThemes'
import ModalsCheatSheetThemes from '../../../containers/UI/ModalsCheatSheetThemes/ModalsCheatSheetThemes'

class CheatSheetThemes extends Component {

   componentDidMount() {
      this.props.fetchCheatSheetThemes()
   }

   render() {
      const columns = [
         {
            key: 'title',
            title: 'Title',
            dataIndex: 'title',
            filters: [
               {
                  text: 'J',
                  value: 'J',
               },
               {
                  text: 'R',
                  value: 'R',
               },
            ],
            onFilter: (value, record) => record.title.indexOf(value) === 0,
            sorter: (a, b) => a.title.length - b.title.length,
            sortDirections: ['descend'],
         },
         {
            key: 'keyword',
            title: 'Keyword',
            dataIndex: 'keyword',
         },
         {
            key: 'image',
            title: 'Image',
            dataIndex: 'image',
            render: (image) => {
               return (
                  <img src={image} alt="" style={{ width: '80px' }} />
               )
            }

         },
      ];

      function onChange(pagination, filters, sorter, extra) {
         console.log('params', pagination, filters, sorter, extra);
      }
      return (
         <React.Fragment>
            {
               this.props.loader
                  ? <Loader />
                  :
                  <div>
                     <ModalsCheatSheetThemes />
                     <Table columns={columns} dataSource={this.props.currentCheatSheetThemes} onChange={onChange} />
                  </div>
            }
         </React.Fragment>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      currentCheatSheetThemes: state.CheatSheetTheme.currentCheatSheetThemes,
      loader: state.CheatSheetTheme.loader
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchCheatSheetThemes: () => dispatch(fetchCheatSheetThemes())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheatSheetThemes)
