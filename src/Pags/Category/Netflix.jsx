import React from 'react'

import DetalhesFilmes from '../../Components/DetalhesFilmes'




const Netflix = ({ dados}) => {


  return (
    <div className='Ultimos'>
      <div className='subMenu_mobile'>
        <a href="/">Filmes - {dados ? dados.all.length : <span>0</span>}</a>
        <a href="/Series">Séries - {dados ? dados.serie.length : <span>0</span>}</a>
      </div>
      <h1>Originais Netflix</h1>
      <div className='grid-container'>
        {dados ? dados.all.filter(filme => filme.categoria.toLowerCase().includes('netflix')).map(filme => <DetalhesFilmes key={filme.nome} item={filme}  />) :  <span>Carregando...Aguarde</span>}
      </div>
    </div>
  )
}


export default Netflix