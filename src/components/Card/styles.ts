import styled from 'styled-components';

type ContainerProps = {
  cover: string;
};

export const Container = styled.div<ContainerProps>`
  background-image: ${({ cover }) => 'url("' + cover + '")'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  max-height: 240px;
  max-width: 180px;
  width: 100%;
  height: 180px;

  border-radius: 8px;
  overflow: hidden;

  display: flex;
  align-items: flex-end;

  cursor: pointer;

  div {
    width: 100%;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.8)
    );

    padding: 12px;

    display: flex;
    flex-direction: column;

    gap: 4px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.zinc[400]};
    }
  }
`;
