import styled from 'styled-components';

export const HomeBlockFiveWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 3rem;
    margin: 10rem 0;

    & > h1 {
        font-size: 3.5rem;
        border-bottom: 3px dashed ${props => props.theme.colors.font_2};
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    & > p {
        font-size: 2rem;
        color: ${props => props.theme.colors.font_2};
    }

    @media (max-width: 650px) {
        h1 {
            font-size: 3rem;
        }
    }
`;

export const PricesWrapper = styled.div`
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 9rem;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`
export const Card = styled.div`
    height: 50rem;
    width: 45rem;
    border: 4px solid #ddd;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 2rem;

    .prices {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
            font-weight: 500;
        }

        h1 {
            color: ${props => props.theme.colors.background_2};
        }
    }

    button {
        background: ${props => props.theme.colors.background_2};
        border: none;
        padding: 1.5rem 2rem;
        font-size: 1.8rem;
        color: ${props => props.theme.colors.white};
        cursor: pointer;
    }

    @media (max-width: 550px) {
        width: 100%;
    }
`