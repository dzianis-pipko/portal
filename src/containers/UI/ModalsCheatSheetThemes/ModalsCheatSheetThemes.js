import React, { Component } from 'react'
import { Modal, Button } from 'antd';
// import FormCheatSheetSections from '../FormCheatSheetSections/FormCheatSheetSections'
import FormCheatSheetThemes from '../FormCheatSheetThemes/FormCheatSheetThemes'

export default class ModalsCheatSheetThemes extends Component {
   state = { visible: false };

   showModal = () => {
      this.setState({
         visible: true,
      });
   };

   handleOk = e => {
      console.log(e);
      this.setState({
         visible: false,
      });
   };

   handleCancel = e => {
      console.log(e);
      this.setState({
         visible: false,
      });
   };

   render() {
      return (
         <React.Fragment>
            <Button style={{ marginBottom: '10px' }} className="Header-button" type="primary" onClick={this.showModal}>
               Create a cheat sheet theme
            </Button>
            <Modal
               title="Create a hard cheat sheet"
               visible={this.state.visible}
               onCancel={this.handleCancel}
               footer={null}
            >
               <FormCheatSheetThemes onOk={this.handleOk} />
            </Modal>
         </React.Fragment>
      );
   }
}