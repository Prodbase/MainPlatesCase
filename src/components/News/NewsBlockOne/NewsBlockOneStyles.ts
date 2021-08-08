import styled from 'styled-components';

export const NewsBlockOneWrapper = styled.section`
    height: 100%;
`;

export const Banner = styled.div`
    height: 45rem;
    width: 100%;
    background: ${props => props.theme.colors.background_2};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 4rem 3rem;
    text-align: center;
    color: ${props => props.theme.colors.white};

    h1 {
        font-size: 4rem;
        max-width: 70rem;
    }

    p {
        font-size: 2rem;
        max-width: 70rem;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 3rem
        }

        p {
            font-size: 1.8rem;
        }
    }
`

export const Texts = styled.div`
    max-width: 170rem;
    margin: 5rem auto;
    padding: 0 3rem;

    p {
        font-size: 1.8rem;
        margin-bottom: 2.2rem;
    }
`