import { render, screen, cleanup } from '@testing-library/react';
import ReceiptButton from '../ReceiptButton';

afterEach(() => {
    cleanup();
});

test('receipt button renders', () => {
    render(<ReceiptButton/>);
    const receiptButton = screen.getByTestId('receiptButtonTest');
    expect(receiptButton).toBeInTheDocument();
})