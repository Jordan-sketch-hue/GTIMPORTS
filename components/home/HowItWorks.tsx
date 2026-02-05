'use client';

import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, CheckCircleIcon, TruckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Request Vehicle',
      description: 'Tell us what you need. We source from Japan, USA, UK, or Canada based on your preferences.',
      icon: MagnifyingGlassIcon,
    },
    {
      number: '02',
      title: 'Sourcing & Inspection',
      description: 'We locate your vehicle, conduct thorough inspections, and provide detailed reports with photos.',
      icon: CheckCircleIcon,
    },
    {
      number: '03',
      title: 'Shipping & Customs',
      description: 'Handle all logistics, shipping arrangements, and customs clearance documentation for you.',
      icon: TruckIcon,
    },
    {
      number: '04',
      title: 'Delivery in Jamaica',
      description: 'Your import arrives safely at your location. We ensure smooth end-to-end delivery.',
      icon: CheckBadgeIcon,
    },
  ];

  return (
    <section className="section-container bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-montserrat font-bold mb-4"
        >
          How It <span className="text-gradient">Works</span>
        </motion.h2>
        <p className="text-gt-steel text-lg max-w-2xl mx-auto">
          Simple, transparent, and reliable — we handle everything from start to finish
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gt-red via-red-500 to-gt-red transform -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gt-black rounded-xl p-8 border-2 border-gray-800 hover:border-gt-red transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="text-6xl font-oswald font-bold text-gt-red/20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon className="w-14 h-14 text-gt-red" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-montserrat font-semibold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gt-steel text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Estimate */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-block bg-gt-black border-2 border-gt-red rounded-xl px-8 py-6">
          <p className="text-gt-steel mb-2">Typical Timeline</p>
          <p className="text-3xl font-oswald font-bold text-gt-red">6-10 Weeks</p>
          <p className="text-gt-steel text-sm mt-2">From order to delivery</p>
        </div>
      </motion.div>
    </section>
  );
}
