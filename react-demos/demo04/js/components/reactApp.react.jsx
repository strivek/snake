var React = require('../assets/react');

/**
 * @desc export 必须有，ReactApp首字母需要大写
 */

import {DemoList} from 'demoList.react';
import {Content} from 'Content.react';

export var ReactApp = React.createClass({
    getInitialState: function () {
        return {
            list: ['andy', 'job', 'eve']
        }
    },
    render: function () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <DemoList list={this.state.list}/>
                    </div>
                    <div className="col-md-9">
                        <Content />
                    </div>
                </div>

            </div>
        );
    }
});

