import React from 'react';
// import axios from 'axios';

const ProductList = (props) => {
    
    console.log(props);
    return (
        <>
            {props.product.map((product, i) =>
                <div><a href={"/" + product._id} key={i}>{product.title}</a></div>
            )}
        </>
    )
}

export default ProductList;