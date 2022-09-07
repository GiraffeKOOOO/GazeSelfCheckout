import { render, screen, cleanup } from '@testing-library/react';
import SpacebarButton from '../SpacebarButton';

afterEach(() => {
    cleanup();
});

test('spacebar button renders with correct text', () => {
    render(<SpacebarButton/>);
    const spacebarButton = screen.getByTestId('spacebarButtonTest');
    expect(spacebarButton).toBeInTheDocument();
    expect(spacebarButton).toHaveTextContent('Spacebar');
})