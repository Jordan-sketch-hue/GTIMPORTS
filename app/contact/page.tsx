import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import SchedulingWidget from '@/components/SchedulingWidget';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gt-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gt-black to-gray-900">
        <div className="section-container">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 text-center">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gt-steel max-w-3xl mx-auto text-center">
            Ready to start your import journey? Contact us today for a free consultation and quote
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold mb-6">
              Request a Quote
            </h2>
            <p className="text-gt-steel mb-8">
              Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
            </p>
            <ContactForm />
          </div>

          {/* Contact Info & Scheduling */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="card p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-gt-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-gt-steel">
                      Old Hope Road<br />
                      Kingston, Jamaica
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <PhoneIcon className="w-6 h-6 text-gt-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+1876XXXXXXX"
                      className="text-gt-steel hover:text-gt-red transition-colors"
                    >
                      +1 (876) XXX-XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="w-6 h-6 text-gt-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:info@gtimports.com"
                      className="text-gt-steel hover:text-gt-red transition-colors"
                    >
                      info@gtimports.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <ClockIcon className="w-6 h-6 text-gt-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Business Hours</p>
                    <p className="text-gt-steel">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling Widget */}
            <div className="card p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6">
                Schedule a Consultation
              </h3>
              <p className="text-gt-steel mb-6">
                Book a free 30-minute consultation to discuss your import needs
              </p>
              <SchedulingWidget />
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                Prefer WhatsApp?
              </h3>
              <p className="mb-6 text-white/90">
                Get instant responses to your questions via WhatsApp
              </p>
              <a
                href="https://wa.me/1876XXXXXXX?text=Hi! I'm interested in learning more about GT Imports."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </main>
  );
}
