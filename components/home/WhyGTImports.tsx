'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  GlobeAltIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

export default function WhyGTImports() {
  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'Trusted & Reliable',
      description: 'Years of experience in international imports with a proven track record',
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Network',
      description: 'Direct connections in Japan, USA, UK, and Canada for best sourcing',
    },
    {
      icon: ClockIcon,
      title: 'Fast Processing',
      description: '6-10 week delivery timeline with real-time status updates',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Pricing',
      description: 'Quality imports at affordable prices with transparent pricing',
    },
    {
      icon: UserGroupIcon,
      title: 'Personalized Service',
      description: 'Dedicated support from start to finish, tailored to your needs',
    },
    {
      icon: CheckBadgeIcon,
      title: 'Quality Assured',
      description: 'Thorough inspections and detailed reports on every vehicle',
    },
  ];

  return (
    <section className="section-container bg-gradient-to-b from-gray-900 to-gt-black">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-montserrat font-bold mb-4"
        >
          Why Choose <span className="text-gradient">GT Imports</span>
        </motion.h2>
        <p className="text-gt-steel text-lg max-w-2xl mx-auto">
          We are the little giants in the business for sourcing your dream car
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gt-red transition-all duration-300 group"
          >
            <div className="mb-6">
              <reason.icon className="w-12 h-12 text-gt-red group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-3 group-hover:text-gt-red transition-colors">
              {reason.title}
            </h3>
            <p className="text-gt-steel leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        <div className="p-6">
          <div className="text-4xl mb-2">🏆</div>
          <p className="text-gt-steel text-sm">Premium Quality</p>
        </div>
        <div className="p-6">
          <div className="text-4xl mb-2">💼</div>
          <p className="text-gt-steel text-sm">Professional Service</p>
        </div>
        <div className="p-6">
          <div className="text-4xl mb-2">🌐</div>
          <p className="text-gt-steel text-sm">International Reach</p>
        </div>
        <div className="p-6">
          <div className="text-4xl mb-2">🤝</div>
          <p className="text-gt-steel text-sm">Customer First</p>
        </div>
      </motion.div>
    </section>
  );
}
