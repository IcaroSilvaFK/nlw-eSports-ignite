import { Container } from './styles';
import { Variants } from './variants';

interface IButtonProps {
  text: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant: Variants;
  onClick?: () => void;
}

export function Button({
  text,
  variant,
  leftIcon,
  rightIcon,
  onClick,
}: IButtonProps) {
  return (
    <Container variant={variant} onClick={onClick}>
      {leftIcon}
      {text}
      {rightIcon}
    </Container>
  );
}
