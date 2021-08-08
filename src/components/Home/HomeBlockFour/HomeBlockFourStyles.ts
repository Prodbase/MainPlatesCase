import styled from 'styled-components'

export const HomeBlockFourWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 170rem;
  margin: 20rem auto;
`

export const ProductsList = styled.div`
    display: grid;
    gap: 7rem;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    width: 100%;
`

export const Card = styled.div`
  max-width: 35rem;

  div:first-child {
    position: relative;
    width: 35rem;
    height: 35rem;
    border-radius: 10%;

    img {
      object-fit: cover;
    }
  }

  p {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`
