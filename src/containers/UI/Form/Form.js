import React, { Component } from 'react';
import {
   Form,
   Input,
   Button
} from 'antd';
import './Form.css';



export default class Forms extends Component {
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
               <Input className="input" />
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
               <Input.Password />
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
