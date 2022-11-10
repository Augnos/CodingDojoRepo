import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;

    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    //onChange to update title and price
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price:</label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description:</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm;