import { render, screen, cleanup } from '@testing-library/react';
import ProductButton from '../ProductButton';

afterEach(() => {
    cleanup();
});

test('product button renders', () => {
    render(<ProductButton/>);
    const productButton = screen.getByTestId('productButtonTest');
    expect(productButton).toBeInTheDocument();
})