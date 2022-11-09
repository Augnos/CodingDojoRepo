import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const Detail = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => console.log(res))
            .then(navigate('/'))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link><span> | </span>
            <button onClick={() => { deleteProduct(product._id) }}>Delete</button>
        </div>
    )
}

export default Detail;