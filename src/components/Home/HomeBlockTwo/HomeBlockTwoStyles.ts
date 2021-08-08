import styled from 'styled-components'

export const HomeBlockTwoWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10rem;
  height: 100%;
  margin: 10rem 0;
  padding: 0 3rem;
`

export const Intro = styled.div`
  text-align: center;

  h1 {
    font-size: 4rem;
    border-bottom: 3px dashed ${props => props.theme.colors.font_2};
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.7rem;
    max-width: 80rem;
    color: #555;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`

export const DepoimentsWrapper = styled.div`
  width: 100%;
  max-width: 140rem;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 3rem;
  }
`

export const Card = styled.div`
  max-width: 30rem;

  div:first-child {
    position: relative;
    width: 30rem;
    height: 30rem;
    border-radius: 10%;

    img {
      object-fit: cover;
    }
  }

  p {
    font-size: 1.2rem;
  }
`
export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin: 2rem 0;

  svg {
    font-size: 2rem;
    color: #ffb703;
  }
`
