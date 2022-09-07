import { render, screen, cleanup } from '@testing-library/react';
import BackStartButton from '../BackStartButton';

afterEach(() => {
    cleanup();
});

test('back start button renders and has correct text', () => {
    render(<BackStartButton/>);
    const backStartButton = screen.getByTestId('backStartButtonTest');
    expect(backStartButton).toBeInTheDocument();
    expect(backStartButton).toHaveTextContent('Cancel');
})