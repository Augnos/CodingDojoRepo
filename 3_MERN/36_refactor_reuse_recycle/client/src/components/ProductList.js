import React from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { removeFromDom } = props;
    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {removeFromDom(productId)})
            .then(console.log(productId))
            .then(navigate('/'))
            .catch(err => console.error(err));
    }

    return (
        <>
            {props.products.map((product, i) =>
                <div key={i}>
                    <Link to={"/" + product._id}>{product.title}</Link><span> | </span>
                    <Link to={"/products/" + product._id + "/edit"}>Edit</Link><span> | </span>
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </div>
            )}
        </>
    )
}

export default ProductList;