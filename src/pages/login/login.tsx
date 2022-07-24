import { useState } from "react";
import { Link } from "react-router-dom";
import Botao from "../../components/Button";
import './login.css'

export const Login = () =>{
    const logo = require('../../assets/img/foxLogo.png')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="container">
        <div className="container-login">
            <div className="wrap-login">
            <form action="" className="login-form">
                <span className="login-form-title">
                    <img src={logo} alt="logo da empresa"/>
                </span>

                <span className="login-form-title">Sign In</span>
            
                <div className='wrap-input'>
                    <input className={email !== "" ? 'has-val input' : 'input'} type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <span className='focus-input' data-placeholder='Email'></span>
                </div>

                <div className='wrap-input wrap2'>   
                    <input className={password !== "" ? 'has-val input' : 'input'} type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <span className='focus-input' data-placeholder='Password'></span>
                </div>

                <div className='forgot'>
                    <Link className='txt3' to=''>Esqueceu sua senha?</Link>
                </div>

                <div className='container-login-form-btn'>
                    <Botao>
                        Login
                    </Botao>
                </div>

                <div className='text-center'>
                    <span className='txt1'>Não possui conta?</span>
                    <Link className='txt2' to='/register'>Criar conta.</Link>
                </div>
            </form>
            </div>
        </div>  
    </div> 
    );
    }