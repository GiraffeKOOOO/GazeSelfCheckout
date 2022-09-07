import { render, screen, cleanup } from '@testing-library/react';
import KeyboardButton from '../KeyboardButton';

afterEach(() => {
    cleanup();
});

test('keyboard button renders', () => {
    render(<KeyboardButton/>);
    const keyboardButton = screen.getByTestId('keyboardButtonTest');
    expect(keyboardButton).toBeInTheDocument();
})