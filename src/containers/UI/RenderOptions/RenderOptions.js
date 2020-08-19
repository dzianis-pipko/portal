import React, { Component } from 'react'
import { Select } from 'antd'
import { connect } from 'react-redux'
import { fetchRenderOptions } from '../../../store/actions/renderOptions'

class RenderOptions extends Component {


   optionsRender() {
      const { Option } = Select;
      return this.props.currentRenderOptions.map(item => {
         return (
            <Option key={item.id} value={item.title}>{item.title}</Option>
         )
      })
   }

   componentDidMount() {
      this.props.fetchRenderOptions()
   }
   render() {
      return (
         <Select placeholder="Please chose a section">
            {this.optionsRender()}
         </Select>
      )
   }
}
const mapStateToProps = (state) => {
   return {
      currentRenderOptions: state.renderOptions.currentRenderOptions
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchRenderOptions: () => dispatch(fetchRenderOptions())
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(RenderOptions)