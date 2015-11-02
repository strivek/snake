var React =require('../assets/react');


export var DemoItem = React.createClass({

    render:function(){
        return(
            <li className="item">{this.props.name}</li>
        )
    }
})