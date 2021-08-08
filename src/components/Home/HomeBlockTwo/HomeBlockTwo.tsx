import React from 'react'
import Image from 'next/image'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import {
  HomeBlockTwoWrapper,
  DepoimentsWrapper,
  Card,
  Intro,
  StarsWrapper
} from './HomeBlockTwoStyles'

const depoiments = [
  {
    image:
      'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
  },
  {
    image:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
  },
  {
    image:
      'https://images.pexels.com/photos/1451324/pexels-photo-1451324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
  }
]

const HomeBlockTwo: React.FC = () => {
  return (
    <HomeBlockTwoWrapper>
      <Intro>
        <h1>Opinião de quem experimentou</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eaque
          optio, modi nam aut velit at, quis asperiores rerum possimus animi
          error enim porro non.
        </p>
      </Intro>
      <DepoimentsWrapper>
        {depoiments.map((depo, index) => (
          <div key={index}>
            <Card>
              <div>
                <Image src={depo.image} alt="image-user" layout="fill" />
              </div>
              <StarsWrapper>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </StarsWrapper>
              <p>{depo.desc}</p>
            </Card>
          </div>
        ))}
      </DepoimentsWrapper>
    </HomeBlockTwoWrapper>
  )
}

export default HomeBlockTwo
