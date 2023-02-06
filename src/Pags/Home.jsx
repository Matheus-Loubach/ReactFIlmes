import React from 'react'
import '../ComponentsCSS/MeioFilmes.css'
import DetalhesFilmes from '../Components/DetalhesFilmes'
import { useState } from 'react'
import '../ComponentsCSS/MeioFilmes.css'
import '../ComponentsCSS/responsivo.css'
import { useEffect } from 'react'



var nomeExibir = 'Exibir +';


const Home = ({ categoria, dados }) => {

  useEffect(() => {
  }, [[dados, categoria]])


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

    <div>
      <div>
        <div className='Ultimos'>
          <div className='subMenu_mobile'>
            <a href="/">Filmes - {dados ? dados.all.length : <span>0</span>}</a>
            <a href="/Series">Séries - {dados ? dados.serie.length : <span>0</span>}</a>
          </div>
          <div>
            {categoria === 'novos' && <h1>Adicionados Recentemente</h1>}
            <div className='grid-container'>
              {categoria === 'novos' && dados ? dados.all.slice(0, tamanhoF).map((produtos) => <DetalhesFilmes key={produtos.nome} item={produtos} />) : <span>  </span>}

            </div>
            {categoria === 'novos' && <p className='exibir' onClick={() => TamanhoFilmes()}>{nomeExibir}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home