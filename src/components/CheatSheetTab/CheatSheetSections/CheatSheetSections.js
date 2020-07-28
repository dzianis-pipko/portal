import React, { Component } from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux'
import { fetchCheatSheetSections } from '../../../store/actions/CheatSheetSections'
import Loader from '../../../containers/UI/Loader/Loader'
import ModalsCheatSheetSections from '../../../containers/UI/ModalsCheatSheetSections/ModalsCheatSheetSections'

class CheatSheetSections extends Component {

   componentDidMount() {
      this.props.fetchCheatSheetSections()
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
            key: 'logo',
            title: 'Logo',
            dataIndex: 'logo',
            render: (logo) => {
               return (
                  <img src={logo} alt="" style={{ width: '80px' }} />
               )
            }
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
                     <ModalsCheatSheetSections />
                     <Table columns={columns} dataSource={this.props.currentCheatSheetSections} onChange={onChange} />
                  </div>
            }
         </React.Fragment>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      currentCheatSheetSections: state.cheatSheetSections.currentCheatSheetSections,
      loader: state.cheatSheetSections.loader
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchCheatSheetSections: () => dispatch(fetchCheatSheetSections())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheatSheetSections)