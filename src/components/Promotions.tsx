import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Calendar, Clock, Phone } from 'lucide-react';
import Card from './shared/Card';
import Button from './shared/Button';

const Promotions: React.FC = () => {
  const promotions = [
    {
      icon: Tag,
      title: 'Opening Promotion',
      service: 'Teeth Cleaning & Scaling',
      price: 'MVR 600',
      tagline: 'Get Your Teeth Healthy and Shining!',
      featured: true,
      validity: ''
    },
    {
      icon: Calendar,
      title: 'Braces Special',
      service: 'Dental Braces',
      price: 'Starting from MVR 3,500',
      tagline: 'Originally MVR 4,000, now MVR 3,500',
      featured: false,
      validity: ''
    },
    {
      icon: Clock,
      title: 'Scaling & Braces Promotion',
      service: 'Combo Package',
      price: 'Special Discounted Rates',
      tagline: 'Teeth cleaning with free checkup and consultation + 10% discount on all braces types',
      featured: false,
      validity: 'Valid until July 15, 2025',
      details: [
        'Metal Braces: MVR 3,600 (was MVR 4,000)',
        'Ceramic Braces: MVR 5,400 (was MVR 6,000)',
        'Self-ligating Braces: MVR 7,200 (was MVR 8,000)'
      ]
    },
    {
      icon: Phone,
      title: 'Friday Hours Announcement 🎉',
      service: 'Extended Hours',
      price: '',
      tagline: 'We\'re now open on Fridays from 4:00 PM – 10:00 PM!',
      featured: false,
      validity: '',
      details: [
        'Book your appointments for Friday evenings',
        'Call us: 3001516 / 7951515',
        'Convenient timing after work hours'
      ],
      isFridayHours: true
    }
  ];

  return (
    <section id="promotions" className="py-20 bg-gray-50">
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
            Special Offers
          </h2>
          <h3 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            Current Promotions
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Take advantage of our special offers and affordable dental care packages.
          </p>
        </motion.div>

        {/* Promotions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {promotions.map((promotion, index) => (
            <motion.div
              key={promotion.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={`p-8 h-full relative flex flex-col ${
                  promotion.featured ? 'border-2 border-primary-200 shadow-lg bg-gradient-to-br from-primary-50 to-white' : ''
                }`}
              >
                {promotion.featured && (
                  <div className="absolute -top-3 left-6 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Featured Offer
                  </div>
                )}
                
                <div className="flex-1 space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <promotion.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {promotion.title}
                      </h4>
                      <div className="text-sm text-gray-600 mt-1">
                        {promotion.service}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  {promotion.price && (
                    <div className="text-2xl font-bold text-primary-500">
                      {promotion.price}
                    </div>
                  )}

                  {/* Tagline */}
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {promotion.tagline}
                  </p>

                  {/* Details */}
                  {promotion.details && (
                    <div className="space-y-2">
                      {promotion.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Validity */}
                  {promotion.validity && (
                    <div className="text-sm text-gray-500 italic">
                      {promotion.validity}
                    </div>
                  )}
                </div>

                {/* CTA - Always at bottom */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  {promotion.isFridayHours ? (
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center space-x-2"
                      href="tel:+9603001516"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Us Now</span>
                    </Button>
                  ) : (
                    <Button
                      variant={promotion.featured ? 'primary' : 'outline'}
                      className="w-full flex items-center justify-center space-x-2"
                      onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <span>Book Appointment</span>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-white border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Terms & Conditions
            </h4>
            <div className="text-gray-600 space-y-2 max-w-3xl mx-auto">
              <p>• Promotions cannot be combined with other offers</p>
              <p>• Prices are subject to change without prior notice</p>
              <p>• Appointment booking is subject to availability</p>
              <p>• Please mention the promotion when booking your appointment</p>
            </div>
            <div className="mt-6">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us for Details
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Promotions;