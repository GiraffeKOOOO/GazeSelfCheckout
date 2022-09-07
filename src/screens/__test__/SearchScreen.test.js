import { render, screen, cleanup } from '@testing-library/react';
import SearchScreen from '../SearchScreen';

afterEach(() => {
    cleanup();
});

test('product category screen renders', () => {
    render(<SearchScreen/>);
    const searchScreen = screen.getByTestId('searchScreenTest');
    expect(searchScreen).toBeInTheDocument();
})