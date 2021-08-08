import React from 'react'

import {
  HomeBlockFiveWrapper,
  PricesWrapper,
  Card
} from './HomeBlockFiveStyles'

const HomeBlockFive: React.FC = () => {
  return (
    <HomeBlockFiveWrapper>
      <h1>Conheça nossos preços</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
        consequatur?
      </p>

      <PricesWrapper>
        <Card>
          <div className="prices">
            <h3>Básico</h3>
            <h1>R$: 150,00</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit,
            ducimus architecto vero vel saepe. Possimus nesciunt exercitationem
            dolores explicabo perferendis dolor corporis error quos aliquid,
            ullam commodi optio? Voluptates alias repellat facilis corrupti.
            Exercitationem.
          </p>
          <button>Quero saber mais</button>
        </Card>
        <Card>
          <div className="prices">
            <h3>Completo</h3>
            <h1>R$: 200,00</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit,
            ducimus architecto vero vel saepe. Possimus nesciunt exercitationem
            dolores explicabo perferendis dolor corporis error quos aliquid,
            ullam commodi optio? Voluptates alias repellat facilis corrupti.
            Exercitationem.
          </p>
          <button>Quero saber mais</button>
        </Card>
      </PricesWrapper>
    </HomeBlockFiveWrapper>
  )
}

export default HomeBlockFive
