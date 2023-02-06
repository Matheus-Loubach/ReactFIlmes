import React, { useState } from 'react'
import { useEffect } from 'react';

import '../ComponentsCSS/PagUnica.css'
import '../ComponentsCSS/PagUnicaSerie.css'
import '../ComponentsCSS/responsivo.css'

import seta from '../img/seta.svg'
import DetalhesSeries from './DetalhesSeries';
import att from '../img/refresh.png'


const PagUnicaSerie = ({ dados, serie }) => {
  const { nome, sinopse, data, tempo, categoria, img, approval, allTemporadas, temporada1, temporada2, temporada3, temporada4, temporada5, temporada6, temporada7 } = serie;

  const [OnSinopse, setSinopse] = useState(true);
  const [semelhantes, setSemelhantes] = useState();
  const [Lista, setLista] = useState()

  const [exibirTemporada1, SetexibirTemporada1] = useState(false)
  const [exibirTemporada2, SetexibirTemporada2] = useState(false)
  const [exibirTemporada3, SetexibirTemporada3] = useState(false)

  


  function tamanhoSeries() {
    if (exibirTemporada1 === false) {
      SetexibirTemporada1(true)
      SetexibirTemporada2(false)
      SetexibirTemporada3(false)
    }
    else {
      SetexibirTemporada1(false)
    }
  }
  function tamanhoSeries2() {
    if (exibirTemporada2 === false) {
      SetexibirTemporada1(false)
      SetexibirTemporada2(true)
      SetexibirTemporada3(false)
    }
    else {
      SetexibirTemporada2(false)
    }
  }
  function tamanhoSeries3() {
    if (exibirTemporada3 === false) {
      SetexibirTemporada1(false)
      SetexibirTemporada2(false)
      SetexibirTemporada3(true)
    }
    else {
      SetexibirTemporada3(false)
    }
  }

  function mudarSinopse() {

    if (OnSinopse === false)
      setSinopse(true)
    else {
      setSinopse(false)
    }
  }


  useEffect(() => {


    const timer = setTimeout(() => {

      if (categoria.toLowerCase().includes("ação")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("ação")))
      }
      else if (categoria.toLowerCase().includes("adolescência")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("adolescência")))
      }
      else if (categoria.toLowerCase().includes("animação")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("animação")))
      }
      else if (categoria.toLowerCase().includes("aventura")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("aventura")))
      }
      else if (categoria.toLowerCase().includes("biografia")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("biografia")))
      }
      else if (categoria.toLowerCase().includes("comédia")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("comédia")))
      }
      else if (categoria.toLowerCase().includes("drama")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("drama")))
      }
      else if (categoria.toLowerCase().includes("fantasia")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("fantasia")))
      }
      else if (categoria.toLowerCase().includes("f-Científica")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("f-Científica")))
      }
      else if (categoria.toLowerCase().includes("romance")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("romance")))
      }
      else if (categoria.toLowerCase().includes("suspense")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("suspense")))
      }
      else if (categoria.toLowerCase().includes("terror")) {
        setLista(dados.serie.filter((filme) => filme.categoria.toLowerCase().includes("terror")))

      }


      update();
    }, 200);


    if (timer >= 70) {
      clearTimeout(timer)
    } else {
      return () => clearTimeout(timer);
    }

  }, [[setLista, nome, Lista, serie, dados]]);


  function update() {
    setSemelhantes('');
    for (let i = Lista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [Lista[i], Lista[j]] = [Lista[j], Lista[i]];
    }
    setSemelhantes(Lista);
    return Lista;
  }



  return (
    <div className='pag_serie'>

      <div className='container_movie'>
        <div>
          <img src={img} alt="img" />
        </div>


        <div>
          <div className='sub_movie'>
            <h1>{nome}</h1>
            <p>{data}</p> <p>{categoria}</p> <p>Temporadas: {tempo}</p> <p>Aprovação: {approval}</p>
          </div>
          <div className='seta'>
            <p className='sinop'>Sinopse</p>
            <div>
              <img onClick={mudarSinopse} alt='sinopse' src={seta} />
            </div>
          </div>
        
          <h2 className={OnSinopse ? 'sinopseOn' : 'sinopseOF'}>{sinopse}</h2>

          <div className='container_temporada'>
           
            <nav className='container_menu'>
              <ul class="menu">          
                <li className='sub_menuDrop'>Selecionar Temporada  ⇓
                  <ul>
                    <li onClick={() => tamanhoSeries()}>Temporada 1</li>
                    {temporada2 ?  <li onClick={() => tamanhoSeries2()}>Temporada 2</li> : <span></span> }
                    {temporada3 ?  <li onClick={() => tamanhoSeries3()}>Temporada 3</li> : <span></span> }
                  </ul>
                </li>
              </ul>
            </nav>



            {/*Carregar Toda Temporada*/}
            <div>
              {allTemporadas ? allTemporadas.map((ser) => <div className='container_subTemporada'><div><p>Temporada Completa:</p></div> <span> <a href={ser.link}>Assistir</a></span>            <p className='player'>Player Recomendado: Streamtape</p></div>) : <span></span>}
            </div>



            {/*carregar cada temporada*/}
            <div>
              {exibirTemporada1 ? temporada1.map((ser) => <div className='container_subTemporada'><div><p>Temp 1:</p></div>  <p>Ep:{ser.id}: {ser.ep}</p> <span> <a href={ser.link}>Assistir</a></span>  </div>) : <span></span>}
              {/*Exibir + or -*/}

            </div>

            <div>
              {exibirTemporada2 ? temporada2.map((ser) => <div className='container_subTemporada'><div><p>Temp 2:</p></div> <p>Ep:{ser.id}: {ser.ep}</p> <span> <a href={ser.link}>Assistir</a></span> </div>) : <span></span>}

            </div>

            <div>
              {exibirTemporada3 ? temporada3.map((ser) => <div className='container_subTemporada'><div><p>Temp 3:</p></div> <p>Ep:{ser.id}: {ser.ep}</p> <span> <a href={ser.link}>Assistir</a></span>  </div>) : <span></span>}
            </div>
          </div>




        </div>


      </div>

      <div>
        <div>
          <div>
            <h2 className='container_refresh'>Categorias Semelhantes <span onClick={update}> <img src={att} alt="update" /> </span> </h2>
          </div>
          <div className='grid-container'>

            {semelhantes ? semelhantes.slice(0, 10).map((produtos) => <DetalhesSeries item={produtos} />) : <span>Falha ao carregar</span>}
          </div>
        </div>
      </div>


    </div>
  )
}

export default PagUnicaSerie