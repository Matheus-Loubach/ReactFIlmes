import React from 'react'
import { useState } from 'react';
import DetalhesPesquisa from './DetalhesPesquisa';
import DetalhesPesquisaMovie from './DetalhesPesquisaMovie';
import removeAccents from 'remove-accents';

var resultadoS = '';
var resultadoF = '';

const MenuCategoriaPC = ({ dadosAnime, dadosSerie, dados }) => {

  /*Lista - movieSelect */
  var [searchSerie, setsearchSerie] = useState([]);
  var [searchFilme, setsearchFilme] = useState([]);


  const [nomeFilme, setNome] = useState();


  function searchAllMovies(e) {
    var valor = e.target.value;
    setNome(valor.toLowerCase())

    setsearchSerie(dadosSerie.serie);
    setsearchFilme(dados.all);

    //remove acentos e ordem das palavras
    const resultadoSerie = nomeFilme ? searchSerie.filter(serie => {
      const termoPesquisa = removeAccents(nomeFilme.replace(/\s+/g, '.*\\b').trim());
      const nomeFilmeSemAcento = removeAccents(serie.nome.toLowerCase());
      const regex = new RegExp(`\\b${termoPesquisa}.*`, 'i');
      return regex.test(nomeFilmeSemAcento);
    }) : [];

    const resultadoFilme = nomeFilme ? searchFilme.filter(filme => {
      const termoPesquisaSemAcento = removeAccents(nomeFilme.toLowerCase().replace(/\s+/g, '.*\\b').trim());
      const nomeFilmeSemAcento = removeAccents(filme.nome.toLowerCase());
      const regex = new RegExp(`\\b${termoPesquisaSemAcento}.*`, 'i');
      return regex.test(nomeFilmeSemAcento);
    }) : [];

    resultadoF = resultadoFilme.reverse();
    resultadoS = resultadoSerie.reverse();
  }


  return (
    <div className='container_filmes'>
      {/*Menu PC*/}
      <div className='container_categoria'>
        <p><a href="/">ReactMovie</a></p>

        {/*Barra de Pesquisa PC*/}
        <div className='container_inputBarra'>
          <input type="text" placeholder='Buscar Filmes e Séries...' onChange={(e) => searchAllMovies(e)} />
          {/* <img src={lupa} alt="lupa" /> */}
        </div>
        <ul>

          {resultadoF ? <p className='resultadoBarra'>Filmes{resultadoF ? resultadoF.slice(0, 10).map((produtos) => <DetalhesPesquisaMovie key={produtos.nome} item={produtos} />) : <span></span>}</p> : <span></span>}

          {resultadoS ? <p className='resultadoBarra'>Séries{resultadoS ? resultadoS.slice(0, 10).map((produtos) => <DetalhesPesquisa key={produtos.nome} item={produtos} />) : <span></span>}</p> : <span></span>}

          <li><a href="/"><p >Filmes - {dadosSerie ? dadosSerie.all.length : <span>0</span>}</p></a></li>
          <li><a href="/Series"><p >Seríes - {dadosSerie ? dadosSerie.serie.length : <span>0</span>}</p></a></li>

        </ul>

        <h2>Gêneros</h2>
        <ul>
          <li><a href="/Ação">Ação</a></li>
          <li><a href="/Animação">Animação</a></li>
          <li><a href="/Aventura">Aventura</a></li>
          <li><a href="/Biografia">Biografia</a></li>
          <li><a href="/Comédia">Comédia</a></li>
          <li><a href="/Drama">Drama</a></li>
          <li><a href="/F-Científica">F-Científica</a></li>
          <li><a href="/Romance">Romance</a></li>
          <li><a href="/Suspense">Suspense</a></li>
          <li><a href="/Terror">Terror</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MenuCategoriaPC