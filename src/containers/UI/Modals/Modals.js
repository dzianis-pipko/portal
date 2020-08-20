import React, { Component } from 'react';
import './Modals.css';
import { Modal, Button } from 'antd';
import Forms from '../Form/Form';

export default class Modals extends Component {
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
            <Button className="Header-button" type="primary" onClick={this.showModal}>
               LogIn
            </Button>
            <Modal
               title="Для доступа к странице администратора введите емейл и пароль"
               visible={this.state.visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
               footer={null}
            >
               <Forms onOk={this.handleOk} />
            </Modal>
         </div>
      );
   }
}