import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Button } from '.';

describe('Button component', () => {
  test('it should render component in the document', () => {
    const { getByText } = render(<Button text="Hello world" variant="solid" />);

    expect(getByText('Hello world')).toBeInTheDocument();
  });

  // TODO adicionar test função
  // test('it should perform a function by clicking', () => {
  //   const log = () => console.log('Hello world');
  //   const { getByText } = render(
  //     <Button text="Hello world" variant="solid" onClick={log} />,
  //   );
  //   getByText('Hello world').click();

  //   expect(log).toHaveBeenCalled();
  // });
});
