import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = productId => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => removeFromDom(productId))
            .catch(err => console.error(err));
    }

    console.log(props);
    return (
        <>
            {props.product.map((product, i) => {
                return <p key={i}>
                    <Link to={"/" + personalbar._id}>{product.title}</Link> | 
                    <button onClick={deleteProduct(product._id)}>Edit</button> | 
                    <button onClick={deleteProduct(product._id)}>Delete</button> | 
                </p>
            }
            )}
        </>
    )
}

export default ProductList;