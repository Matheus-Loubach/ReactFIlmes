import React from 'react'
import { useState } from 'react';
import DetalhesSeries from '../Components/DetalhesSeries';

var nomeExibir = 'Exibir +';

const PagSeries = ({ Allserie, dados }) => {

  const [tamanhoS, settamanhoS] = useState(10);
  const [OnExibir, setExibir] = useState(false);


  function TamanhoSerie() {
    if (OnExibir === false) {
      //tamanho Exibir + -
      setExibir(true);
      settamanhoS(dados.serie.length);
      nomeExibir = 'Exibir -';
    }
    else {
      setExibir(false);
      settamanhoS(9);
      nomeExibir = 'Exibir +';

    }
  }

  return (
    <>
      {/*SubMenuMobile*/}
      <div className='Ultimos'>

        <div className='subMenu_mobile'>
          <a href="/">Filmes - {dados ? dados.all.length : <span>0</span>}</a>
          <a href="/Series">Séries - {dados ? dados.serie.length : <span>0</span>}</a>
          <a href="/Anime">Anime - {dados ? dados.anime.length : <span>0</span>}</a>
        </div>
        <div>
          <h1>Últimas séries atualizadas/adicionadas</h1>
        </div>
        <div className='grid-container'>
          {dados ? Allserie.serie.slice(0, tamanhoS).map((produtos) => <DetalhesSeries key={produtos.id} item={produtos} />) : <span>Carregando... Aguarde</span>}
        </div>
        {<p className='exibir' onClick={() => TamanhoSerie()}>{nomeExibir}</p>}
      </div>
    </>
  )
}

export default PagSeries