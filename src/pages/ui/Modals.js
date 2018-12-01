import React from 'react';
import { Card,Button,Modal } from 'antd';
import './index.less';
export default class Modals extends React.Component {
    render() {
        return (
            <div>
                <Card title="基础模态框" className="class-warp">
                      <Button type="primary" onClick={this.handleOpen('showModal1')}>open</Button>
                      <Button type="primary" onClick={this.handleOpen('showModal2')}>自定义页脚</Button>
                      <Button type="primary" onClick={this.handleOpen('showModal3')}>顶部20px弹框</Button>
                      <Button type="primary" onClick={this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
            </div>
        )
    }
}