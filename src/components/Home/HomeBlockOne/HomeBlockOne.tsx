import React from 'react'
import Image from 'next/image'
import { HomeBlockOneWrapper, InlustrationWrapper } from './HomeBlockOneStyles'

interface HomeBlockOneProps {
  elementRef: any
}

const HomeBlockOne: React.FC<HomeBlockOneProps> = ({ elementRef }) => {
  return (
    <HomeBlockOneWrapper ref={elementRef}>
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quam
          voluptate! Nam, fugit a cumque voluptatibus praesentium officia
          corporis quos ut quam odit adipisci et.
        </p>
        <button>Quero saber mais</button>
      </div>
      <InlustrationWrapper>
        <div className="img-wrapper">
          <Image src="/home/photo1.png" alt="photo1" layout="fill" />
        </div>
      </InlustrationWrapper>
    </HomeBlockOneWrapper>
  )
}

export default HomeBlockOne
