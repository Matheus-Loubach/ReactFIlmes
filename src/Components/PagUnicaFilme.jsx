import React, { useState,useEffect } from 'react'
import '../ComponentsCSS/PagUnica.css'
import seta from '../img/seta.svg'
import DetalhesFilmes from './DetalhesFilmes';
import att from '../img/refresh.png'


const PagUnicaFilme = ({ handleAdd, dados, filme }) => {


  const { nome, sinopse, data, tempo, categoria, img, link, approval } = filme;

  const [OnSinopse, setSinopse] = useState(false);
  const [semelhantes, setSemelhantes] = useState();
  const [Lista, setLista] = useState()


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
        setLista(dados.all.filter((filme) => filme.categoria.toLowerCase().includes("ação")))
      }
      else if (categoria.toLowerCase().includes("animação")) {
        setLista(dados.all.filter((filme) => filme.categoria.toLowerCase().includes("animação")))
      }
      else if (categoria.toLowerCase().includes("aventura")) {
        setLista(dados.all.filter((filme) => filme.categoria.toLowerCase().includes("aventura")))
      }
      else if (categoria.toLowerCase().includes("biografia")) {
        setLista(dados.all.filter((filme) => filme.categoria.toLowerCase().includes("biografia")))
      }
      else if (categoria.toLowerCase().includes("comédia")) {
        setLista(dados.all.filter((filme) => filme.categoria.toLowerCase().includes("comédia")))
      }
      else if (categoria.toLowerCase().includes("f-Científica")) {
        setLista(dados.all.filter((filme) => filme.categoria.toLowerCase().includes("f-Científica")))
      }
      else if (categoria.toLowerCase().includes("romance")) {
        setLista(dados.all.filter((filme) => filme.categoria.toLowerCase().includes("romance")))
      }
      else if (categoria.toLowerCase().includes("suspense")) {
        setLista(dados.all.filter((filme) => filme.categoria.toLowerCase().includes("suspense")))
      }
      else if (categoria.toLowerCase().includes("terror")) {
        setLista(dados.all.filter((filme) => filme.categoria.toLowerCase().includes("terror")))
      }


      update();

    }, 100);


    if (timer >= 20) {
      clearTimeout(timer)
    } else {
      return () => clearTimeout(timer);
    }

  }, [[setLista, nome, setSemelhantes, semelhantes, filme]]);


  function update() {

    if (Lista) {

      for (let i = Lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Lista[i], Lista[j]] = [Lista[j], Lista[i]];
      }
      setSemelhantes(Lista);
    } else {
      return Lista;
    }
    return Lista;


  }




  return (
    
    <div className='page_filmes'>

      <div className='container_movie'>
        <div>
          <img src={img} alt="img" />

        </div>

        <div>
          <div className='sub_movie'>
            <h1>{nome}</h1>
            <p>{data}</p> <p>{categoria}</p> <p>Duração: {tempo}</p> <p>Aprovação: {approval}</p>
          </div>
          <div className='seta'>
            <p className='sinop'>Sinopse</p>
            <div>
              <img onClick={mudarSinopse} alt='sinopse' src={seta} />
            </div>
          </div>
          <h2 className={OnSinopse ? 'sinopseOn' : 'sinopseOF'}>{sinopse}</h2>
          <div>
            <a href={link}><button>Assistir</button></a>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className='container_refresh'>Categorias Semelhantes <span onClick={update}> <img src={att} alt="update" /> </span> </h2>
        </div>
        <div className='grid-container'>

          {semelhantes ? semelhantes.slice(0, 10).map((produtos) => <DetalhesFilmes handleAdd={handleAdd} item={produtos} />) : <span>Indisponível no momento(Recarregue)</span>}
        </div>
       

      </div>


    </div>
  )
}

export default PagUnicaFilme