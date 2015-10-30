var React = require('assets/react');
var ReactDOM = require('assets/react-dom');
var ProductData = require('/js/data/ProductData');


import {FluxCartApp} from 'components/FluxCartApp.react';



ReactDOM.render(
    <FluxCartApp />,
    document.getElementById('flux-cart')
);