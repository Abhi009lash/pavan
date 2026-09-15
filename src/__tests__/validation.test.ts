import { describe, it, expect } from 'vitest';
import { validateContactForm, hasFormErrors } from '../utils/validation';

describe('validateContactForm', () => {
  it('should validate complete and correct form data without errors', () => {
    const data = {
      name: 'John Doe',
      mobile: '+91 9876543210',
      comment: 'Interested in working together on a SaaS product design.',
    };
    const errors = validateContactForm(data);
    expect(hasFormErrors(errors)).toBe(false);
    expect(errors.name).toBeUndefined();
    expect(errors.mobile).toBeUndefined();
    expect(errors.comment).toBeUndefined();
  });

  it('should return error when name is missing or too short', () => {
    const data = {
      name: ' ',
      mobile: '+91 9876543210',
      comment: 'Interested in working together.',
    };
    const errors = validateContactForm(data);
    expect(hasFormErrors(errors)).toBe(true);
    expect(errors.name).toBe('Name is required');

    const shortName = validateContactForm({ ...data, name: 'A' });
    expect(shortName.name).toBe('Name must be at least 2 characters');
  });

  it('should return error when mobile number is invalid', () => {
    const data = {
      name: 'Pavan',
      mobile: 'abc-not-a-number',
      comment: 'Let us build something great.',
    };
    const errors = validateContactForm(data);
    expect(hasFormErrors(errors)).toBe(true);
    expect(errors.mobile).toBe('Please enter a valid mobile number');
  });

  it('should return error when comment is missing or too short', () => {
    const data = {
      name: 'Pavan',
      mobile: '9876543210',
      comment: 'Hi',
    };
    const errors = validateContactForm(data);
    expect(hasFormErrors(errors)).toBe(true);
    expect(errors.comment).toBe('Message must be at least 5 characters');
  });
});
