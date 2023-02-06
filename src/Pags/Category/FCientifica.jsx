import React from 'react'
import { useState } from 'react';

import DetalhesFilmes from '../../Components/DetalhesFilmes'


var nomeExibir = 'Exibir +';


const FCientifica = ({ dados}) => {

  const [tamanhoF, settamanhoF] = useState(10);
  const [OnSinopse, setSinopse] = useState(false);


  function TamanhoFilmes() {
    if (OnSinopse === false) {
      //tamanho Exibir + -
      setSinopse(true);
      settamanhoF(dados.all.length);
      nomeExibir = 'Exibir -';
    }
    else {
      setSinopse(false);
      settamanhoF(9);
      nomeExibir = 'Exibir +';

    }
  }

  return (
    <div className='Ultimos'>
      <div className='subMenu_mobile'>
            <a href="/">Filmes - {dados ? dados.all.length :  <span>0</span> }</a>
            <a href="/Series">Séries - {dados ? dados.serie.length :  <span>0</span> }</a>
          </div>
      <h1>Ficção-Científica</h1>
      <div className='grid-container'>
        {dados ? dados.all.filter(filme => filme.categoria.toLowerCase().includes('científica')).slice(0, tamanhoF).map(filme => <DetalhesFilmes key={filme.nome} item={filme}  />) : <span>Carregando...Aguarde</span>}
      </div>
      <p className='exibir' onClick={() => TamanhoFilmes()}>{nomeExibir}</p>
    </div>
  )
}


export default FCientifica