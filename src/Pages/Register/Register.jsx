import { useEffect, useState } from 'react';
import './register.scss'
import axios from 'axios';
import closeEye from './RegisterIMG/eye-password-hide.svg'
import openEye from './RegisterIMG/eye-password-show (1).svg'


const Register = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    
    const [password,setPassword] = useState(false)
    let handlePassword = ()=>{
        setPassword(!password)
    }
    let register = (e)=>{
        e.preventDefault()
        let user={
            name:e.target[0].value,
            lastname:e.target[1].value,
            email:e.target[2].value,
            password:e.target[3].value
        }
        axios('http://localhost:3000/user',user)
    }
    console.log(register);
    
    
    return (
        <section className='register'>
            <div className="container">
                <h2 className='register__name'>Регистрация</h2>
                <form onSubmit={(e)=>register(e)}>
                    <div className="register__inputs">
                        <label>
                            <h4 className='register__input__name'>Имя</h4>
                            <input className='register__input__one' type="text" placeholder='Name' />
                        </label>
                        <label>
                            <h4 className='register__input__lastname'>Фамилия</h4>
                            <input className='register__input__two' type="text" placeholder='Surname' />
                        </label>
                        <label>
                            <h4 className='register__input__e-mail'>E-mail</h4>
                            <input className='register__input__three' type="email" placeholder='E-mail'/>
                        </label>
                        <label>
                            <h4 className='register__input__password'>Пароль</h4>
                            <input className='register__input__four' type={password?"text":"password"} placeholder='Password' />
                        </label>
                    </div>
                    
                    {password?<img className='register__input__password__open' src={openEye} alt="" onClick={handlePassword}/>:<img className='register__input__password__close' src={closeEye} alt="" onClick={(handlePassword)}/>}
                    <button className='register__btn'>Регистрация</button>
                </form>
            </div>
        </section>
    );
};

export default Register;