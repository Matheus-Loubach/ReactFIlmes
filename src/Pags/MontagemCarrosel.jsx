import React from 'react'
import { motion } from 'framer-motion'
import '../ComponentsCSS/Carousel.css'
import { useRef,useEffect,useState } from 'react';


const MontagemCarrosel = ({dados }) => {

  const carousel = useRef();
  const [width, setwidth] = useState(0);

  //tamanho da largura carousel
  useEffect(() => {
    setwidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [dados])

  
  return (
    <div className='carousel_title'>
    <h1>Filmes Recomendados</h1>
    <div className='all_carousel'>
      {/*Loading Carousel*/}
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
        <motion.div className='inner' drag="x" dragConstraints={{ right: -100, left: -width }}>
          {dados ? dados.all.slice(Math.floor(Math.random() * 50) + 1,Math.floor(Math.random() * 100) + 51).map((item) => <motion.div className='item' key={item.nome}><a href={`/Movie/${item.nome}/`}><img className='grid-item' src={item.img} alt='capaFilme' /></a>  </motion.div>) : <span>Carregando... Aguarde</span>}
        </motion.div>
      </motion.div>
    </div>
          </div>
  )
}

export default MontagemCarrosel