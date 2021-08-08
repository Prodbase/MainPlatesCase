import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { HeaderWrapper, ModalMobile } from './HeaderStyles'
import useMediaQuery from '../hooks/useMediaQuery'

interface HeaderProps {
  elementRef?: any
  noHome?: boolean
}

const Header: React.FC<HeaderProps> = ({ elementRef, noHome }) => {
  const router = useRouter()

  const [activeModel, setActiveModel] = useState(false)
  const mobile = useMediaQuery('(max-width: 920px)')

  const openModalMobile = () => {
    setActiveModel(active => !active)
  }

  return (
    <HeaderWrapper noHome={noHome} elementRef={elementRef}>
      {mobile && (
        <Link href="/">
          <a className="logo">MainPlates</a>
        </Link>
      )}
      {!mobile ? (
        <>
          <nav>
            <Link href="/">
              <a className="logo">MainPlates</a>
            </Link>
            <Link href={router.pathname !== '/' ? '/#about' : '#about'}>
              <a>Quem somos</a>
            </Link>
            <Link href={router.pathname !== '/' ? '/#plates' : '#plates'}>
              <a>Nossos pratos</a>
            </Link>
            <Link href="/news">
              <a>Novidades</a>
            </Link>
          </nav>
          <div>
            <FiInstagram />
            <FiLinkedin />
            <FiFacebook />
          </div>
        </>
      ) : activeModel ? (
        <AiOutlineClose onClick={openModalMobile} size={40} color="#F16B8B "/>
      ) : (
        <AiOutlineMenu onClick={openModalMobile} size={40} color="#F16B8B"  />
      )}
      {activeModel && (
        <ModalMobile>
          <nav>
            <Link href={router.pathname !== '/' ? '/#about' : '#about'}>
              <a>Quem somos</a>
            </Link>
            <Link href={router.pathname !== '/' ? '/#plates' : '#plates'}>
              <a>Nossos pratos</a>
            </Link>
            <Link href="/news">
              <a>Novidades</a>
            </Link>
          </nav>
          <div>
            <FiInstagram />
            <FiLinkedin />
            <FiFacebook />
          </div>
        </ModalMobile>
      )}
    </HeaderWrapper>
  )
}

export default Header
