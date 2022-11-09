import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p><a href={axios.delete("http://localhost:8000/api/products/" + product._id)} >Delete</a> | <a href={"http://localhost:8000/api/products/delete/" +product._id}></a></p>
        </div>
    )
}

export default Detail;