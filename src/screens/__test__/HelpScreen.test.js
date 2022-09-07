import { render, screen, cleanup } from '@testing-library/react';
import HelpScreen from '../HelpScreen';

afterEach(() => {
    cleanup();
});

test('help screen renders', () => {
    render(<HelpScreen/>);
    const helpScreen = screen.getByTestId('helpScreenTest');
    expect(helpScreen).toBeInTheDocument();
})