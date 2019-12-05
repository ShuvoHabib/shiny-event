import React, {Component} from 'react';

class Products extends Component {
    render() {
        return (
            <div>
                {this.props.products.name.first}
            </div>
        );
    }
}

export default Products;