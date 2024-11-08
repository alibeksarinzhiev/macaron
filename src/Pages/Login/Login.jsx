import React from 'react';
import './Login.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate()
    const login = (e)=>{
        e.preventDefault()
        let user = {
            email:e.target[0].value,
            password:e.target[1].value
        }
        axios.post('http://localhost:3000/login',user)
        .then(({data})=>console.log(data))
        .then(navigate('/'))
        
    }
    return (
        <section className='login'>
            <div className="container">
                <form onSubmit={(e)=>login(e)}>
                    <label htmlFor="">
                        <input type="email" placeholder='email' />
                    </label>
                    <label>
                        <input type="password" placeholder='password' />
                    </label>
                    <button>Войти</button>
                </form>
            </div>
        </section>
    );
};

export default Login;