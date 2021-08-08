import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HomeBlockFive from '../components/Home/HomeBlockFive/HomeBlockFive';
import HomeBlockFour from '../components/Home/HomeBlockFour/HomeBlockFour';
import HomeBlockOne from '../components/Home/HomeBlockOne/HomeBlockOne';
import HomeBlockSix from '../components/Home/HomeBlockSix/HomeBlockSix';
import HomeBlockThree from '../components/Home/HomeBlockThree/HomeBlockThree';
import HomeBlockTwo from '../components/Home/HomeBlockTwo/HomeBlockTwo';
import SeoComponent from '../components/SeoComponent/SeoComponent';

const Home: React.FC = () => {
  const elementRef = useRef<HTMLDivElement | any>();
  const [top, setTop] = useState<number>(0);
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.pageYOffset);
      setState(elementRef.current?.offsetTop);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [top]);

  return (
    <main>
      <SeoComponent
        title="MainPlates | Prodbase"
        desc="Crie um website profissional, blog ou portfólio e ganhe destaque on-line."
        keywords="Criação de Websites, Blogs, Portfólio, Galeria de fotos e Site institucional"
        url="https://mainplates.prodbase.com.br/"
      />
      <Header elementRef={top > state ? true : false}  />
      <HomeBlockOne elementRef={elementRef}  />
      <HomeBlockTwo />
      <HomeBlockThree />
      <HomeBlockFour />
      <HomeBlockFive />
      <HomeBlockSix />
    </main>
  )
}

export default Home;