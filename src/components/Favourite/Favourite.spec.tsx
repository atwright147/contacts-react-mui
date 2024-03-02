import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Favourite } from './Favourite';

// https://kasongoyo.medium.com/using-react-testing-library-to-test-if-component-contains-an-instance-of-another-component-c46a39c3611b
vi.mock('@mui/icons-material', () => ({
  Star: () => <div data-testid="starFilled" />,
  StarOutline: () => <div data-testid="starOutline" />,
}));

describe('Favourite component', () => {
  describe('given isFavourite is true', () => {
    it('should render an anchor element', () => {
      render(<Favourite isFavourite />);
      expect(screen.getByTestId('starFilled')).toBeInTheDocument();
    });
  });

  describe('given isFavourite is false', () => {
    it('should render an anchor element', () => {
      render(<Favourite />);
      expect(screen.getByTestId('starOutline')).toBeInTheDocument();
    });
  });
});
