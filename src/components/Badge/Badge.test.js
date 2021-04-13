import { render } from '@testing-library/react';
import { Badge } from 'components';

describe('Badge Components', () => {
  it('should render with children prop>', () => {
    const value = 1;
    const { getByText } = render(<Badge content={value} />);
    expect(getByText(value)).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { container } = render(<Badge />);

    expect(container).toMatchSnapshot();
  });
});
