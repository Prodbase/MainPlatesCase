import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.header<{
  elementRef?: any
  noHome?: boolean
}>`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  padding: 2rem 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a.logo {
    color: ${props => props.theme.colors.background_2};
    font-size: 2.4rem;
    font-weight: bold;
  }

  & > nav {
    display: flex;
    align-items: center;
    gap: 2rem;


    a {
      font-size: 1.8rem;
      color: ${props => props.theme.colors.font_2};

      :hover {
        border-bottom: 2px solid ${props => props.theme.colors.font_2};
      }
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    svg {
      color: #fff;
      font-size: 2.5rem;
    }

    @media (max-width: 970px) {
      svg {
        color: ${props => props.theme.colors.font_2};
      }
    }
  }

  ${props =>
    props.noHome &&
    css`
      position: fixed;
      top: 0;
      z-index: 999;
      background: ${props => props.theme.colors.white};

      & > nav a:first-child,
      & > nav a {
        color: ${props => props.theme.colors.background_2};

        :hover {
          border-bottom: 2px solid ${props => props.theme.colors.background_2};
        }
      }

      & > div svg {
        color: ${props => props.theme.colors.background_2};
      }
    `}

  ${props =>
    props.elementRef &&
    css`
      position: fixed;
      top: 0;
      z-index: 999;
      background: #fff;

      & > div svg {
        color: ${props => props.theme.colors.font_2};
      }
    `}
`

export const ModalMobile = styled.div`
  position: absolute;
  z-index: 999;
  top: 100%;
  right: 0;
  left: 0;
  min-height: 25rem;
  background: ${props => props.theme.colors.background_2};
  border-top: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;

    a {
      color: ${props => props.theme.colors.white};
      font-weight: 500;
      font-size: 1.8rem;
      :hover {
        border-bottom: 2px solid #fff;
      }
    }
  }

  div svg {
    color: #fff;
    margin: 0 1rem;
  }
`
