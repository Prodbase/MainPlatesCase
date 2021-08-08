import React from 'react';
import Image from 'next/image'
import { HomeBlockFourWrapper, ProductsList, Card } from './HomeBlockFourStyles';

const products = [
  {
    name: "Lorem Ipsum is simply",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Lorem Ipsum is simply",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    image: "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Lorem Ipsum is simply",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Lorem Ipsum is simply",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    image: "https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Lorem Ipsum is simply",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Lorem Ipsum is simply",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    image: "https://images.pexels.com/photos/1070053/pexels-photo-1070053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
]

const HomeBlockFour: React.FC = () => {

  return (
    <HomeBlockFourWrapper id="plates">
       <ProductsList>
        {products.map((prod, index) => (
          <div key={index}>
            <Card>
              <div>
                <Image src={prod.image} alt="image-user" layout="fill" />
              </div>
              <p>{prod.desc}</p>
            </Card>
          </div>
        ))}
      </ProductsList>
    </HomeBlockFourWrapper>
  )
}

export default HomeBlockFour;