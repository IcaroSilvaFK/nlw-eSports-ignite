import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  margin-top: 40px;
`;

export const ContainerContent = styled.div`
  max-width: 560px;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  img {
    width: 560px;
    margin: 0 auto;

    border-radius: 8px;
  }

  h2 {
    font-size: 24px;
    font-weight: 800;

    margin-top: 8px;
  }

  span {
    color: ${({ theme }) => theme.colors.zinc[400]};

    margin-top: 4px;
  }
`;

export const ButtonAbsolute = styled.button`
  position: fixed;

  top: 10px;
  right: 10px;

  background: ${({ theme }) => theme.colors.violet[500]};

  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;

  gap: 8px;

  padding: 8px 18px;

  border-radius: 4px;

  :hover {
    background: ${({ theme }) => darken(0.2, theme.colors.violet[500])};
  }
`;
