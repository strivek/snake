var React = require('../assets/react');

import {DemoItem} from 'demoItem.react';

export var DemoList = React.createClass({
    getDefaultProps: function () {
        return {
            list: ['张三', '李四', '王五']
        }
    },
    getInitialState: function () {
        return null;
    },
    //将要进行render，虚拟dom与真实dom做比较
    componentWillMount: function () {
    },
    //结束render
    componentDidMount: function () {
        //loading结束
    },
    render: function () {
        return (
            <ul className="list">
                {this.props.list.map(function (value, key) {
                    return (
                        <DemoItem key={key} name={value}/>
                    )
                })}
            </ul>
        )
    }
});