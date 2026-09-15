import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from '../components/works/ProjectCard';
import type { ProjectItem } from '../types/portfolio';

const mockProject: ProjectItem = {
  id: 1,
  numberStr: '01',
  title: 'Axiora Pulse',
  description: 'AI-powered business validation platform.',
  bgColor: '#000000',
  textColor: '#FFFFFF',
  watermarkColor: 'rgba(139, 139, 139, 0.45)',
  tabHeaderColor: '#000000',
  mediaSrc: '/assets/projects/axiora_pulse.png',
  mediaAlt: 'Axiora Pulse Preview',
  topTabs: [],
  bottomTabs: [],
};

describe('ProjectCard', () => {
  it('renders project title, description, and watermark number', () => {
    render(
      <ProjectCard
        project={mockProject}
        isActive={true}
      />
    );

    expect(screen.getByText('Axiora Pulse')).toBeInTheDocument();
    expect(screen.getByText('AI-powered business validation platform.')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('Discover')).toBeInTheDocument();
  });

  it('calls onOpenCaseStudy when clicking discover on supported project', () => {
    const onOpenCaseStudy = vi.fn();

    render(
      <ProjectCard
        project={{ ...mockProject, id: 2, title: 'ibunify CRM' }}
        isActive={true}
        onOpenCaseStudy={onOpenCaseStudy}
      />
    );

    const discoverBtn = screen.getByRole('button', { name: /discover/i });
    fireEvent.click(discoverBtn);
    expect(onOpenCaseStudy).toHaveBeenCalledWith(2);
  });
});
