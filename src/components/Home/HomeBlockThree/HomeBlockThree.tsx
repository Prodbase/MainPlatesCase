import React from 'react'
import Image from 'next/image'
import {
  HomeBlockThreeWrapper,
  Banner,
  Text,
  Texts
} from './HomeBlockThreeStyles'

const HomeBlockThree: React.FC = () => {
  return (
    <HomeBlockThreeWrapper id="about">
      <Banner>
        <div className="img">
          <Image src="/home/photo2.png" height={350} width={450} alt="photo2" />
        </div>
        <Text one>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </Text>
        <Text two>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </Text>
      </Banner>
      <Texts>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            ea, quas quae dolore illo tenetur voluptatem aliquam modi,
            dignissimos temporibus alias praesentium deleniti qui. Nesciunt
            nobis natus repellendus cupiditate quibusdam! Qui id soluta nesciunt
            voluptates et consequatur enim, labore, eaque, quidem magnam quia.
            Aliquid maxime unde molestiae voluptatem tenetur quidem delectus
            neque voluptate blanditiis rerum esse eius maiores nobis labore qui
            alias temporibus fuga vitae pariatur fugiat, consectetur, itaque,
            incidunt doloribus. Fuga excepturi illo provident qui architecto
            ipsa voluptate eveniet? Aliquid dolorum ipsa ullam tempore?
            Doloribus, laudantium sint. Molestias laborum odit vero atque
            sapiente. Odit ipsa exercitationem doloremque facilis cupiditate.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            ea, quas quae dolore illo tenetur voluptatem aliquam modi,
            dignissimos temporibus alias praesentium deleniti qui. Nesciunt
            nobis natus repellendus cupiditate quibusdam! Qui id soluta nesciunt
            voluptates et consequatur enim, labore, eaque, quidem magnam quia.
            Aliquid maxime unde molestiae voluptatem tenetur quidem delectus
            neque voluptate blanditiis rerum esse eius maiores nobis labore qui
            alias temporibus fuga vitae pariatur fugiat, consectetur, itaque,
            incidunt doloribus. Fuga excepturi illo provident qui architecto
            ipsa voluptate eveniet? Aliquid dolorum ipsa ullam tempore?
            Doloribus, laudantium sint. Molestias laborum odit vero atque
            sapiente. Odit ipsa exercitationem doloremque facilis cupiditate.
          </p>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              ea, quas quae dolore illo tenetur voluptatem aliquam modi,
              dignissimos temporibus alias praesentium deleniti qui. Nesciunt
              nobis natus repellendus cupiditate quibusdam! Qui id soluta
              nesciunt voluptates et consequatur enim, labore, eaque, quidem
              magnam quia.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              ea, quas quae dolore illo tenetur voluptatem aliquam modi,
              dignissimos temporibus alias praesentium deleniti qui.
            </p>
          </div>
        </div>
      </Texts>
    </HomeBlockThreeWrapper>
  )
}

export default HomeBlockThree
