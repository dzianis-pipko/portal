import React, { Component, useContext, useState, useEffect, useRef } from 'react'
import './Quotes.css'
import { Table, Popconfirm, message, Input, Form } from 'antd'
import { connect } from 'react-redux'
import Loader from '../../containers/UI/Loader/Loader'
import { fetchQuotes } from '../../store/actions/quotes'
import ModalsQuotes from '../../containers/UI/ModalsQuotes/ModalsQuotes'
import { quotesDeleteFetch } from '../../store/actions/quotesDelete'
import { quotesPatchFetch } from '../../store/actions/quotesPatch'



const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
   const [form] = Form.useForm();
   return (
      <Form form={form} component={false}>
         <EditableContext.Provider value={form}>
            <tr {...props} />
         </EditableContext.Provider>
      </Form>
   );
};

const EditableCell = ({
   title,
   editable,
   children,
   dataIndex,
   record,
   handleSave,
   ...restProps
}) => {

   const [editing, setEditing] = useState(false);
   const inputRef = useRef();
   const form = useContext(EditableContext);

   useEffect(() => {
      if (editing) {
         inputRef.current.focus();

      }
   }, [editing]);

   const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
         [dataIndex]: record[dataIndex],
      });
   };

   const save = async e => {
      try {
         const values = await form.validateFields();
         toggleEdit();
         handleSave({ ...record, ...values });
      } catch (errInfo) {
         console.log('Save failed:', errInfo);
      }
   };

   let childNode = children;

   if (editable) {
      childNode = editing ? (
         <Form.Item
            style={{
               margin: 0,
            }}
            name={dataIndex}
            rules={[
               {
                  required: true,
                  message: `${title} is required.`,
               },
            ]}
         >
            <Input ref={inputRef} onPressEnter={save} onBlur={save} />
         </Form.Item>
      ) : (
            <div
               className="editable-cell-value-wrap"
               style={{
                  paddingRight: 24,
               }}
               onClick={toggleEdit}
            >
               {children}
            </div>
         );
   }

   return <td {...restProps}>{childNode}</td>;
};


class Quotes extends Component {
   componentDidMount() {
      this.props.fetchQuotes()
   }
   confirm = (id) => {
      this.props.quotesDeleteFetch(id.key)
      message.success('Цитата удалена успешно');
   }

   handleSave = row => {
      console.log('ROW', row);
      this.props.quotesPatchFetch(row)
   };

   render() {
      const columnsFirst = [
         {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
         },
         {
            title: 'Quote',
            dataIndex: 'text',
            key: 'quote',
            editable: true
         },
         {
            title: 'Action',
            key: 'key',
            render: (id) => (
               <Popconfirm
                  title="Are you sure delete this quote?"
                  onConfirm={() => this.confirm(id)}
                  okText="Yes"
                  cancelText="No"
               >
                  <p style={{ cursor: 'pointer', margin: 0 }}>Delete</p>
               </Popconfirm>
            ),
         }
      ];

      const components = {
         body: {
            row: EditableRow,
            cell: EditableCell,
         },
      };

      const columns = columnsFirst.map(col => {
         if (!col.editable) {
            return col;
         }

         return {
            ...col,
            onCell: record => {
               return ({
                  record,
                  editable: col.editable,
                  dataIndex: col.dataIndex,
                  title: col.title,
                  handleSave: this.handleSave,
               })
            },
         };
      });

      return (
         <React.Fragment>
            {
               this.props.loader && this.props.quotesArray.length !== 0
                  ? <Loader />
                  :
                  <div>
                     <ModalsQuotes />
                     <Table
                        columns={columns}
                        dataSource={this.props.quotesArray}
                        bordered
                        components={components}
                        rowClassName={() => 'editable-row'}
                     />
                  </div>
            }
         </React.Fragment>
      )
   }
}

const mapSateToProps = (state) => {
   return {
      quotesArray: state.quotes.quotesArray,
      loader: state.quotes.loader
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      fetchQuotes: () => dispatch(fetchQuotes()),
      quotesDeleteFetch: (id) => dispatch(quotesDeleteFetch(id)),
      quotesPatchFetch: (id) => dispatch(quotesPatchFetch(id))
   }
}
export default connect(mapSateToProps, mapDispatchToProps)(Quotes);

