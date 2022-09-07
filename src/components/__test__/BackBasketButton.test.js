import { render, screen, cleanup } from '@testing-library/react';
import BackBasketButton from '../BackBasketButton';

afterEach(() => {
    cleanup();
});

test('basket back button renders and has correct text', () => {
    render(<BackBasketButton/>);
    const backBasteButton = screen.getByTestId('backBasketButtonTest');
    expect(backBasteButton).toBeInTheDocument();
    expect(backBasteButton).toHaveTextContent('Cancel');
})