import { render, screen, cleanup } from '@testing-library/react';
import BackspaceButton from '../BackspaceButton';

afterEach(() => {
    cleanup();
});

test('backspace button renders and has correct text', () => {
    render(<BackspaceButton/>);
    const backspaceButton = screen.getByTestId('backspaceButtonTest');
    expect(backspaceButton).toBeInTheDocument();
    expect(backspaceButton).toHaveTextContent('Backspace');
})