import { render, screen, cleanup } from '@testing-library/react';
import BackPayButton from '../BackPayButton';

afterEach(() => {
    cleanup();
});

test('pay back button renders and has correct text', () => {
    render(<BackPayButton/>);
    const backPayButton = screen.getByTestId('backPayButtonTest');
    expect(backPayButton).toBeInTheDocument();
    expect(backPayButton).toHaveTextContent('Cancel');
})