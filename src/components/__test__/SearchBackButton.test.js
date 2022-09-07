import { render, screen, cleanup } from '@testing-library/react';
import SearchBackButton from '../SearchBackButton';

afterEach(() => {
    cleanup();
});

test('search back button renders with correct text', () => {
    render(<SearchBackButton/>);
    const searchBackButton = screen.getByTestId('searchBackButtonTest');
    expect(searchBackButton).toBeInTheDocument();
    expect(searchBackButton).toHaveTextContent('Cancel');
})