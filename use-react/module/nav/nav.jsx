'use strict';
var React =require('react');

export var SliderNav = React.createClass({
    handleClick: function (e) {
        e.preventDefault();
        this.props.handleClick();
    },
    render: function () {
        return (
            <li className="nav-item">
                <a className={this.props.isCurrent?'nav-link active':'nav-link'} onClick={this.handleClick}
                   href="#">{this.props.name}</a>
            </li>
        )
    }
});


export var SliderNavs = React.createClass({
    handleClick: function (nav) {
        this.props.changeNav(nav);
    },
    render: function () {
        return (
            <ul className="nav nav-pills nav-stacked">
                {
                    this.props.navList.map(function (nav) {
                        return <SliderNav
                            key={nav.url}
                            name={nav.name}
                            handleClick={this.handleClick.bind(this,nav)}
                            isCurrent={this.props.currentNav == nav.id}
                            />
                    }, this)
                }
            </ul>
        )
    }
});

