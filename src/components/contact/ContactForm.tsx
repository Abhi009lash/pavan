import React, { useState } from 'react';
import type { ContactFormData, FormErrors } from '../../types/portfolio';
import { validateContactForm, hasFormErrors } from '../../utils/validation';
import { CheckCircle, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    mobile: '',
    comment: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const validationErrors = validateContactForm(formData);

    if (hasFormErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to send email via Nodemailer.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', mobile: '', comment: '' });
    } catch (err: any) {
      setSubmitError(err.message || 'Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[580px]">
      {isSubmitted ? (
        <div className="bg-neutral-900 border border-green-500/30 rounded-2xl p-8 text-center space-y-4">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
          <h4 className="text-white text-xl font-bold font-['Aleo']">
            Message Sent Successfully!
          </h4>
          <p className="text-neutral-400 text-sm font-['Roboto']">
            Thank you for reaching out. Pavan will connect with you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 px-6 py-2 bg-[#F9C949] text-black font-semibold rounded-md text-sm hover:bg-[#ebd532] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Your Name"
              className="w-full h-12 px-4 rounded-lg bg-white text-neutral-800 placeholder:text-neutral-400 font-['Plus_Jakarta_Sans'] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F9C949] border border-neutral-200"
            />
            {errors.name && (
              <span className="text-xs text-red-400 mt-1 block">{errors.name}</span>
            )}
          </div>

          {/* Mobile Number Input */}
          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              aria-label="Mobile Number"
              className="w-full h-12 px-4 rounded-lg bg-white text-neutral-800 placeholder:text-neutral-400 font-['Plus_Jakarta_Sans'] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F9C949] border border-neutral-200"
            />
            {errors.mobile && (
              <span className="text-xs text-red-400 mt-1 block">{errors.mobile}</span>
            )}
          </div>

          {/* Comment Textarea */}
          <div>
            <textarea
              name="comment"
              placeholder="Comment"
              rows={5}
              value={formData.comment}
              onChange={handleChange}
              aria-label="Your Comment"
              className="w-full p-4 rounded-lg bg-[#EDEDED] text-neutral-800 placeholder:text-neutral-400 font-['Plus_Jakarta_Sans'] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F9C949] border border-neutral-300 resize-none"
            />
            {errors.comment && (
              <span className="text-xs text-red-400 mt-1 block">{errors.comment}</span>
            )}
          </div>

          {submitError && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-['Roboto']">
              {submitError}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-[#F3E7D3] hover:bg-[#e7dabf] text-black px-8 py-3 rounded-md font-['Aleo'] font-bold text-sm tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-md disabled:opacity-50 cursor-pointer"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Me'}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
