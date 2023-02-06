/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../ComponentsCSS/Menu.css'
import menuMobile from '../Assents/bars-solid.svg'
import lupa from '../img/lupa.png'
import x from '../img/x.png'
import DetalhesPesquisa from './DetalhesPesquisa';
import DetalhesPesquisaMovie from './DetalhesPesquisaMovie';

var resultadoS;
var resultadoF;

const MenuMobileCentro = ({ setMenuOn, dadosSerie, dados}) => {

  var [searchSerie, setsearchSerie] = useState([]);
  var [searchFilme, setsearchFilme] = useState([]);
  var [xOn, setXoFF] = useState(lupa);
  var [lupaPesquisa, setlupaPesquisa] = useState(false)
  const [nomeFilme, setNome] = useState();


  function searchAllMovies(e) {
    var valor = e.target.value;
    setNome(valor.toLowerCase())
     
    setsearchSerie(dadosSerie.serie);
    setsearchFilme(dados.all);


    nomeFilme === null ? searchSerie = '' : searchSerie ? resultadoS = searchSerie.filter((filme) => filme.nome.toLowerCase().startsWith(nomeFilme)) : <span></span>;
    nomeFilme === null ? searchFilme = '' : searchFilme ? resultadoF = searchFilme.filter((filme) => filme.nome.toLowerCase().startsWith(nomeFilme)) : <span></span>;  
  }


  function barraPesquisa() {

    if (lupaPesquisa === false)
    {
      setlupaPesquisa(true);  
      setXoFF(x)
    }
    else {
      setlupaPesquisa(false)
      setXoFF(lupa)
    }
  }

  return (
    <div className='menu_container'>
      <header>
        <div className="container">

          {/*Menu Mobile*/}
          <div className='BarraMobile'>
            <div>
              <img src={xOn} alt='lupa' onClick={barraPesquisa} />
            </div>
          </div>

          <div>
            <a href='/'><p>ReactMovie</p></a>
          </div>

          <nav className="menu">
            <a onClick={setMenuOn}><img src={menuMobile} alt="menuMobile" /></a>
          </nav>
        </div>
        {/*Alterar Barra de Pesquisa*/}
        <div className={lupaPesquisa ? 'lupa' : 'barraOFF'}>
          {/*Resultado Busca*/}
          <input type="Search" placeholder="Buscar Filmes e séries" onChange={searchAllMovies} />

          {/* {resultado ? <p className='resultadoBarra'>{resultado ? resultado.map((produtos) => <DetalhesPesquisa key={produtos.id} item={produtos} handleAdd={handleAdd} />) : <span></span>}</p> : <span></span>} */}

     
          {resultadoF ? <p className='resultadoBarra'>Filmes{resultadoF ? resultadoF.slice(0, 10).map((produtos) => <DetalhesPesquisaMovie key={produtos.nome} item={produtos}/>) : <span></span>}</p> : <span></span>} 

          {resultadoS ? <p className='resultadoBarra'>Séries{resultadoS ? resultadoS.slice(0, 10).map((produtos) => <DetalhesPesquisa key={produtos.nome} item={produtos}/>) : <span></span>}</p> : <span></span>}

        </div>

      </header>
    </div>
  )
}

export default MenuMobileCentro