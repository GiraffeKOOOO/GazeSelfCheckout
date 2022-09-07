import { render, screen, cleanup } from '@testing-library/react';
import SearchProductItem from '../SearchProductItem';

afterEach(() => {
    cleanup();
});

test('search product item button renders', () => {
    render(<SearchProductItem/>);
    const searchProductItem = screen.getByTestId('searchProductItemTest');
    expect(searchProductItem).toBeInTheDocument();
})