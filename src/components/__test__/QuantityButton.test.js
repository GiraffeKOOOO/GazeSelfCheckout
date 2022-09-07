import { render, screen, cleanup } from '@testing-library/react';
import QuantityButton from '../QuantityButton';

afterEach(() => {
    cleanup();
});

test('quantity button renders', () => {
    render(<QuantityButton/>);
    const quantityButton = screen.getByTestId('quantityButtonTest');
    expect(quantityButton).toBeInTheDocument();
})