import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { TruckIcon, WrenchScrewdriverIcon, ArrowUpTrayIcon, DocumentTextIcon, ShoppingBagIcon, MagnifyingGlassIcon, QueueListIcon } from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const iconComponents = {
    'Vehicle Sourcing': TruckIcon,
    'Heavy Equipment Imports': WrenchScrewdriverIcon,
    'Shipping & Logistics': ArrowUpTrayIcon,
    'Customs Clearance Support': DocumentTextIcon,
    'Wholesale & Bulk Imports': ShoppingBagIcon,
    'Inspection Services': MagnifyingGlassIcon,
    'Business Fleet Sourcing': QueueListIcon,
  };

  const services = [
    {
      title: 'Vehicle Sourcing',
      description: 'Expert sourcing of vehicles from Japan, USA, UK, and Canada. We find the perfect match for your needs and budget.',
      features: [
        'Access to major auctions and dealerships',
        'Pre-purchase inspections',
        'Detailed vehicle history reports',
        'Competitive pricing negotiations',
      ],
    },
    {
      title: 'Heavy Equipment Imports',
      description: 'Specialized in importing construction and agricultural machinery for businesses.',
      features: [
        'Farm machinery and tractors',
        'Construction equipment',
        'Generators and power systems',
        'Specialized industrial equipment',
      ],
    },
    {
      title: 'Shipping & Logistics',
      description: 'Complete shipping coordination from source country to Jamaica.',
      features: [
        'Container and RoRo shipping',
        'Marine insurance coverage',
        'Port handling arrangements',
        'Real-time shipment tracking',
      ],
    },
    {
      title: 'Customs Clearance Support',
      description: 'Guidance through customs and import documentation processes.',
      features: [
        'Import permit assistance',
        'Customs documentation preparation',
        'Duty and tax calculations',
        'Compliance verification',
      ],
    },
    {
      title: 'Wholesale & Bulk Imports',
      description: 'Bulk import distribution of wholesale items, beverages, snacks, and consumer goods. Perfect for retailers and resellers.',
      features: [
        'Arizona beverages and energy drinks',
        'Snacks and confectionery items',
        'Consumer packaged goods',
        'Pre-assembled import kits',
      ],
    },
    {
      title: 'Inspection Services',
      description: 'Thorough inspections before purchase to ensure quality and condition.',
      features: [
        'Mechanical inspections',
        'Cosmetic condition reports',
        'Photo and video documentation',
        'Third-party inspection coordination',
      ],
    },
    {
      title: 'Business Fleet Sourcing',
      description: 'Special packages for businesses requiring multiple vehicles or equipment.',
      features: [
        'Volume discounts',
        'Fleet management consultation',
        'Customized sourcing strategies',
        'Long-term partnership benefits',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gt-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gt-black to-gray-900">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gt-steel max-w-3xl mx-auto">
            Comprehensive import solutions from sourcing to delivery — we handle every step of your import journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.title as keyof typeof iconComponents];
            return (
            <div key={index} className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <IconComponent className="w-16 h-16 text-gt-red" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-montserrat font-bold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gt-steel mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gt-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gt-ash text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-container bg-gray-900">
        <h2 className="text-4xl font-montserrat font-bold mb-12 text-center">
          Our <span className="text-gradient">Process</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your requirements and budget' },
              { step: '2', title: 'Sourcing', desc: 'Find and inspect suitable options' },
              { step: '3', title: 'Documentation', desc: 'Handle all paperwork and permits' },
              { step: '4', title: 'Shipping', desc: 'Arrange international transport' },
              { step: '5', title: 'Customs', desc: 'Clear customs and pay duties' },
              { step: '6', title: 'Delivery', desc: 'Final delivery to your location' },
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gt-red rounded-full flex items-center justify-center">
                  <span className="text-white font-oswald font-bold text-xl">{item.step}</span>
                </div>
                <div className="flex-1 bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-montserrat font-semibold mb-2">{item.title}</h3>
                  <p className="text-gt-steel">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-gt-red to-red-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's discuss your import needs and create a custom solution
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="bg-white text-gt-red px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-gt-ash transition-colors">
              Request a Quote
            </Link>
            <a
              href="https://wa.me/1876XXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-green-600 transition-colors inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
