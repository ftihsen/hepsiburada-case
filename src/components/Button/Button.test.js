import { render, fireEvent } from '@testing-library/react';
import { Button } from 'components';

describe('Button Components', () => {
  it('should render with children prop', () => {
    const title = 'Submit';
    const { getByText } = render(<Button>{title}</Button>);

    expect(getByText(title)).toBeTruthy();
  });

  it('should increment number on click', () => {
    let number = 1;
    const { getByText } = render(
      <Button
        onClick={() => {
          number += 1;
        }}
      >
        Button
      </Button>,
    );

    fireEvent.click(getByText('Button'), new MouseEvent('click'));

    expect(number).toBe(2);
  });

  it('should match snapshot', () => {
    const title = 'Submit';
    const { container } = render(<Button>{title}</Button>);

    expect(container).toMatchSnapshot();
  });
});
