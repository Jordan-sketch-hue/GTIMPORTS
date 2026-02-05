'use client';

import { useState } from 'react';
import { format, addDays, startOfWeek, addWeeks } from 'date-fns';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function SchedulingWidget() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate next 7 days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = addDays(today, i);
      // Skip Sundays
      if (date.getDay() !== 0) {
        dates.push(date);
      }
    }
    return dates;
  };

  // Available time slots
  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast.error('Please select a date and time');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Consultation scheduled! We\'ll send you a confirmation email.');
      setSelectedDate(null);
      setSelectedTime(null);
      setName('');
      setEmail('');
      setPhone('');
      setIsSubmitting(false);
    }, 1500);
  };

  const availableDates = getAvailableDates();

  return (
    <>
      <Toaster position="top-right" />
      <div className="space-y-6">
        {/* Date Selection */}
        <div>
          <h4 className="font-semibold mb-3">Select a Date</h4>
          <div className="grid grid-cols-3 gap-2">
            {availableDates.map((date) => (
              <button
                key={date.toISOString()}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTime(null);
                }}
                className={`p-3 rounded-lg border text-sm transition-all ${
                  selectedDate?.toDateString() === date.toDateString()
                    ? 'border-gt-red bg-gt-red/10 text-gt-red'
                    : 'border-gray-700 hover:border-gt-red/50'
                }`}
              >
                <div className="font-semibold">{format(date, 'EEE')}</div>
                <div className="text-xs">{format(date, 'MMM d')}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-semibold mb-3">Select a Time</h4>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded-lg border text-sm transition-all ${
                    selectedTime === time
                      ? 'border-gt-red bg-gt-red/10 text-gt-red'
                      : 'border-gray-700 hover:border-gt-red/50'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Details */}
        {selectedDate && selectedTime && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors text-sm"
              />
            </div>
            <div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Your Phone"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gt-red transition-colors text-sm"
              />
            </div>

            {/* Summary */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gt-steel mb-2">Consultation Details:</p>
              <p className="text-white font-semibold">
                {format(selectedDate, 'EEEE, MMMM d, yyyy')} at {selectedTime}
              </p>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Scheduling...' : 'Confirm Consultation'}
            </motion.button>
          </motion.form>
        )}
      </div>
    </>
  );
}
