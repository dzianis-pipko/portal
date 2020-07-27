import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import FormTasks from '../FormTasks/FormTasks'

export default class ModalsTasks extends Component {
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
               Create task
            </Button>
            <Modal
               title="Create a hard task"
               visible={this.state.visible}
               onCancel={this.handleCancel}
               footer={null}
            >
               <FormTasks onOk={this.handleOk} />
            </Modal>
         </React.Fragment>
      );
   }
}