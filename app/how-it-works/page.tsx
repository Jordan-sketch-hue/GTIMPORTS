import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gt-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gt-black to-gray-900">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h1>
          <p className="text-xl text-gt-steel max-w-3xl mx-auto">
            A simple, transparent process from request to delivery
          </p>
        </div>
      </section>

      {/* Main Process */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl font-oswald font-bold text-gt-red/20 mb-4">01</div>
              <h2 className="text-3xl font-montserrat font-bold mb-4">
                Request Your Vehicle
              </h2>
              <p className="text-gt-steel text-lg mb-6 leading-relaxed">
                Tell us exactly what you're looking for — vehicle type, specifications, budget, and country preference. We source from Japan, USA, UK, or Canada based on your needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fill out our quote request form</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Call or WhatsApp us directly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Schedule a free consultation</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-4">🔍</div>
              <p className="text-gt-steel">We respond within 24 hours with options</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-900 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-4">✅</div>
              <p className="text-gt-steel">Detailed reports with photos & videos</p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-6xl font-oswald font-bold text-gt-red/20 mb-4">02</div>
              <h2 className="text-3xl font-montserrat font-bold mb-4">
                Sourcing & Inspection
              </h2>
              <p className="text-gt-steel text-lg mb-6 leading-relaxed">
                We locate vehicles matching your criteria and conduct thorough inspections. You receive detailed reports, photos, and videos before making any decisions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Access to major auctions and dealers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mechanical & cosmetic inspections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Complete vehicle history reports</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl font-oswald font-bold text-gt-red/20 mb-4">03</div>
              <h2 className="text-3xl font-montserrat font-bold mb-4">
                Shipping & Customs
              </h2>
              <p className="text-gt-steel text-lg mb-6 leading-relaxed">
                We handle all logistics, shipping arrangements, and customs clearance documentation. You stay updated with real-time tracking throughout the journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Container & RoRo shipping options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Marine insurance coverage included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Customs clearance guidance</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-4">🚢</div>
              <p className="text-gt-steel">4-8 weeks shipping time</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-900 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-4">🎉</div>
              <p className="text-gt-steel">Your vehicle arrives safely in Jamaica</p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-6xl font-oswald font-bold text-gt-red/20 mb-4">04</div>
              <h2 className="text-3xl font-montserrat font-bold mb-4">
                Delivery in Jamaica
              </h2>
              <p className="text-gt-steel text-lg mb-6 leading-relaxed">
                Your import arrives safely at the designated location. We ensure smooth end-to-end delivery and provide post-import support.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Port clearance coordination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Final inspection and handover</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-gt-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ongoing support and service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-container bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            Expected <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-gt-steel text-lg">From request to delivery</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gt-black border-2 border-gt-red rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-oswald font-bold text-gt-red mb-2">1-3</div>
              <div className="text-sm text-gt-steel">Days</div>
              <div className="text-white font-medium mt-2">Sourcing</div>
            </div>
            <div>
              <div className="text-4xl font-oswald font-bold text-gt-red mb-2">1-2</div>
              <div className="text-sm text-gt-steel">Weeks</div>
              <div className="text-white font-medium mt-2">Documentation</div>
            </div>
            <div>
              <div className="text-4xl font-oswald font-bold text-gt-red mb-2">4-8</div>
              <div className="text-sm text-gt-steel">Weeks</div>
              <div className="text-white font-medium mt-2">Shipping</div>
            </div>
            <div>
              <div className="text-4xl font-oswald font-bold text-gt-red mb-2">3-5</div>
              <div className="text-sm text-gt-steel">Days</div>
              <div className="text-white font-medium mt-2">Clearance</div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-2xl font-oswald font-bold text-gt-red">Total: 6-10 Weeks</p>
            <p className="text-gt-steel text-sm mt-2">Average from order to delivery</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-gt-red to-red-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Ready to Start Your Import?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get a free quote and consultation today
          </p>
          <Link href="/contact" className="bg-white text-gt-red px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-gt-ash transition-colors inline-block">
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </main>
  );
}
