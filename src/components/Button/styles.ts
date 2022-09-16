import styled, { css } from 'styled-components';

import { Variants } from './variants';

type ContainerProps = {
  variant: Variants;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 4px;

  border-radius: 6px;

  padding: 8px 12px;

  ${({ variant, theme }) =>
    variant === 'solid' &&
    css`
      background: ${theme.colors.violet[500]};

      color: ${theme.colors.white};
    `}
`;
