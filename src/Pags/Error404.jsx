import React from 'react'
import '../ComponentsCSS/Error.css'
import logo from '../img/error.png'

export const Error404 = () => {
  return (
    <div className='container_error'>
      <div>
        <img src={logo} alt="" srcset="" />
        <header><h1>OPS! Não Encontramos essa Página</h1></header>
        <p>Acho que você escolheu a entrada errada, porque não achei o que você está procurando.</p>
        <div>
          <a href="/"><button>Voltar ao início</button></a>
        </div>
      </div>
       

    </div>
  )
}
