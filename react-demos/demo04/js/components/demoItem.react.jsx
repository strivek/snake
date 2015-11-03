var React =require('../assets/react');


export var DemoItem = React.createClass({

    render:function(){
        return(
            <li className="nav-item">
                <a className="nav-link" href="#">{this.props.name}</a>
            </li>
        )
    }
})