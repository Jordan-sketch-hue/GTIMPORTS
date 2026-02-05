'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    countryPreference: '',
    budgetRange: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Quote request received! We\'ll contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleType: '',
        countryPreference: '',
        budgetRange: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors"
            placeholder="John Doe"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors"
              placeholder="+1 (876) XXX-XXXX"
            />
          </div>
        </div>

        {/* Vehicle Type */}
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium mb-2">
            Vehicle/Equipment Type *
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            required
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors"
          >
            <option value="">Select a category</option>
            <option value="pickups">Pickups</option>
            <option value="coach-buses">Coach Buses</option>
            <option value="reefer-boxes">Reefer Boxes</option>
            <option value="farm-machinery">Farm Machinery</option>
            <option value="containers">Containers</option>
            <option value="generators">Generators</option>
            <option value="coasters">Coasters</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Country Preference and Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="countryPreference" className="block text-sm font-medium mb-2">
              Country Preference
            </label>
            <select
              id="countryPreference"
              name="countryPreference"
              value={formData.countryPreference}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors"
            >
              <option value="">Any Country</option>
              <option value="japan">🇯🇵 Japan</option>
              <option value="usa">🇺🇸 USA</option>
              <option value="uk">🇬🇧 UK</option>
              <option value="canada">🇨🇦 Canada</option>
            </select>
          </div>
          <div>
            <label htmlFor="budgetRange" className="block text-sm font-medium mb-2">
              Budget Range (USD)
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors"
            >
              <option value="">Select range</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-20k">$10,000 - $20,000</option>
              <option value="20k-50k">$20,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="over-100k">Over $100,000</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors resize-none"
            placeholder="Tell us more about what you're looking for..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get a Free Quote'}
        </motion.button>

        <p className="text-xs text-gt-steel text-center">
          By submitting this form, you agree to our terms and privacy policy.
        </p>
      </form>
    </>
  );
}
