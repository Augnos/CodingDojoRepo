import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';

const Detail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});

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
            <DeleteButton productId={product._id} successCallback={()=>navigate("/")}/>
        </div>
    )
}

export default Detail;