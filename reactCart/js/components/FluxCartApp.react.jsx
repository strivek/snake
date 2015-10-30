var React = require('/js/assets/react');

export var FluxCartApp = React.createClass({
    render:function(){
        return(
            <div clasName="flux-cart-app">
                <FluxProduct />
            </div>
        )
    }
})