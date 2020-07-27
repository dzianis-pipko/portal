import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import FormQuotes from '../FormQuotes/FormQuotes'

export default class ModalsQuotes extends Component {
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
         <div>
            <Button style={{ marginBottom: '10px' }} className="Header-button" type="primary" onClick={this.showModal}>
               Create quote
            </Button>
            <Modal
               title="Create quote"
               visible={this.state.visible}
               onCancel={this.handleCancel}
               footer={null}
            >
               <FormQuotes onOk={this.handleOk} />
            </Modal>
         </div>
      );
   }
}