'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon 
} from '@heroicons/react/24/outline';

interface FAQ {
  question: string;
  answer: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What countries do you import from?",
      answer: "We specialize in imports from Japan, USA, United Kingdom, and Canada. Each region offers unique vehicles and equipment to meet your specific needs."
    },
    {
      question: "How long does the import process take?",
      answer: "The typical import timeline is 6-10 weeks from order confirmation to delivery in Jamaica. This includes sourcing, inspection, shipping, and customs clearance."
    },
    {
      question: "Do you handle customs clearance?",
      answer: "Yes, we provide comprehensive customs clearance guidance and can connect you with trusted partners to ensure a smooth import process."
    },
    {
      question: "What types of vehicles do you import?",
      answer: "We import pickups, SUVs, coach buses, reefer boxes, farm machinery, containers, generators, coasters, and various heavy equipment."
    },
    {
      question: "Can I inspect the vehicle before purchase?",
      answer: "Absolutely! We provide detailed inspection reports, photos, and videos of all vehicles. For high-value purchases, third-party inspections can also be arranged."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, wire transfers, and certified checks. Payment terms can be discussed based on your specific requirements."
    },
    {
      question: "Do you offer warranties?",
      answer: "Warranty options vary by vehicle and origin country. We work with vehicles that come with manufacturer warranties where applicable and can advise on extended warranty options."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is transparent and competitive. We charge a service fee for sourcing and handling, plus the actual vehicle cost and shipping fees. Get a detailed quote by contacting us."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gt-red hover:bg-red-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gt-red p-4">
              <h3 className="text-white font-montserrat font-semibold text-lg">
                How can we help you?
              </h3>
              <p className="text-white/90 text-sm mt-1">
                Common questions about importing
              </p>
            </div>

            {/* FAQ List */}
            <div className="p-4 max-h-96 overflow-y-auto space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-800 transition-colors text-left"
                  >
                    <span className="text-white text-sm font-medium pr-2">
                      {faq.question}
                    </span>
                    {expandedIndex === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-gt-red flex-shrink-0" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gt-steel flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 bg-gray-800 text-gt-steel text-sm border-t border-gray-700">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <p className="text-gt-steel text-xs text-center mb-2">
                Still have questions?
              </p>
              <a
                href="/contact"
                className="block text-center bg-gt-red hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
              >
                Contact Us Directly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
