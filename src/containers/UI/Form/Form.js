import React, { Component } from 'react';
import {
   Form,
   Input,
   Button
} from 'antd';
import './Form.css';
import { connect } from 'react-redux';
import { userPostFetch } from '../../../store/actions/auth';



class Forms extends Component {

   state = {
      email: '',
      password: ''
   }

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value
      });
   }

   handleSubmit = e => {
      // e.preventDefault()
      // console.log('HendleSubmit', event);
      this.props.userPostFetch(this.state)
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
               name="email"
               label="E-mail"
               rules={[
                  {
                     type: 'email',
                     message: 'The input is not valid E-mail!',
                  },
                  {
                     required: true,
                     message: 'Please input your E-mail!',
                  },
               ]}
            >
               <Input
                  className="input"
                  name='email'
                  placeholder='email'
                  value={this.state.email}
                  onChange={this.handleChange}
               />
            </Form.Item>

            <Form.Item
               className="FormItem"
               name="password"
               label="Password"
               rules={[
                  {
                     required: true,
                     message: 'Please input your password!',
                  },
               ]}
               hasFeedback
            >
               <Input.Password
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleChange}
               />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
               <Button className="Header-button" type="primary" htmlType="submit">
                  LogIn
               </Button>
            </Form.Item>
         </Form>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return {
      userPostFetch: (userInfo) => dispatch(userPostFetch(userInfo))
   }
}

export default connect(null, mapDispatchToProps)(Forms)
