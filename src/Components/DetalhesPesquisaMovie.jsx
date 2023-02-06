import React from 'react'
import '../ComponentsCSS/Menu.css'

const DetalhesPesquisaMovie = ({item, handleAdd}) => {

  const {nome,img} = item
  var nameBar  = nome.replace(/\s{1,4}/g,'-');
  return (
    <div className='container_PesquisaSerie'>
      <div className='container_DetalhesSerie'>
         <div>
          <a href={`/Movie/${nameBar}/`} onClick={()=> handleAdd(item)}><img className='grid-item' src={img} alt='capaFilme'/></a>
         </div>
         <div>
          <p>{nome}</p>
         </div>
      </div>
     </div>
  )
}

export default DetalhesPesquisaMovie