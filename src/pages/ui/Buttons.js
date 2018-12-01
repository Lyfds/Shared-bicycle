import React from 'react';
import { Card,Button,Icon, Radio } from 'antd';
import './index.less';
export default class Buttons extends React.Component {
    state = {
      loading: true,
      size: "default"
    } 
    handleCloseLoading=()=>{
          this.setState({
              loading: false
          })
    }
    handleOpenLoading=()=>{
        this.setState({
            loading: true
        })
    }
    handleChange=(e)=>{
        this.setState({
           size: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="class-warp">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button disabled>Disabled</Button>
                </Card>
                <Card title="图形按钮" className="class-warp">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="class-warp">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                    <Button type="primary" onClick={this.handleOpenLoading}>开启</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary">前进<Icon type="right" /></Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="class-wrap" >
                     <Radio.Group value={this.state.size} onChange={this.handleChange}> 
                         <Radio value="small">小</Radio>
                         <Radio value="default">中</Radio>
                         <Radio value="large">大</Radio>
                     </Radio.Group>
                     <Button type="primary" size={this.state.size}>primary</Button>
                     <Button size={this.state.size}>Default</Button>
                     <Button size={this.state.size} type="dashed">Dashed</Button>
                    <Button size={this.state.size} type="danger">Danger</Button>
                    <Button size={this.state.size} disabled>Disabled</Button>
                </Card>
            </div>
        )
    }
} 