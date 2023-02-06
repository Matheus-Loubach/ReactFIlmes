import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PagUnicaFilme from '../Components/PagUnicaFilme'

const PassPagFilme = ({ dados, setMenuOn }) => {

  const { id } = useParams();
  var nameBar = id.replace(/[-"]/g, ' ');

  useEffect(() => {
  }, [[id, dados, nameBar]])

  return (
    <div>

      {/*Search movies params url*/}
      {dados ? dados.all.filter(filme => filme.nome.includes(nameBar)).slice(0, 1).map(filme => <PagUnicaFilme setMenuOn={setMenuOn} filme={filme} dados={dados} />) : <span>Carregando... Aguarde</span>}

    </div>
  )
}

export default PassPagFilme