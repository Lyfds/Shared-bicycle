import React from 'react';
import { Row,Col } from 'antd';
import moment from "moment";
import './index.less';
export default class Header extends React.Component {
    state = {}
    componentWillMount() {
        this.setState({
            userName: '湖畔一角',
        })
        setInterval(() => {
            this.setState({
               date: moment().format('YYYY-MM-DD HH:mm:ss')
            })
        },1000)
    }
   
    render() {
        return (
            <div className="header">
                <Row span="24" className="header-top">
                     <span>欢迎您，{this.state.userName}</span>
                      <a href="#">退出</a>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">首页</Col>
                    <Col span="20" className="weather"> 
                        <span className="date">{this.state.date}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}