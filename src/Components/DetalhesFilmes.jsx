import React from 'react'
import '../ComponentsCSS/DetalhesFilmes.css'


const DetalhesFilmes = ({item}) => {

   const {nome,img} = item;
    
    var nameBar  = nome.replace(/\s{1,4}/g,'-');

  return (
    <div className='container_detalhesPai'>
      <div className='container_detalhes'>
         <div>
          <p>{nome}</p>
         </div>
          <div>

          <a href= {`/Movie/${nameBar}/`}><img className='grid-item' src={img} alt='capaFilme'/></a>

          </div>
      </div>
     </div>

  )
}

export default DetalhesFilmes