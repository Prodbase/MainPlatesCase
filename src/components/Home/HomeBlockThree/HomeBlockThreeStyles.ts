import styled, { css } from 'styled-components';

interface TextProps {
    one?: boolean
    two?: boolean
}

export const HomeBlockThreeWrapper = styled.section`
  height: 100%;
  display: flex;
  gap: 20rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    gap: 10rem;
  }
`;

export const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 40rem;
    background: ${props => props.theme.colors.background_2};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .img {
        position: absolute;
        bottom: -100%;
        left: 50%;
        transform: translate(-50%, -50%);

        div {
            position: relative;
        }
        
        img {
            height: 50rem;
            object-fit: contain;
            filter: brightness(0.8);
        }
    }

    @media (max-width: 650px) {
        .img {
            display: none;
        }
    }

`

export const Text = styled.p<TextProps>`
    color: ${props => props.theme.colors.white};
    position: absolute;
    font-size: 2rem;

    ${props => props.one && css`
        left: 5rem;
        bottom: 20rem;
        max-width: 50rem;
    `}

    ${props => props.two && css`
        right: 5rem;
        bottom: 5rem;
        max-width: 50rem;
    `}

    @media (max-width: 650px) {
        position: initial;
        left: 0;
        bottom: 0;
        margin: 2rem;
    }
`

export const Texts = styled.div`
    max-width: 140rem;
    padding: 0 3rem;

    p {
        font-size: 2rem;
        color: ${props => props.theme.colors.font_2};
        margin-bottom: 4rem;
    }

    & > div > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8rem;

        @media (max-width: 650px) {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
`