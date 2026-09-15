import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutPage } from '../components/about-page/AboutPage';

describe('AboutPage', () => {
  it('renders about hero heading and philosophy pillars', () => {
    render(<AboutPage />);

    expect(
      screen.getByText(/Transitioning from rigorous engineering to human-centered digital experiences/i)
    ).toBeInTheDocument();

    expect(screen.getByText('Electronic Engineering')).toBeInTheDocument();
    expect(screen.getByText('Analog Darkroom Craft')).toBeInTheDocument();
    expect(screen.getByText('UX & Product Design')).toBeInTheDocument();
  });

  it('renders skill badges including UX Strategy and SaaS Architecture', () => {
    render(<AboutPage />);

    expect(screen.getByText('UX Strategy')).toBeInTheDocument();
    expect(screen.getByText('SaaS Architecture')).toBeInTheDocument();
    expect(screen.getByText('Figma Expert')).toBeInTheDocument();
  });
});
