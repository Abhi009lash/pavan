import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from '../components/contact/ContactForm';

describe('ContactForm', () => {
  it('renders input fields and submit button', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mobile Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Comment')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send me/i })).toBeInTheDocument();
  });

  it('displays validation errors when submitting empty form', () => {
    render(<ContactForm />);
    const submitBtn = screen.getByRole('button', { name: /send me/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Mobile number is required')).toBeInTheDocument();
    expect(screen.getByText('Please write a message')).toBeInTheDocument();
  });

  it('clears error when typing into an input field', () => {
    render(<ContactForm />);
    const submitBtn = screen.getByRole('button', { name: /send me/i });
    fireEvent.click(submitBtn);
    expect(screen.getByText('Name is required')).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText('Name');
    fireEvent.change(nameInput, { target: { value: 'Pavan' } });
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });
});
