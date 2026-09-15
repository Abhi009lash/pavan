import type { ContactFormData, FormErrors } from '../types/portfolio';

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Name is required';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  const trimmedMobile = data.mobile.trim();
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
  if (!trimmedMobile) {
    errors.mobile = 'Mobile number is required';
  } else if (!phoneRegex.test(trimmedMobile.replace(/\s+/g, ''))) {
    errors.mobile = 'Please enter a valid mobile number';
  }

  const trimmedComment = data.comment.trim();
  if (!trimmedComment) {
    errors.comment = 'Please write a message';
  } else if (trimmedComment.length < 5) {
    errors.comment = 'Message must be at least 5 characters';
  }

  return errors;
}

export function hasFormErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}
