import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from '../components/ProductForm';

const Edit = () => {
    const { id } = useParams();

    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const editProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(navigate('/'))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Edit a Product {loaded}</h1>
            {loaded && (
                <ProductForm
                    onSubmitProp={editProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
            )}
        </div>
    )
}

export default Edit;
