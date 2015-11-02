
var React = require('../assets/react');

/**
 * @desc export 必须有，ReactApp首字母需要大写
 */

import {DemoList} from 'demoList.react';

export var ReactApp = React.createClass({
    getInitialState:function(){
      return{
          list:['andy','job','eve']
      }
    },
    render:function(){
        return (<div className="container" >
            <DemoList  list={this.state.list} />
        </div>);
    }
});

