'use strict';

var React = require('/js/assets/react/');

var FluxProduct = React.createClass({



    render: function () {
        return (
            <div className="flux-product">
                <img src={'img/' + this.props.product.image}/>

                <div className="flux-product-detail">
                    <h1 className="name">{this.props.product.name}</h1>

                    <p className="description">{this.props.product.description}</p>

                    <p className="price">Price: ${this.props.selected.price}</p>
                    <select onChange={this.selectVariant}>
                        {this.props.product.variants.map(function (variant, index) {
                            return (
                                <option key={index} value={index}>{variant.type}</option>
                            )
                        })}
                    </select>
                    <button type="button" onClick={this.addToCart} disabled={ats  > 0 ? '' : 'disabled'}>
                        {ats > 0 ? 'Add To Cart' : 'Sold Out'}
                    </button>
                </div>
            </div>
        )
    }
})

