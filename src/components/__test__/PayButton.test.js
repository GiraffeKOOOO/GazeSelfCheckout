import { render, screen, cleanup } from '@testing-library/react';
import PayButton from '../PayButton';

afterEach(() => {
    cleanup();
});

test('pay button renders and has correct text', () => {
    render(<PayButton/>);
    const payButton = screen.getByTestId('payButtonTest');
    expect(payButton).toBeInTheDocument();
    expect(payButton).toHaveTextContent('Pay');
})