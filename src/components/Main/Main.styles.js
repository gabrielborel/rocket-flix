import styled from 'styled-components'
import {
  blue,
  black,
  red,
  title,
  subtitle,
  button,
} from '../../assets/styles/GlobalStyle'

export const MainWrapper = styled.main`
  max-height: 100vh;
  min-height: 100vh;
  background: linear-gradient(45deg, ${blue} 0%, ${black} 52%, ${red} 100%);
  display: grid;
  place-items: center;

  @media (max-width: 620px) {
    overflow-y: scroll;
    padding: 15px 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 690px) {
      width: 80%;
    }
  }

  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: grey;
  }
`

export const Title = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
  text-align: center;

  img {
    width: 100px;
    height: 80px;
    animation: pulse 1s ease-in-out infinite alternate;

    @keyframes inicio {
      from {
        transform: translateY(-500px);
      }
    }

    @keyframes pulse {
      100% {
        opacity: 0.2;
      }
    }
  }

  p {
    font-size: 40px;
    font-weight: 700;
    color: ${title};

    @media (max-width: 621px) {
      font-size: 30px;
    }

    @media (max-width: 470px) {
      font-size: 20px;
    }
  }
`

export const MainContent = styled.main`
  margin: 0 auto;
  width: 60%;
  min-height: 150px;
  min-width: 500px;

  > p {
    color: white;
  }

  @media (max-width: 620px) {
    width: 100%;
    min-width: 0;
  }
`

export const Upper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;

  > img {
    border-radius: 5px;

    @media (max-width: 620px) {
      width: 400px;
    }

    @media (max-width: 500px) {
      width: 300px;
    }

    @media (max-width: 400px) {
      width: 250px;
    }
  }

  @media (max-width: 620px) {
    gap: 10px;
    flex-direction: column;

    > div {
      flex-direction: column;
    }
  }
`

export const Categories = styled.div`
  color: ${subtitle};
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

export const MovieTitle = styled.p`
  color: ${title};
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
  font-size: 20px;

  @media (max-width: 620px) {
    margin-bottom: 0;
    font-size: 15px;
  }
`

export const Overview = styled.p`
  text-align: left;
  color: ${subtitle};
  font-size: 14px;
  opacity: 0.9;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;

  > p {
    color: ${title};
    font-weight: 400;
    font-size: 14px;
    width: 500px;
    text-align: center;

    @media (max-width: 620px) {
      width: 100%;
      min-width: 0;
    }
  }

  button {
    width: fit-content;
    border-radius: 5px;
    background-color: ${button};
    display: flex;
    align-items: center;
    gap: 17px;
    padding: 11px 12px;
    border: none;
    border: 2px solid #1a1a1a;
    cursor: pointer;
    transition: filter 0.2s;

    :hover {
      filter: brightness(0.8);
    }

    :active {
      transform: translateY(1px);
    }

    img {
      width: 35px;
      height: 25px;
      animation: pulse 1s ease-in-out infinite alternate;

      @keyframes pulse {
        100% {
          opacity: 0.2;
        }
      }
    }

    p {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }
`
