import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WorksPage } from '../components/works-page/WorksPage';

describe('WorksPage', () => {
  it('renders selected portfolio heading and 8 project chips', () => {
    render(<WorksPage />);

    expect(
      screen.getByText(/Eight projects that show how structure, storytelling, and playful systems come together/i)
    ).toBeInTheDocument();

    expect(screen.getByText('8 projects')).toBeInTheDocument();
    expect(screen.getByText('Editorial portfolio')).toBeInTheDocument();
    expect(screen.getByText('Playful systems')).toBeInTheDocument();
  });

  it('renders all 8 project cards across the grid', () => {
    render(<WorksPage />);

    expect(screen.getByText('Axiora Pulse')).toBeInTheDocument();
    expect(screen.getByText('ibunify - CRM')).toBeInTheDocument();
    expect(screen.getByText('Fiable GRC')).toBeInTheDocument();
    expect(screen.getByText('Laundrix')).toBeInTheDocument();
    expect(screen.getByText('Pulse Analytics')).toBeInTheDocument();
    expect(screen.getByText('ibunify Mobile')).toBeInTheDocument();
    expect(screen.getByText('Fiable Audit')).toBeInTheDocument();
    expect(screen.getByText('Laundrix Ops')).toBeInTheDocument();
  });
});
