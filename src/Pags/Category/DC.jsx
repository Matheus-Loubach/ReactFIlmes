import React from 'react'
import DetalhesFilmes from '../../Components/DetalhesFilmes'




const DC = ({dados}) => {
  return (
    <>
      <div className='Ultimos'>
      <div className='subMenu_mobile'>
            <a href="/">Filmes - {dados ? dados.all.length :  <span>0</span> }</a>
            <a href="/Series">Séries - {dados ? dados.serie.length :  <span>0</span> }</a>
          </div>
        <h1>Sessão DC Comics</h1>
      </div>
      <div className='grid-container'>
        {dados ? dados.dc.map((produtos) => <DetalhesFilmes key={produtos.id} item={produtos} />) : <span>Carregando...Aguarde</span>}
      </div>
    </>
  )
}

export default DC