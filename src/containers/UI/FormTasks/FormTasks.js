import React, { Component } from 'react';
import {
   Form,
   Input,
   Button
} from 'antd'
import './FormTasks.css'
import { connect } from 'react-redux'
import { tasksPostFetch } from '../../../store/actions/tasksCreate'

class FormTasks extends Component {

   state = {
      theme: '',
      text: ''
   }

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value
      });
   }

   handleSubmit = e => {
      this.props.tasksPostFetch(this.state)
      this.props.onOk()
   }

   render() {
      const tailFormItemLayout = {
         wrapperCol: {
            xs: {
               span: 24,
               offset: 0,
            },
            sm: {
               span: 16,
               offset: 8,
            },
         },
      };
      return (
         <Form
            onFinish={(e) => this.handleSubmit(e)}
            scrollToFirstError
         >
            <Form.Item
               className="FormItem"
               name="theme"
               label="Theme:"
               rules={[
                  {
                     required: true,
                     message: 'Please enter theme!'
                  },
               ]}
            >
               <Input
                  className="input"
                  name='theme'
                  placeholder='input theme'
                  value={this.state.theme}
                  onChange={this.handleChange}
               />
            </Form.Item>
            <Form.Item
               className="FormItem"
               name="text"
               label="Task:"
               rules={[
                  {
                     required: true,
                     message: 'Please input your task!'
                  },
               ]}
            >
               <Input
                  className="input"
                  name='text'
                  placeholder='input task'
                  value={this.state.text}
                  onChange={this.handleChange}
               />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
               <Button className="Header-button" type="primary" htmlType="submit">
                  Create
               </Button>
            </Form.Item>
         </Form>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return {
      tasksPostFetch: (userInfo) => dispatch(tasksPostFetch(userInfo))
   }
}

export default connect(null, mapDispatchToProps)(FormTasks)
