import React from 'react';
import { Card,Button,Radio,notification  } from 'antd';
export default class Notice extends React.Component {
    handleOpen=(type,direction)=>{
        if(direction) {
            notification.config({
                placement: direction,
              });
        }
        notification[type]({
            message: "上月工资账单",
            description: "上月考勤22天，迟到10天，实发250元，请接收！",
            duration: 3,
        })
    }
    render() {
        return (
            <div>
                <Card title="通知提醒框(自动关闭延时3秒)" className="class-warp" >
                    <Button  type="primary" onClick={()=>this.handleOpen('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('warning')}>Warnging</Button>
                </Card>
                <Card title="通知提醒框(全局配置控制方向)" className="class-warp" >
                    <Button  type="primary" onClick={()=>this.handleOpen('success','topLeft')}>Success左上</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('info','topRight')}>Info右上</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('error','bottomLeft')}>Error左下</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('warning','bottomRight')}>Warnging右下</Button>
                </Card>
            </div>
        )
    }
}