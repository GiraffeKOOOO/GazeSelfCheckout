import { render, screen, cleanup } from '@testing-library/react';
import StartButton from '../StartButton';

afterEach(() => {
    cleanup();
});

test('start button renders with correct text', () => {
    render(<StartButton/>);
    const startButton = screen.getByTestId('startButtonTest');
    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveTextContent('Start');
})