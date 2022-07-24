import React from 'react';
import './botao.css'

interface Props{
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void, children?: React.ReactNode
}

export const Botao = ({onClick, type, children}: Props) =>{
    return (
        <button onClick={onClick} type={type} className='login-form-btn'>
            {children}
        </button>
    )
}

export default Botao;