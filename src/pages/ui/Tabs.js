import React from 'react';
import './index.less';
import { Card,message,Tabs,Icon } from 'antd';
export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 4;   
        const panes = [
            {
                title: 'Tab1',
                content: 'Content of Tab Pane 1',
                key: '1',
                closable: false
            },
            {
                title: 'Tab2',
                content: 'Content of Tab Pane 2',
                key: '2',
                closable: false
            },
            {
                title: 'Tab3',
                content: 'Content of Tab Pane 3',
                key: '3',
                closable: false
            }
        ]
        this.state = {
            activeKey: panes[0].key,
            panes    
        }
    }
    handleCallBack=(key)=>{
        message.info('您选择了Tab'+key)
    }
    onChange=(activeKey)=>{
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
      }
      add = () => {
        const panes = this.state.panes;
        const activeKey = `Tab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new '+activeKey, key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
        message.success('成功删除'+targetKey)
      }
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div>
                <Card title="Tab页签" className="class-warp">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallBack}> 
                        <TabPane tab="Tab 1" key="1">学习HTML</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>学习CSS</TabPane>
                        <TabPane tab="Tab 3" key="3">学习React</TabPane>
                    </Tabs>  
                </Card>
                <Card title="有图标的页签" className="class-warp">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallBack}> 
                        <TabPane tab={<span><Icon type="apple" />Tab1</span>} key="1">学习HTML</TabPane>
                        <TabPane tab={<span><Icon type="android" />Tab2</span>} key="2">学习CSS</TabPane>
                        <TabPane tab={<span><Icon type="windows" />Tab3</span>} key="3">学习React</TabPane>
                        <TabPane tab={<span><Icon type="ie" />Tab4</span>} key="4">JavaScript</TabPane>
                        <TabPane tab={<span><Icon type="chrome" />Tab5</span>} key="5">学习PHP</TabPane>
                        <TabPane tab={<span><Icon type="github" />Tab6</span>} key="6">学习Vue</TabPane>
                    </Tabs>  
                </Card>
                <Card title="动态新增关闭页签" className="class-warp">
                    <Tabs 
                          activeKey={this.state.activeKey}
                          type="editable-card"
                          onChange={this.onChange}
                          onEdit={this.onEdit}
                     > 
                         {
                             this.state.panes.map((panes)=>{
                                 return <TabPane
                                    tab={panes.title}
                                    key={panes.key}
                                    closable={panes.closable}
                                 >
                                 {panes.content}
                                 </TabPane>
                             })
                         }
                    </Tabs>  
                </Card>
            </div>
        )
    }
}