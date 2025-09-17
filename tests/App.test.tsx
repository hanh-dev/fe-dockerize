import { render, screen } from '@testing-library/react';
import Test from '../src/components/Test';

describe('Homepage testing', () => {
  it('Should display Test', () => {
    render(<Test />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
