import React from 'react';
import { Card,Table,Badge,Button, Modal,message } from 'antd';
import axios from './../../axios/index';
export default class HighTable extends React.Component {
    state={
        dataSource2:[]
    }
    componentWillMount() {
        this.request();
    }
    request=()=> {
        axios.ajax({
            url: '/table/high/list',
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
    handleChange=(pagination, filters, sorter)=> {
        this.setState({
            sortOrder:sorter.order
        })
    }
    handleDelete=(item)=> {
       Modal.confirm({
           title: '确认',
           content: `您确认要删除第${item.id}条数据吗？`,
           onOk: ()=> {
               message.success('删除成功！')
               this.request();
           }
       })
    }
    render() {
        const columns = [
            {   
                key: '1',
                title: 'ID',
                dataIndex: 'id',
                width: 50
            },
            {   
                key: '2',
                title: '用户名',
                dataIndex: 'userName',
                width: 60,
            },
            {   
                key: '3',
                title: '性别',
                dataIndex: 'sex',
                width: 60,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {   
                key: '4',
                title: '当前状态',
                dataIndex: 'state',
                width: 60,
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
                key: '5',
                title: '爱好',
                dataIndex: 'hobby',
                width: 60,
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
                key: '6',
                title: '出生日期',
                dataIndex: 'birthday',
                width: 80
            },
            {   
                key: '7',
                title: '联系地址',
                dataIndex: 'address',
                width: 120
            },
        ]
        const columns2 = [
            {   
                key: 'id',
                title: 'ID',
                dataIndex: 'id',
                width: 80,
                fixed: 'left'
            },
            {   
                key: 'userName',
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                fixed: 'left',
            },
            {   
                key: 'sex',
                title: '性别',
                dataIndex: 'sex',
                width: 100,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {   
                key: 'state',
                title: '当前状态',
                dataIndex: 'state',
                width: 100,
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
                key: 'hobby',
                title: '爱好',
                dataIndex: 'hobby',
                width: 100,
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
                key: 'birthday',
                title: '出生日期',
                dataIndex: 'birthday',
                width: 100
            },
            {   
                key: 'address',
                title: '联系地址',
                dataIndex: 'address',
                width: 120,
            },
            {   
                key: '8',
                title: '当前状态',
                dataIndex: 'state',
                width: 100,
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
                key: '9',
                title: '爱好',
                dataIndex: 'hobby',
                width: 100,
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
                key: '10',
                title: '出生日期',
                dataIndex: 'birthday',
                width: 100
            },
            {   
                key: '11',
                title: '联系地址',
                dataIndex: 'address',
                width: 120,
            },
            {   
                key: '12',
                title: '当前状态',
                dataIndex: 'state',
                width: 100,
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
                key: '13',
                title: '爱好',
                dataIndex: 'hobby',
                width: 100,
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
                key: '14',
                title: '出生日期',
                dataIndex: 'birthday',
                width: 100
            },
            {   
                key: '15',
                title: '联系地址',
                dataIndex: 'address',
                width: 180,
                fixed: 'right'
            },
        ]
        const columns3 = [
            {   
                key: '1',
                title: 'ID',
                dataIndex: 'id',
            },
            {   
                key: '2',
                title: '用户名',
                dataIndex: 'userName',
            },
            {   
                key: '3',
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: '4',
                dataIndex: 'age',
                sorter: (a,b)=>{
                   return a.age - b.age;
                },
                sortOrder: this.state.sortOrder
            },
            {   
                key: '5',
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
                key: '6',
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
                key: '7',
                title: '出生日期',
                dataIndex: 'birthday',
            },
            {   
                key: '8',
                title: '联系地址',
                dataIndex: 'address',
            },
        ]
        const columns4 = [
            {   
                width: 50,
                title: 'ID',
                dataIndex: 'id',
            },
            {   
                title: '用户名',
                dataIndex: 'userName',
            },
            {   
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {   
                width: 120,
                title: '当前状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': <Badge status="success" text="success" />,
                        '2': <Badge status="error" text="Error" />,
                        '3': <Badge status="default" text="Default" />,
                        '4': <Badge status="processing" text="Processing" />,
                        '5': <Badge status="warning" text="Warning" />,
                        '6': <Badge status="success" text="success" />
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
                dataIndex: 'birthday',
            },
            {   
                title: '联系地址',
                dataIndex: 'address',
            },
            // {
            //     title: '起床时间',
            //     dataIndex: 'time'
            // },
            {
                title: '操作',
                render:(text,item)=> {
                      return <Button size="small" onClick={()=>{this.handleDelete(item)}}>删除</Button>
                }
            }
        ]
        return (
            <div>
                 <Card title="头部固定" style={{marginTop: 10}}>
                     <Table 
                        bordered
                        columns={columns}
                        scroll={{y: 300 }}
                        dataSource={this.state.dataSource2}
                     />
                </Card>
                <Card title="左右侧固定" style={{marginTop: 10}}>
                     <Table 
                        bordered
                        columns={columns2}
                        scroll={{ x: 1530}}
                        dataSource={this.state.dataSource2}
                     />
                </Card>
                <Card title="表格排序" style={{marginTop: 10}}>
                     <Table 
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource2}
                        onChange={this.handleChange}
                     />
                </Card>
                <Card title="操作按钮" style={{marginTop: 10}}>
                     <Table 
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource2}
                    
                     />
                </Card>
            </div>
        )
    }
}