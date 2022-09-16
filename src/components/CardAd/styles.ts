import styled, { css } from 'styled-components';

type TitleProps = {
  isActive?: 'on' | 'off';
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;

  background: ${({ theme }) => theme.colors.zinc[700]};

  max-width: 250px;
  width: 200px;

  margin-right: 40px;

  border-radius: 8px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  padding: 8px 0;
  gap: 2px;
`;

export const Title = styled.span<TitleProps>`
  font-size: 14px;

  font-weight: 700;

  color: ${({ theme }) => theme.colors.white};

  ${({ isActive, theme }) =>
    isActive === 'on' &&
    css`
      color: ${theme.colors.green[400]};
    `}
  ${({ isActive, theme }) =>
    isActive === 'off' &&
    css`
      color: ${theme.colors.violet[500]};
    `}
`;

export const Ball = styled.div`
  height: 4px;
  width: 4px;

  background: ${({ theme }) => theme.colors.zinc[500]};

  border-radius: 50px;
`;

export const Label = styled.label`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.zinc[400]};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`;
