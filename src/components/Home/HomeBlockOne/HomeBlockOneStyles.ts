import styled from 'styled-components'

export const HomeBlockOneWrapper = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  & > div:first-child {
    padding: 0 5rem;
    max-width: 80rem;

    h1 {
      font-size: 4.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 2rem;
    }

    button {
      background: ${props => props.theme.colors.background_3};
      border: none;
      padding: 2rem;
      margin-top: 2rem;
      font-size: 2rem;
      color: #fff;
      border-radius: 10rem;
      transition: 0.5s;

      :hover {
        background: ${props => props.theme.colors.background_2};
        transition: 0.5s;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 970px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    min-height: 100%;
    margin: 10rem 0 20rem 0;
  }

  @media (max-width: 650px) {
    & > div:first-child {
      h1 {
        font-size: 3.5rem;
      }

      p {
        font-size: 1.8rem;
      }

      button {
        width: 100%;
      }
    }
  }
`

export const InlustrationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/background1.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: right;

  .img-wrapper {
    position: relative;
    height: 70rem;
    width: 50rem;
    top: 50%;
    left: 30%;
    z-index: 99;
    transform: translate(-50%, -50%);

    div img {
      position: absolute;
      z-index: 99;
    }
  }

  @media (max-width: 1300px) {
    .img-wrapper {
      height: 53rem;
      width: 35rem;
    }
    max-width: 100% !important;
  }

  @media (max-width: 970px) {
    background-image: none;

    .img-wrapper {
      margin: 0 auto;
      position: absolute;
      z-index: 1;
      left: 50%;
    }
  }

  @media (max-width: 650px) {
    .img-wrapper {
      height: 38rem;
      width: 25rem;
    }
  }
`
