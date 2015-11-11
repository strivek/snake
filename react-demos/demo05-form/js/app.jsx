var React = require('assets/react');
var ReactDOM = require('assets/react-dom');

//es6 import 推荐
import {ReactApp} from 'components/reactApp.react';
//require写法
//var ReactApp = require('components/reactApp.react').ReactApp;


ReactDOM.render(<ReactApp />, document.getElementById('reactApp'));