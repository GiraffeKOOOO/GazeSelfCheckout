import { render, screen, cleanup } from '@testing-library/react';
import BasketItem from '../BasketItem';

afterEach(() => {
    cleanup();
});

test('basket item button renders', () => {
    render(<BasketItem/>);
    const basketItem = screen.getByTestId('basketItemTest');
    expect(basketItem).toBeInTheDocument();
})