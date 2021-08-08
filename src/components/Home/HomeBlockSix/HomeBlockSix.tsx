import React from 'react';

import { HomeBlockSixWrapper } from './HomeBlockSixStyles';

const HomeBlockSix: React.FC = () => {
  return (
    <HomeBlockSixWrapper>
      <h1>Ainda está com dúvidas?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam enim corporis alias?</p>

      <div>
        <label htmlFor="">Seu nome</label>
        <input type="text" placeholder="Digite seu nome"/>
        <label htmlFor="">Seu E-mail</label>
        <input type="text" placeholder="Digite seu email"/>
        <button>Enviar</button>
      </div>
    </HomeBlockSixWrapper>
  )
}

export default HomeBlockSix;