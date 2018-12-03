import React from 'react'
import { Card,Spin ,Alert,Icon,Switch } from 'antd'
export default class Loadings extends React.Component {
    state= {
        loading: false
    }
    toggle=(value)=>{
        this.setState({
            loading: value
        })
    }
    render(){
        const icon = <Icon type="loading" style={{fontSize: 24}}  />
        const container = (
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          );
        return (
            <div>
               <Card title="Spin用法" className="class-warp">
                   <Spin size="small" />
                   <Spin style={{margin: '0 10px'}} />
                   <Spin size="large" />
               </Card>
               <Card title="内容遮罩" className="class-warp">
                   <Spin tip="loading...">
                        <Alert 
                           message="React"
                           description="欢迎学习React"
                           type="info"
                        />
                   </Spin>
               </Card>
               <Card title="自定义指示符" className="class-warp"> 
                    <Spin indicator={icon}>
                         <Alert
                            message="React"
                            description="欢迎学习React"
                            type="info"
                         />
                    </Spin>
               </Card>
               <Card title="延迟加载" className="class-warp"> 
                    <Spin spinning={this.state.loading} delay={500}>
                       {container}
                    </Spin>
                    <div style={{marginTop: 16}}>
                        loading states: <Switch checked={this.state.loading} onChange={this.toggle} />
                    </div>
               </Card>
            </div>
        )
    }
}