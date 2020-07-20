import React, { Component } from 'react';
import {
   Form,
   Input,
   Button
} from 'antd';
import './FormQuotes.css';
import { connect } from 'react-redux';
import { quotesPostFetch } from '../../../store/actions/quotesCreate';
// import { fetchQuotes } from '../../../store/actions/quotes'




class FormQuotes extends Component {

   state = {
      author: '',
      text: ''
   }

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value
      });
   }

   handleSubmit = e => {
      // e.preventDefault()
      // console.log('HendleSubmit', event);
      this.props.quotesPostFetch(this.state)
      this.props.onOk
      // this.props.fetchQuotes()
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
               name="author"
               label="Author"
               rules={[
                  {
                     required: true,
                     message: 'Please enter author name!'
                  },
               ]}
            >
               <Input
                  className="input"
                  name='author'
                  placeholder='Author name'
                  value={this.state.author}
                  onChange={this.handleChange}
               />
            </Form.Item>
            <Form.Item
               className="FormItem"
               name="quote"
               label="Quote"
               rules={[
                  {
                     required: true,
                     message: 'Please input your text!'
                  },
               ]}
            >
               <Input
                  className="input"
                  name='text'
                  placeholder='Your text'
                  value={this.state.text}
                  onChange={this.handleChange}
               />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
               <Button className="Header-button" type="primary" htmlType="submit">
                  Create quote
               </Button>
            </Form.Item>
         </Form>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return {
      quotesPostFetch: (userInfo) => dispatch(quotesPostFetch(userInfo)),
      // fetchQuotes: () => dispatch(fetchQuotes())
   }
}

export default connect(null, mapDispatchToProps)(FormQuotes)
