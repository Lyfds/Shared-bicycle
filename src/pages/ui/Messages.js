import React from 'react';
import './index.less';
import { Card,Button,message } from 'antd';
export default class Messages extends React.Component {
    showMessage=(type)=> {
        message[type]('This is a message of '+type)
    }
    handleSuccess=()=> {
        message.loading('正在加载中',2.5)
            .then(()=>message.success('加载成功',2.5))
    }
    handleError=()=>{
        message.loading('正在加载中',2.5)
              .then(()=>message.error('加载失败',2.5))
    }
    render() {
        return (
            <div>
                <Card title="全局提示框" className="class-warp">
                    <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('loading')}>Loading</Button>
                </Card>
                <Card title="加载完成显示新的message" className="class-warp">
                    <Button type="primary" onClick={this.handleSuccess}>LoadingSuccess</Button>
                    <Button type="primary" onClick={this.handleError}>LoadingError</Button>
                </Card>
            </div>
        )
    }
}