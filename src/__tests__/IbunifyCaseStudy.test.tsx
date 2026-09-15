import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { IbunifyCaseStudy } from '../components/case-study/IbunifyCaseStudy';

describe('IbunifyCaseStudy', () => {
  it('renders case study title and description', () => {
    const onBack = vi.fn();
    render(<IbunifyCaseStudy onBack={onBack} />);

    expect(screen.getByRole('heading', { level: 1, name: 'ibunify CRM' })).toBeInTheDocument();
    expect(screen.getByText(/Featured Case Study/i)).toBeInTheDocument();
  });

  it('renders section headings and context', () => {
    const onBack = vi.fn();
    render(<IbunifyCaseStudy onBack={onBack} />);

    expect(screen.getByText(/Untangling Ambiguity/i)).toBeInTheDocument();
    expect(screen.getByText('The Problem')).toBeInTheDocument();
    expect(screen.getByText('Project Implementation Timeline')).toBeInTheDocument();
  });

  it('calls onBack when clicking the back button', () => {
    const onBack = vi.fn();
    render(<IbunifyCaseStudy onBack={onBack} />);

    const backButton = screen.getByText(/Back to Projects/i);
    fireEvent.click(backButton);
    expect(onBack).toHaveBeenCalledTimes(1);
  });
});
