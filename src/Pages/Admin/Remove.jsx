import axios from 'axios'
import React from 'react'

export const Remove = () => {
    let remove = (e)=>{
        e.preventDeafult()
        let product = {
            title:e.target[0].value
        }
        axios.patch(`http://localhost:3000/products ${e.target[0].value}`)
    }
  return (
    <section>
        <div className="container">
            <h1>иЗМНЕННИЕ ТОВАРА</h1>
            <form onSubmit={(e)=>remove(e)}>
                <input type="text"  placeholder='ккаой товар хотите изменить?'/>
                <input type="text" placeholder='title' />
                <input type="text" placeholder='image'/>
                <input type="text" placeholder='price'/>
                <input type="text" placeholder='pricesmall'/>
                <input type="text" placeholder='valute' />
                <input type="text" placeholder='sale'/>
                <input type="text" placeholder='promotion'/>
                <input type="text" placeholder='new' />
                <input type="text" placeholder='description' />
                <button>изменить</button>
            </form>
        </div>
    </section>
  )
}
