import { render, screen, cleanup } from '@testing-library/react';
import PageBackwardButton from '../PageBackwardButton';

afterEach(() => {
    cleanup();
});

test('page backward button renders', () => {
    render(<PageBackwardButton/>);
    const pageBackwardButton = screen.getByTestId('pageBackwardButtonTest');
    expect(pageBackwardButton).toBeInTheDocument();
})