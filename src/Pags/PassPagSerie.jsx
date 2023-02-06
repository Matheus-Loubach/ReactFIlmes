import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PagUnicaSerie from '../Components/PagUnicaSerie'

const PassPagSerie = ({ dadosSerie, setMenuOn }) => {


  /*dados dinamicos da url*/
  const { id } = useParams();
  var nameBar = id.replace(/[-"]/g, ' ');

  useEffect(() => {
  }, [[id, dadosSerie, nameBar]])

  return (
    <div>

      {/*Search tvshows params url*/}
      {dadosSerie ? dadosSerie.serie.filter(serie => serie.nome.includes(nameBar)).slice(0, 1).map(serie => <PagUnicaSerie setMenuOn={setMenuOn} serie={serie} dados={dadosSerie} />) : <span>Carregando... Aguarde</span>}



    </div>
  )
}

export default PassPagSerie