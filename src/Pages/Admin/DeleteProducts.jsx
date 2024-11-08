import axios from 'axios';
import React from 'react';

const DeleteProducts = () => {
    let deleteOne = (e)=>{
        e.preventDefault()

        axios.delete(`http://localhost:3000/products/${e.target[0].value}`)
    }
    return (
        <div>
            <h1>удаление товара</h1>
            <form onSubmit={(e)=>deleteOne(e)}>
                <input type="text" placeholder='введите id товара' />
                <button>удалить</button>
            </form>
        </div>
    );
};

export default DeleteProducts;