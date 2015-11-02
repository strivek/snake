
var React = require('../assets/react');

/**
 * @desc export 必须有，ReactApp首字母需要大写
 */

import {DemoList} from 'demoList.react';

export var ReactApp = React.createClass({
    render:function(){
        return (<div className="container" >
            <DemoList />
        </div>);
    }
});

