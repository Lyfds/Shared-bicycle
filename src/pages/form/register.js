import React from 'react';
import moment from 'moment';
import { Card,Form,Button,Icon,Input,Checkbox,Radio,Select,Switch,InputNumber ,DatePicker,TimePicker,Upload,message  } from 'antd';
import './form.less';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FormRegister extends React.Component {
    state={}
    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
      }
    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();
        message.success(`${userInfo.userName} 登录成功 当前密码为：${userInfo.userPwd} `)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm:4
            },
            wrapperCol: {
               xs: 24,
               sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                         <FormItem label="用户名" {...formItemLayout}>
                         {
                            getFieldDecorator('userName',{
                                initialValue: '',
                                rules: [
                                    {
                                       required: true,
                                       message: '用户名不能为空'
                                    }
                                ]
                            })( 
                            <Input placeholder="请输入用户名" />
                         )
                        }    
                         </FormItem>
                         <FormItem label="密码" {...formItemLayout}>
                         {
                            getFieldDecorator('userPwd',{
                                initialValue: '',
                                rules: [
                                    {
                                       required: true,
                                       message: '密码不能为空'
                                    }
                                ]
                            })(
                              <Input type="password" placeholder="请输入密码" />
                            )
                        }         
                         </FormItem>
                         <FormItem label="性别" {...formItemLayout}>
                         {
                            getFieldDecorator('sex',{
                                initialValue: '1',
                            })(
                              <RadioGroup>
                                   <Radio value="1">男</Radio>
                                   <Radio value="2">女</Radio>
                              </RadioGroup>
                            )
                        }         
                         </FormItem>
                         <FormItem label="年龄" {...formItemLayout}>
                         {
                            getFieldDecorator('age',{
                                initialValue: 18,
                            })(
                               <InputNumber min={1} />
                            )
                        }         
                         </FormItem>
                         <FormItem label="当前状态" {...formItemLayout}>
                         {
                            getFieldDecorator('state',{
                                initialValue: '2',
                            })(
                               <Select>
                                   <Option value="1">传奇咸鱼</Option>
                                   <Option value="2">风华浪子</Option>
                                   <Option value="3">四大才子</Option>
                                   <Option value="4">花花公子</Option>
                                   <Option value="5">极速王八</Option>
                                   <Option value="6">白面郎君</Option>
                               </Select>
                            )
                        }         
                         </FormItem>
                         <FormItem label="爱好" {...formItemLayout}>
                         {
                            getFieldDecorator('hobby',{
                                initialValue: ['2','5'],
                            })(
                               <Select mode="multiple">
                                   <Option value="1">唱歌</Option>
                                   <Option value="2">看书</Option>
                                   <Option value="3">游泳</Option>
                                   <Option value="4">看小说</Option>
                                   <Option value="5">旅游</Option>
                                   <Option value="6">爬山</Option>
                                   <Option value="7">看电影</Option>
                                   <Option value="8">打篮球</Option>
                                   <Option value="9">跑步</Option>
                                   <Option value="10">骑行</Option>
                                   <Option value="11">跳舞</Option> 
                                   <Option value="12">游戏</Option>                                   
                               </Select>
                            )
                        }         
                         </FormItem>
                         <FormItem label="是否已婚" {...formItemLayout}>
                         {
                            getFieldDecorator('isMerried',{
                                valuePropName:'checked',
                                initialValue: true
                            })(
                               <Switch />
                            )
                        }         
                         </FormItem>
                         <FormItem label="出生日期" {...formItemLayout}>
                         {
                            getFieldDecorator('birthday',{
                                initialValue: moment('1992-03-02')
                            })(
                               <DatePicker
                                   showTime
                                   format="YYYY-MM-DD HH:mm:ss"
                               />
                            )
                        }         
                         </FormItem>
                         <FormItem label="联系地址" {...formItemLayout}>
                         {
                            getFieldDecorator('address',{
                                initialValue: '北京市海淀区奥林匹克公园'
                            })(
                                <TextArea 
                                  autosize={{minRows: 2, maxRows: 6 }}
                                />
                            )              
                        }         
                         </FormItem>
                         <FormItem label="早起时间" {...formItemLayout}>
                         {
                            getFieldDecorator('earlyTime')(
                                <TimePicker />
                            )              
                        }         
                         </FormItem>
                         <FormItem label="头像(仅支持.jpg格式)" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                    className="avatar-uploader"
                                    listType="picture-card"
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    showUploadList={false}
                                    onChange={this.handleChange}
                                    >
                                    {this.state.userImg?<img style={{width: 130,height: 130}} src={this.state.userImg} alt="" />:<Icon type="plus" />}
                                    </Upload>
                                )              
                            }         
                         </FormItem>
                         <FormItem {...offsetLayout}>
                         {
                            getFieldDecorator('userImg')(
                                <Checkbox>我已阅读过<a href="/">本网站协议</a></Checkbox>
                            )              
                        }         
                         </FormItem>
                         <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>  
                         </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister);