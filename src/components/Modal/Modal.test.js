import { fireEvent, render } from '@testing-library/react';
import { Modal } from 'components';

export const createDocumentListenersMock = () => {
  const listeners = {};
  const handler = (domEl, event) => listeners?.[event]?.({ target: domEl });
  document.addEventListener = jest.fn((event, cb) => {
    listeners[event] = cb;
  });
  document.removeEventListener = jest.fn((event) => {
    delete listeners[event];
  });
  return {
    mouseDown: (domEl) => handler(domEl, 'mousedown'),
    click: (domEl) => handler(domEl, 'click'),
  };
};
describe('Modal Components', () => {
  it('should have the passed class', () => {
    const { container } = render(<Modal open />);

    expect(container.firstChild).toHaveClass('modal-open');
  });

  it('should increment number on click', () => {
    let number = 1;
    const { getByText } = render(<Modal onClickSuccess={() => (number += 1)} />);

    fireEvent.click(getByText('Evet'), new MouseEvent('click'));

    expect(number).toBe(2);
  });

  it('should call onClick() when clicking outside', () => {
    const fireEvents = createDocumentListenersMock();
    const onClick = jest.fn();
    render(
      <Modal onDismiss={onClick}>
        <span>Modal</span>
      </Modal>,
    );

    fireEvents.mouseDown(document.body);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const { container } = render(
      <Modal>
        <span>Modal</span>
      </Modal>,
    );
    expect(container).toMatchSnapshot();
  });
});
