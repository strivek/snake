
var navList = [
    {'id': 1, 'name': '服务1', 'url': '/mike'},
    {'id': 2, 'name': '服务2', 'url': '/donnie'},
    {'id': 3, 'name': '服务3', 'url': '/raph'},
    {'id': 4, 'name': '服务4', 'url': '/leo'}
];

var React =require('react');

import {SliderNav,SliderNavs} from '/module/nav/nav';


var Content = React.createClass({
    render:function(){

    }
})



var APP = React.createClass({
    changeNav: function (nav) {
        this.setState({currentNav: nav.id});
    },
    getInitialState: function () {
        return {
            navList: navList,
            currentNav: 1
        };
    },

    render: function () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <SliderNavs navList={navList} currentNav={this.state.currentNav}
                                    changeNav={this.changeNav}></SliderNavs>
                    </div>
                    <div className="col-sm-10">

                    </div>
                </div>
            </div>
        );
    }
});

React.render(
    <APP />,
    document.getElementById('content')
);
