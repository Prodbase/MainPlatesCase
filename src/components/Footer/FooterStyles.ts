
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background: #111;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    & > div {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin: 4rem 0;
    }
    strong {
        font-size: 2rem;
        a {
            color: #EC9649;
            :hover {
                border-bottom: 3px solid #EC9649;
            }
        }
    }
`;