import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AxioraCaseStudy } from '../components/case-study/AxioraCaseStudy';

describe('AxioraCaseStudy', () => {
  it('renders case study title, subtitle, and problem statement', () => {
    const onBack = vi.fn();
    render(<AxioraCaseStudy onBack={onBack} />);

    expect(screen.getByRole('heading', { level: 1, name: 'Axiora Pulse' })).toBeInTheDocument();
    expect(screen.getByText(/Featured Case Study/i)).toBeInTheDocument();
    expect(screen.getByText(/Untangling Ambiguity/i)).toBeInTheDocument();
    expect(screen.getByText('The Problem')).toBeInTheDocument();
    expect(screen.getByText('The Guided Validation Approach')).toBeInTheDocument();
  });

  it('renders the roadmap timeline phases', () => {
    const onBack = vi.fn();
    render(<AxioraCaseStudy onBack={onBack} />);

    expect(screen.getByText('Project Implementation Timeline')).toBeInTheDocument();
    expect(screen.getByText('System Mapping')).toBeInTheDocument();
    expect(screen.getByText('Guided UX Design')).toBeInTheDocument();
    expect(screen.getByText('Feasibility Review')).toBeInTheDocument();
  });

  it('calls onBack when clicking the back button', () => {
    const onBack = vi.fn();
    render(<AxioraCaseStudy onBack={onBack} />);

    const backButton = screen.getByText(/Back to Projects/i);
    fireEvent.click(backButton);
    expect(onBack).toHaveBeenCalledTimes(1);
  });
});
