import React from 'react';
import SeoComponent from '../../components/SeoComponent/SeoComponent';

import NewsBlockOne from '../../components/News/NewsBlockOne/NewsBlockOne';
import Header from '../../components/Header/Header';

const News: React.FC = () => {
  return (
      <>
        <SeoComponent
          title="Novidades | MainPlates"
          desc="Crie um website profissional, blog ou portfólio e ganhe destaque on-line."
          keywords="Criação de Websites, Blogs, Portfólio, Galeria de fotos e Site institucional"
          url="https://mainplates.prodbase.com.br/"
        />
        <Header noHome/>
        <NewsBlockOne />
      </>
  )
}

export default News;