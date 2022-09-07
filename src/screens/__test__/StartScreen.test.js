import { render, screen, cleanup } from '@testing-library/react';
import StartScreen from '../StartScreen';

afterEach(() => {
    cleanup();
});

test('product category screen renders', () => {
    render(<StartScreen/>);
    const startScreen = screen.getByTestId('startScreenTest');
    expect(startScreen).toBeInTheDocument();
})