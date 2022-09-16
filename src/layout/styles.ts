import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 44px 0;

  background: url('/assets/Fundo.png');
  background-size: cover;
  background-repeat: no-repeat;

  color: white;

  div {
    h1 {
      font-size: 64px;

      text-align: center;

      span {
        background: linear-gradient(
          to right,
          #9572fc,
          #8885ef,
          #43e7ad,
          #43e7ad,
          #43e7ad,
          #e2d45c
        );
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 44px 0;
`;

export const Footer = styled.footer`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  padding-top: 4px;
  margin-top: 30px;

  overflow: hidden;

  background: linear-gradient(
    to right,
    #9572fc,
    #9572fc,
    #8885ef,
    #43e7ad,
    #43e7ad,
    #43e7ad,
    #e2d45c,
    #e2d45c,
    #e2d45c
  );

  div {
    background: ${({ theme }) => theme.colors.zinc[700]};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px 16px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 8px;
      strong {
        font-size: 24px;
      }
      p {
        color: ${({ theme }) => theme.colors.zinc[400]};
      }
    }
  }
`;
