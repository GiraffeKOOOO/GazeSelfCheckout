import { render, screen, cleanup } from '@testing-library/react';
import HelpButton from '../HelpButton';

afterEach(() => {
    cleanup();
});

test('help button renders and has correct text', () => {
    render(<HelpButton/>);
    const helpButton = screen.getByTestId('helpButtonTest');
    expect(helpButton).toBeInTheDocument();
    expect(helpButton).toHaveTextContent('Help');
})