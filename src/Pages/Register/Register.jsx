import { useState } from 'react';
import './register.scss'
import axios from 'axios';


const Register = () => {
    
    const [password,setPassword] = useState(false)
    let handlePassword = ()=>{
        setPassword(!password)
    }
    let register = (e)=>{
        e.preventDefault()
        let user={
            email:e.target[0].value,
            password:e.target[1].value
        }
        axios('http://localhost:3000/user',user)
    }
    
    return (
        <section className='register'>
            <div className="container">
                <form onSubmit={(e)=>register(e)}>
                    <label>
                        <input type="email" placeholder='email'/>
                    </label>
                    <label>
                        <input type={password?"text":"password"} placeholder='password' />
                    </label>
                    {password?<p onClick={handlePassword}>Скрыть пароль</p>:<p onClick={(handlePassword)}>показать пароль</p>}
                    <button >Регистрация</button>
                </form>
            </div>
        </section>
    );
};

export default Register;