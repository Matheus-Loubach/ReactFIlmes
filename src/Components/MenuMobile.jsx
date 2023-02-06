/* eslint-disable jsx-a11y/alt-text */
import { Container } from './MobileMenuStyles';
import fechar from '../Assents/xbox-x.png'
import '../ComponentsCSS/Menu.css'




const MenuMobile = ({dadosSerie, novos, menuOn, dados, setMenuOn}) => {



  return (
    <div className='menuOn'>

      <Container IsVisible={menuOn}>
        <img className='fecharMenu' src={fechar} onClick={() => setMenuOn(false)} />
        <div>
          <div>
            <h1 className='genero'>Gêneros</h1>
          </div>
          <div className='container_menuMobile'>
            <h4>Selecione</h4>
            <a href="/"> <p onClick={novos}> <span onClick={() => setMenuOn(false)}>Filmes - {dados ? dados.all.length : <span>0</span>}</span></p></a>
            <a href="/Series"><p><span onClick={() => setMenuOn(false)}>Séries - {dadosSerie ? dadosSerie.serie.length : <span>0</span>}</span></p></a>
          </div>
        </div>
        <nav>
          <ul>
            <a href="/Ação"> <li ><span onClick={() => setMenuOn(false)}>Ação</span></li></a>
            <a href="/Animação"> <li ><span onClick={() => setMenuOn(false)}>Animação</span></li></a>
            <a href="/Aventura"> <li ><span onClick={() => setMenuOn(false)}>Aventura</span></li></a>
            <a href="/Biografia"> <li ><span onClick={() => setMenuOn(false)}>Biografia</span></li></a>
            <a href="/Comédia"> <li ><span onClick={() => setMenuOn(false)}>Comédia</span></li></a>
            <a href="/Drama"> <li ><span onClick={() => setMenuOn(false)}>Drama</span></li></a>
            <a href="/F-Científica"> <li ><span onClick={() => setMenuOn(false)}>F-Científica</span></li></a>
            <a href="/Romance"> <li ><span onClick={() => setMenuOn(false)}>Romance</span></li></a>
            <a href="/Suspense"> <li ><span onClick={() => setMenuOn(false)}>Suspense</span></li></a>
            <a href="/Terror"> <li ><span onClick={() => setMenuOn(false)}>Terror</span></li></a>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default MenuMobile