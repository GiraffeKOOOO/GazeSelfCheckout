import { render, screen, cleanup } from '@testing-library/react';
import PageForwardButton from '../PageForwardButton';

afterEach(() => {
    cleanup();
});

test('page forward button renders', () => {
    render(<PageForwardButton/>);
    const pageForwardButton = screen.getByTestId('pageForwardButtonTest');
    expect(pageForwardButton).toBeInTheDocument();
})