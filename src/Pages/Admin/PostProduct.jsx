import React from 'react';
import './PostProduct.scss'
import axios from 'axios';

const PostProduct = () => {
    let add = (e)=>{
        let product = {
            title:e.target[0].value
        }
        axios.post('http://localhost:3000/products',product)
    }
    return (
        <div className='adminPost'>
            <h1>Добавить продукт</h1>
            <form onSubmit={(e)=>add(e)}>
                <input type="text" placeholder='title' />
                <input type="text" placeholder='image'/>
                <input type="text" placeholder='price'/>
                <input type="text" placeholder='pricesmall'/>
                <input type="text" placeholder='valute' />
                <input type="text" placeholder='sale'/>
                <input type="text" placeholder='promotion'/>
                <input type="text" placeholder='new' />
                <input type="text" placeholder='description' />
                <button>добавить товар</button>
            </form>
        </div>
    );
};

export default PostProduct;