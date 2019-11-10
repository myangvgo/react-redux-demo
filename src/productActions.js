// ACTION TYPES
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// ACTIONS
export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products }
});

export const fetchProductsFailure = error => ({
    type: fetchProductsFailure,
    payload: { error }
});

// ACTION CREATOR
export const fetchProducts = () => dispatch => {
    dispatch(fetchProductsBegin());
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(res => res.json())
        .then(json => {
            dispatch(fetchProductsSuccess(json));
            return json;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
};
