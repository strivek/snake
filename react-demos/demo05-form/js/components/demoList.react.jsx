/**
 * @desc 1.增加props类型校验
 */
var React = require('../assets/react');

import {DemoItem} from 'demoItem.react';

export var DemoList = React.createClass({
    //当已经有props传递时，DefaultProps不受校验影响
    getDefaultProps: function () {
        return {
           list:'list'
        }
    },
    propTypes: {
        list: React.PropTypes.array.isRequired
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
            <ul className="nav nav-pills nav-stacked">
                {this.props.list.map(function (value, key) {
                    return (
                        <DemoItem key={key} name={value} />
                    )
                })}
            </ul>
        )
    }
});