'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, ShoppingCartIcon, TruckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function WholesalePage() {
  const products = [
    {
      name: 'Arizona Beverages Kit',
      category: 'Beverages',
      description: 'Complete wholesale package of Arizona drinks and energy beverages',
      items: [
        '500 cans Arizona Iced Tea (assorted flavors)',
        '250 Arizona Fruit Punch',
        'Display packaging included',
        'Customs documentation ready',
      ],
      price: '$2,500',
      margin: '40-50% retail markup potential',
      image: 'https://images.unsplash.com/photo-1554866585-c4db4d9fb3b8?q=80&w=400',
    },
    {
      name: 'Energy Drink Starter Kit',
      category: 'Beverages',
      description: 'Premium energy drink assortment for convenience stores and gyms',
      items: [
        '200 Red Bull Energy Drinks',
        '150 Monster Energy (various flavors)',
        '100 Celsius Energy',
        'Point-of-sale materials included',
      ],
      price: '$3,200',
      margin: '45-55% retail markup potential',
      image: 'https://images.unsplash.com/photo-1555296098-91a72e63ff86?q=80&w=400',
    },
    {
      name: 'Snacks & Candy Bundle',
      category: 'Snacks',
      description: 'Mixed wholesale snacks and confectionery items',
      items: [
        '300 assorted candy boxes',
        '200 chip packages (various brands)',
        '150 chocolate bars',
        'Bulk pricing wholesale rates',
      ],
      price: '$1,800',
      margin: '35-45% retail markup potential',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd26626?q=80&w=400',
    },
    {
      name: 'Premium Consumer Bundle',
      category: 'Mixed',
      description: 'Curated mix of high-margin consumer goods',
      items: [
        '400 health and beauty products',
        '250 personal care items',
        '150 home essentials',
        'Brand-new packaging',
      ],
      price: '$4,500',
      margin: '50-65% retail markup potential',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=400',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Your Kit',
      description: 'Select from our pre-configured wholesale kits or request a custom mix tailored to your market.',
      icon: ShoppingCartIcon,
    },
    {
      number: '02',
      title: 'We Source & Pack',
      description: 'We source directly from manufacturers, ensure quality control, and prepare for shipping.',
      icon: CheckIcon,
    },
    {
      number: '03',
      title: 'Shipping to Jamaica',
      description: 'Full container shipments with all customs documentation pre-prepared and ready.',
      icon: TruckIcon,
    },
    {
      number: '04',
      title: 'Ready to Sell',
      description: 'Receive branded packaging and point-of-sale materials to maximize retail impact.',
      icon: SparklesIcon,
    },
  ];

  return (
    <main className="min-h-screen bg-gt-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gt-black via-gt-black to-gray-900">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
              Wholesale & Bulk <span className="text-gradient">Imports</span>
            </h1>
            <p className="text-xl text-gt-steel max-w-3xl mx-auto mb-8">
              Ready-to-sell wholesale kits with premium beverages, snacks, and consumer goods. Perfect for retailers, resellers, and entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#products" className="bg-gt-red text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-red-700 transition-all">
                Browse Kits
              </Link>
              <Link href="/contact" className="border-2 border-gt-red text-gt-red px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-gt-red/10 transition-all">
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gt-steel/20 rounded-xl p-8"
          >
            <ShoppingCartIcon className="w-12 h-12 text-gt-red mb-4" />
            <h3 className="text-xl font-montserrat font-bold mb-2">Pre-Configured Kits</h3>
            <p className="text-gt-steel">Ready-to-order wholesale bundles with proven product mixes and retail demand.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900/50 border border-gt-steel/20 rounded-xl p-8"
          >
            <TruckIcon className="w-12 h-12 text-gt-red mb-4" />
            <h3 className="text-xl font-montserrat font-bold mb-2">Full-Container Shipping</h3>
            <p className="text-gt-steel">Consolidated shipments to maximize savings and minimize per-unit costs.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 border border-gt-steel/20 rounded-xl p-8"
          >
            <SparklesIcon className="w-12 h-12 text-gt-red mb-4" />
            <h3 className="text-xl font-montserrat font-bold mb-2">Branding & Marketing</h3>
            <p className="text-gt-steel">Professional packaging and POS materials to help you maximize retail impact.</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-container bg-gray-900">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16">
          How It <span className="text-gradient">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gt-black rounded-xl p-8 border-2 border-gray-800 hover:border-gt-red transition-all h-full">
                  <div className="text-6xl font-oswald font-bold text-gt-red/20 mb-4">{step.number}</div>
                  <Icon className="w-12 h-12 text-gt-red mb-4" />
                  <h3 className="text-xl font-montserrat font-semibold mb-3">{step.title}</h3>
                  <p className="text-gt-steel text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Product Kits */}
      <section className="section-container" id="products">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-4">
          Ready-to-Order <span className="text-gradient">Kits</span>
        </h2>
        <p className="text-gt-steel text-lg text-center max-w-2xl mx-auto mb-16">
          Curated wholesale bundles with competitive pricing and high retail markup potential
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <div className="bg-gradient-to-r from-gt-red to-red-600 h-2" />
              
              <div className="relative h-64 overflow-hidden bg-gray-800">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gt-black to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gt-red text-sm font-semibold">{product.category}</p>
                    <h3 className="text-2xl font-montserrat font-bold">{product.name}</h3>
                  </div>
                </div>

                <p className="text-gt-steel mb-6">{product.description}</p>

                <div className="mb-6 space-y-3">
                  {product.items.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckIcon className="w-5 h-5 text-gt-red mt-0.5 flex-shrink-0" />
                      <span className="text-gt-ash text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gt-steel/20 pt-6 mb-6">
                  <p className="text-gt-steel text-sm mb-2">Wholesale Price</p>
                  <p className="text-3xl font-oswald font-bold text-gt-red mb-2">{product.price}</p>
                  <p className="text-gt-steel text-sm">{product.margin}</p>
                </div>

                <Link 
                  href="/contact" 
                  className="w-full bg-gt-red text-white py-3 rounded-lg font-montserrat font-semibold hover:bg-red-700 transition-all text-center"
                >
                  Request This Kit
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-gt-red to-red-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Need a Custom Kit?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We can create custom wholesale packages tailored to your market and customer base. Minimum orders and bulk pricing available.
          </p>
          <Link href="/contact" className="bg-white text-gt-red px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-gt-ash transition-colors inline-block">
            Create Your Custom Kit
          </Link>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </main>
  );
}
