//components
import MenuMobileCentro from './Components/MenuMobileCentro'
import PassPagFilme from './Pags/PassPagFilme';

//hooks and routes
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

//CSS
import './ComponentsCSS/responsivo.css'
import './App.css';

import MenuMobile from './Components/MenuMobile';
import PassPagSerie from './Pags/PassPagSerie';
import Rodape from './Components/Rodape';
import { Error404 } from './Pags/Error404';
import MontagemCarrosel from './Pags/MontagemCarrosel';
import PagSeries from './Pags/PagSeries';
import MenuCategoriaPC from './Components/MenuCategoriaPC';
import Action from './Pags/Category/Action';
import Comedy from './Pags/Category/Comedy';
import Animation from './Pags/Category/Animation';
import Adventure from './Pags/Category/Adventure';
import Biography from './Pags/Category/Biography';
import Drama from './Pags/Category/Drama';
import FCientifica from './Pags/Category/FCientifica';
import Romance from './Pags/Category/Romance';
import Thriller from './Pags/Category/Thriller';
import Horror from './Pags/Category/Horror';
import Home from './Pags/Home';


function App() {
  const [menuOn, setMenuOn] = useState(false)

  const categorias = [
    { id: 0, name: 'novos' },
  ];

  const [categoria, setCategoria] = useState(categorias[0].name);
  const [dados, setDados] = useState();
  const [Allserie, setSeries] = useState();
  const [allAnime, setAllAnime] = useState();

  var API = 'https://reactmovies.fly.dev/Filmes';


  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(API);
      const data = await resposta.json();
      setDados(data);
      setSeries(data);
      setAllAnime(data);
    }

    fetchData();
  }, [API, setDados, setCategoria]);



  const novos = () => {
    setCategoria(categorias[0].name);
  }




  return (
    <div className="App">

      <div>


        <MenuMobile dadosSerie={Allserie} dadosAnime={allAnime} setMenuOn={setMenuOn} menuOn={menuOn} dados={dados} />
        <MenuMobileCentro novos={novos} categoria={categoria} dados={dados} dadosSerie={Allserie} setMenuOn={setMenuOn} />
        <MenuCategoriaPC dadosAnime={allAnime} dadosSerie={Allserie} dados={dados} />

        <BrowserRouter Comics serRouter>
          <Routes>

            <Route path='/' element={<><div className='display_home'><div><MontagemCarrosel dados={dados} /> <Home dadosSerie={Allserie} categoria={categoria} dados={dados} /></div></div> </>} />

            <Route path='/Series' element={<><div className='display_home'><div><MontagemCarrosel dados={dados} /> <PagSeries Allserie={Allserie} dados={dados} /></div></div> </>} />


            {/*nested routes*/}
            <Route exact path={`/Movie/:id`} element={<PassPagFilme dados={dados} setMenuOn={setMenuOn} />} />
            <Route path={`Tvshow/:id`} element={<PassPagSerie dadosSerie={Allserie} setMenuOn={setMenuOn} />} />

            {/*Category*/}
            <Route exact path={`/Ação`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <Action dados={dados} /> </div></div>} />

            <Route exact path={`/Aventura`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <Adventure dados={dados} /> </div></div>} />

            <Route exact path={`/Animação`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <Animation dados={dados} /> </div></div>} />

            <Route exact path={`/Biografia`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <Biography dados={dados} /> </div></div>} />

            <Route exact path={`/Comédia`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <Comedy dados={dados} /> </div></div>} />

            <Route exact path={`/Drama`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <Drama dados={dados} /> </div></div>} />

            <Route exact path={`/F-Científica`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <FCientifica dados={dados} /> </div></div>} />

            <Route exact path={`/Romance`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <Romance dados={dados} /> </div></div>} />

            <Route exact path={`/Suspense`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <Thriller dados={dados} /> </div></div>} />

            <Route exact path={`/Terror`} element={<div className='display_home'><div><MontagemCarrosel dados={dados} /> <Horror dados={dados} /> </div></div>} />

            {/*NO ROUTER*/}
            <Route path='/*' element={<Error404 />} />

          </Routes>
        </BrowserRouter>


      </div>
      <div>

        <Rodape />
      </div>
    </div>
  );
}

export default App;
