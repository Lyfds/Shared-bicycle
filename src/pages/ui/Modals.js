import React from 'react';
import { Card,Button,Modal } from 'antd';
import './index.less';
export default class Modals extends React.Component {
    state={
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    handleOpen=(type)=>{
        this.setState({
           [type]: true
        })
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title: "确定",
            content:"你确定已经学会React了吗？",
            onOk() {
                console.log('ok')
            },
            onCancel() {
                console.log('cancel')
            }
        })
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="class-warp">
                      <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>open</Button>
                      <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                      <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                      <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="class-warp">
                      <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                      <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
                      <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
                      <Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
                      <Button type="primary" onClick={()=>this.handleConfirm('error')}>Error</Button>
                </Card>
                <Modal
                    title="Basic title"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                    onOk={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                <p>欢迎学习React</p>
                </Modal>    
                <Modal
                    title="自定义页脚"
                    visible={this.state.showModal2}
                    onText="好的"
                    cancelText="算了"
                    onCancel={()=>{
                        this.setState({
                            showModal2: false
                        })
                    }}
                    onOk={()=>{
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                <p>欢迎学习React</p>
                </Modal>       
                <Modal
                    title="Title"
                    visible={this.state.showModal3}
                    style={{top:20}}
                    onCancel={()=>{
                        this.setState({
                            showModal3: false
                        })
                    }}
                    onOk={()=>{
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                <p>欢迎学习React</p>
                </Modal>   
                <Modal
                    title="Title"
                    visible={this.state.showModal4}
                    wrapClassName="vertical-center-modal"
                    onCancel={()=>{
                        this.setState({
                            showModal4: false
                        })
                    }}
                    onOk={()=>{
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                <p>欢迎学习React</p>
                </Modal>                             
            </div>
        )
    }
}