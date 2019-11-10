import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './productActions';

class ProductList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { error, loading, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.body}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

// we may have more than one reducer and
// each reducer should have its own slice of state
const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
