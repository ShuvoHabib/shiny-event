import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchEventsAction from './fetchEvents';
import {getProductsError, getProducts, getProductsPending} from './reducers/reducer';
import Products from "./Products";

class ProductView extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchEvents();
    }

    render() {
        const {productsReducer, error, pending} = this.props;

        if(pending) return <p>...</p>;
        if(error) return <p>Sorry, no data found</p>;

        console.log(productsReducer);
        const myProductsReducer = productsReducer.map((products)=> <Products products={products}/>);

        return (
            <div className='product-list-wrapper'>
                Event
                {myProductsReducer}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getProductsError(state),
    productsReducer: getProducts(state),
    pending: getProductsPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchEvents: fetchEventsAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);

