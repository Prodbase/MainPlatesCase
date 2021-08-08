
import React from 'react';
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { FooterWrapper } from './FooterStyles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <h1>MainPlates</h1>
      <div>
        <FiInstagram size={30} />
        <FiLinkedin size={30} />
        <FiFacebook size={30} />
      </div>
      <strong>Criado por <a href="https://prodbase.com.br">ProdBase</a></strong>
    </FooterWrapper>
  )
}

export default Footer;