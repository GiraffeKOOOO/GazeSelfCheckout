import { render, screen, cleanup } from '@testing-library/react';
import SkipPayButton from '../SkipPayButton';

afterEach(() => {
    cleanup();
});

test('skip pay button renders with correct text', () => {
    render(<SkipPayButton/>);
    const skipPayButton = screen.getByTestId('skipPayButtonTest');
    expect(skipPayButton).toBeInTheDocument();
    expect(skipPayButton).toHaveTextContent('Skip');
})