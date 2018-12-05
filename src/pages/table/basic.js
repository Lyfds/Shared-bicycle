import React from 'react';
import { Card,Table,Button,Modal,message } from 'antd';
import axios from './../../axios/index';
export default class Basic extends React.Component {
    state={
        dataSource2:[]
    }
    componentWillMount() {
        const data = [
            {
                id: '1',
                userName: '张三',
                sex: '男',
                age: '18',
                state: '2',
                hobby: '3',
                birthday: '1992-09-03',
                address: '北京市海淀区奥林匹克公园',
            },
            {
                id: '2',
                userName: '李四',
                sex: '男',
                age: '20',
                state: '4',
                hobby: '5',
                birthday: '2000-09-03',
                address: '北京市海淀区奥林匹克公园',
            },
            {
                id: '3',
                userName: '张三',
                sex: '男',
                age: '12',
                state: '1',
                hobby: '5',
                birthday: '2004-09-03',
                address: '北京市海淀区奥林匹克公园',
            },
            {
                id: '4',
                userName: '豆腐干',
                sex: '男',
                age: '24',
                state: '6',
                hobby: '8',
                birthday: '1998-09-14',
                address: '北京市海淀区奥林匹克公园',
            },
            {
                id: '5',
                userName: '大哥哥',
                sex: '男',
                age: '25',
                state: '4',
                hobby: '9',
                birthday: '1945-03-03',
                address: '北京市海淀区奥林匹克公园',
            },
            {
                id: '6',
                userName: '杜甫',
                sex: '男',
                age: '13',
                state: '2',
                hobby: '12',
                birthday: '1995-05-03',
                address: '北京市海淀区奥林匹克公园',
            }
        ]
        data.map((item,index)=>{
            return item.key = index
        })
        this.setState({
            dataSource: data
        })
        this.request()
    }
    request=()=> {
       axios.ajax({
           url: '/table/list',
           data: {
              params: {
                   page: 1
               }
           }
       }).then((res)=>{
            if(res.code === 0) {
                res.result.list.map((item,index)=>{
                  return item.key = index
                })
                this.setState({
                    dataSource2: res.result.list,
                    selectedRowKeys: [],
                    selectedRows:null
                })
            }
       })
    }
    onRowClick=(record,index)=> {
        let selectKey = [index]
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    handleDelete=()=>{
        let rows = this.state.selectedRows
        let ids = []
        rows.map((item)=>{
          return ids.push(item.id)
        })
        Modal.confirm({
              title: '删除提示',
              content: `您确定要删除这些数据吗？${ids.join(',')}`,
              onOk: ()=>{
                  message.success('删除成功！')
                  this.request();
                  this.ids = []
              }
        })
    }
    render() {
        const columns = [
            { 
                title: 'ID',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'  
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '当前状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '传奇咸鱼',
                        '2': '风华浪子',
                        '3': '花花公子',
                        '4': '四大才子',
                        '5': '极速王八',
                        '6': '白面郎君'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby',
                render(hobby) {
                    let config = {
                        '1': '唱歌',
                        '2': '看书',
                        '3': '游泳',
                        '4': '看小说',
                        '5': '旅游',
                        '6': '爬山',
                        '7': '看电影',
                        '8': '打篮球',
                        '9': '跑步',
                        '10': '骑行',
                        '11': '跳舞',
                        '12': '游戏'
                    }
                    return config[hobby];
                }
            },
            {
                title: '出生日期',
                dataIndex: 'birthday'
            },
            {
                title: '联系地址',
                dataIndex: 'address'
            },
        ]
        const { selectedRowKeys } = this.state
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                     <Table 
                        bordered
                        columns={columns}
                        pagination={false}
                        dataSource={this.state.dataSource}
                     />
                </Card>
                <Card title="动态数据渲染表格" style={{marginTop: 10}}>
                     <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                     />
                </Card>
                <Card title="单选-Mock" style={{marginTop: 10}}>
                     <Table 
                        bordered
                        columns={columns}
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                            return {
                              onClick:()=>{
                                this.onRowClick(record,index)
                              }   
                            }
                          }}
                        dataSource={this.state.dataSource2}
                     />
                </Card>
                <Card title="多选-Mock" style={{marginTop: 10}}>
                   <div>
                       <Button onClick={this.handleDelete} style={{marginBottom: 10}}>删除</Button>
                   </div>      
                     <Table 
                        bordered
                        columns={columns}
                        rowSelection={rowCheckSelection}
                        dataSource={this.state.dataSource2}
                     />
                </Card>
            </div>
        )
    }
}