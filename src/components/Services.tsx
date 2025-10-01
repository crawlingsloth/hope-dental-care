import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  RefreshCw, 
  Sparkles, 
  Check,
  ArrowRight
} from 'lucide-react';
import Card from './shared/Card';
import Button from './shared/Button';

const Services: React.FC = () => {
  const services = [
    {
      icon: Shield,
      category: 'Dental Braces',
      description: 'Straighten your teeth and achieve the perfect smile with our orthodontic treatments',
      services: [
        'Metal Braces: MVR 3,500',
        'Ceramic Braces: MVR 5,500',
        'Self-ligating Braces: MVR 7,500'
      ],
      priceRange: 'Starting from MVR 3,500',
      featured: true
    },
    {
      icon: RefreshCw,
      category: 'Teeth Cleaning & Scaling',
      description: 'Maintain optimal oral health with professional cleaning and preventive care',
      services: [
        'Regular Cleaning & Scaling: MVR 600',
        'Teeth Cleaning + Dental Consultation: MVR 500',
        'Free Dental Checkup with selected treatments'
      ],
      priceRange: 'MVR 500 - 600',
      featured: false
    },
    {
      icon: Sparkles,
      category: 'Dental Crowns & Bridges',
      description: 'Restore damaged teeth and replace missing teeth with quality crowns and bridges',
      services: [
        'Metal Crowns',
        'Ceramic Crowns',
        'Zirconia Crowns',
        'E-max Crowns',
        'Kids Special Crowns',
        'Dental Bridges'
      ],
      priceRange: 'Varies by type',
      featured: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wide">
            Our Services
          </h2>
          <h3 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            Our Dental Services
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer specialized dental treatments to help you achieve and maintain a healthy, beautiful smile.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={`p-8 h-full relative ${
                  service.featured ? 'border-2 border-primary-200 shadow-lg' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="space-y-6">
                  {/* Icon and Category */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {service.category}
                      </h4>
                      <div className="text-lg font-semibold text-primary-500">
                        {service.priceRange}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant={service.featured ? 'primary' : 'outline'}
                    className="w-full flex items-center justify-center space-x-2"
                    onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Insurance & Financing Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Insurance & Payment Options
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Most major insurance plans accepted</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Flexible payment plans available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>CareCredit financing options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Senior and family discounts</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Why Choose Hope Dental Care?
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Same-day emergency appointments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Digital X-rays for reduced radiation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Comfortable sedation options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>5-year warranty on major work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Ready to start your journey to a healthier smile?
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Your Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;