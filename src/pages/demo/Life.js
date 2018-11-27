import React from 'react';
import './index.less';
import { Button } from 'antd';

export default class Life extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div className="content">
                <p>React</p>
                <Button onClick={this.handleAdd.bind(this)}>Antd点击</Button>
                <button onClick={this.handleAdd.bind(this)}>点击</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
    handleAdd() {
        this.setState({
            count: this.state.count+1
        })
    }
}