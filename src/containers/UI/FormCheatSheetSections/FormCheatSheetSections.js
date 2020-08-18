import React, { Component } from 'react';
import {
   Form,
   Input,
   Button,
   Upload
} from 'antd'
import { connect } from 'react-redux'
import { UploadOutlined } from '@ant-design/icons';
import { fetchCheatSheetSectionsPost } from '../../../store/actions/CheatSheetSectionsCreate'

class FormCheatSheetSections extends Component {

   handleSubmit = e => {
      console.log("E", e);
      this.props.fetchCheatSheetSectionsPost(e)
      this.props.onOk()
   }

   normFile = e => {
      console.log('Upload event:', e);

      if (Array.isArray(e)) {
         return e;
      }

      return e && e.fileList;

   };

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
               name="title"
               label="Title:"
               rules={[
                  {
                     required: true,
                     message: 'Please enter title!'
                  },
               ]}
            >
               <Input
                  className="input"
                  name='title'
                  placeholder='input title'
               />
            </Form.Item>
            <Form.Item
               className="FormItem"
               name="logo"
               label="Logo"
               valuePropName="fileList[0].response.imageUrl"
               getValueFromEvent={this.normFile}
               extra="PNG"
            >
               <Upload
                  name="image"
                  action="https://redevcrm.herokuapp.com/upload"
                  listType="picture"
                  accept=""
               >
                  <Button>
                     <UploadOutlined /> Upload photo
                  </Button>
               </Upload>
            </Form.Item>
            <Form.Item
               className="FormItem"
               name="image"
               label="Image"
               valuePropName="fileList[0].response.imageUrl"
               getValueFromEvent={this.normFile}
               extra="PNG"
            >
               <Upload
                  name="image"
                  action="https://redevcrm.herokuapp.com/upload"
                  listType="picture"
                  accept=""
               >
                  <Button>
                     <UploadOutlined /> Upload photo
                  </Button>
               </Upload>
            </Form.Item>


            <Form.Item {...tailFormItemLayout}>
               <Button className="Header-button" type="primary" htmlType="submit">
                  Create cheat sheet
               </Button>
            </Form.Item>
         </Form>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return {
      fetchCheatSheetSectionsPost: (userInfo) => dispatch(fetchCheatSheetSectionsPost(userInfo))
   }
}

export default connect(null, mapDispatchToProps)(FormCheatSheetSections)
