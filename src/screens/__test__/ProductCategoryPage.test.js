import { render, screen, cleanup } from '@testing-library/react';
import ProductCategoryPage from '../ProductCategoryPage';

afterEach(() => {
    cleanup();
});

test('product category screen renders', () => {
    render(<ProductCategoryPage/>);
    const productCategoryPage = screen.getByTestId('productCategoryPageTest');
    expect(productCategoryPage).toBeInTheDocument();
})