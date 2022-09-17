import styled, { css } from 'styled-components';
import { Root, Indicator } from '@radix-ui/react-checkbox';

type ButtonSelectProps = {
  isActive: boolean;
};

export const Container = styled.div`
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.zinc[900]};

  color: ${({ theme }) => theme.colors.white};

  padding: 32px 40px;

  border-radius: 8px;

  h3 {
    font-size: 2rem;

    margin-bottom: 32px;
  }

  form {
    display: flex;
    flex-direction: column;

    gap: 16px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  input {
    max-width: 408px;
    width: 100%;

    background: ${({ theme }) => theme.colors.zinc[700]};

    padding: 8px;
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.white};

    border-radius: 4px;
  }
  &[type='number'] {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }

  .input--min {
    max-width: 180px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  &[type='number'] {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }

  > input {
    width: 80px;

    background: ${({ theme }) => theme.colors.zinc[700]};
    padding: 8px;
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.white};
  }

  input + input {
    margin-left: 9px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const CheckButton = styled.button<ButtonSelectProps>`
  background: ${({ theme }) => theme.colors.zinc[700]};
  font-weight: bold;

  color: ${({ theme }) => theme.colors.white};

  padding: 6px 8px;

  border-radius: 4px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      background: ${theme.colors.violet[500]};
    `}
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 12px;
`;

export const Separator = styled.div`
  margin-top: 12px;
`;

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  label {
    font-size: 14px;
  }
`;

export const RootCheck = styled(Root)`
  width: 24px;
  height: 24px;

  border-radius: 4px;

  background: ${({ theme }) => theme.colors.zinc[700]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IndicatorCheck = styled(Indicator)`
  color: ${({ theme }) => theme.colors.green[400]};
`;
