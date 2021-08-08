import styled from 'styled-components';

export const HomeBlockSixWrapper = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 4px dashed #ddd;
    padding: 0 3rem;

    & > h1 {
        font-size: 4rem;
        text-align: center;
        text-transform: uppercase;
        border-bottom: 3px dashed ${props => props.theme.colors.font_2};
        margin-bottom: 1rem;

    }
    
    & > p {
        text-align: center;
        font-size: 2.3rem;
        max-width: 70rem;
    }
    
    @media (max-width: 650px) {
        & > h1 {
            font-size: 3rem;
        }

        & > p {
            font-size: 1.8rem;
        }
    }

    & > div {
        display: flex;
        flex-direction: column;
        max-width: 70rem;
        width: 100%;
        margin-top: 3rem;

        label {
            font-weight: 600;
            font-size: 2rem;
            margin-top: 2rem;
            color: #666;
        }

        button {
            padding: 1.3rem 2rem;
            font-size: 2rem;
            color: ${props => props.theme.colors.white};
            font-weight: 600;
            border: none;
            margin-top: 2rem;
            background: ${props => props.theme.colors.background_2};
            cursor: pointer;
        }

        input {
            height: 5rem;
            font-size: 2rem;
            padding: 2rem;
            background: transparent;
            border: 2px solid #ddd;

            :focus {
                outline-color: ${props => props.theme.colors.background_2};
            }
        }
    }
`;
