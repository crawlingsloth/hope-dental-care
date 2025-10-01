import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Card from './shared/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Emily Rodriguez',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'Dr. Johnson and her team are absolutely amazing! I used to be terrified of going to the dentist, but they made me feel so comfortable and relaxed. The office is beautiful and modern, and the staff genuinely cares about your comfort.',
      treatment: 'Complete Smile Makeover',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b401?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'David Kim',
      location: 'Berkeley, CA',
      rating: 5,
      text: 'I had dental implants done here and the results exceeded my expectations. The process was smooth, and Dr. Chen explained everything in detail. My new teeth look and feel completely natural!',
      treatment: 'Dental Implants',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Sarah Thompson',
      location: 'Oakland, CA',
      rating: 5,
      text: 'As a busy mom, I appreciate how accommodating Bright Smile is with scheduling. They work with my crazy schedule and always provide excellent care for both me and my kids. Jessica, the hygienist, is wonderful with children!',
      treatment: 'Family Dental Care',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Johnson',
      location: 'San Rafael, CA',
      rating: 5,
      text: 'I had a dental emergency on a Saturday and they squeezed me in for an emergency appointment. Dr. Johnson took care of my pain immediately and followed up personally to make sure I was healing well. Outstanding service!',
      treatment: 'Emergency Root Canal',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Lisa Chen',
      location: 'Mill Valley, CA',
      rating: 5,
      text: 'The teeth whitening results were incredible! My teeth are several shades whiter and the process was completely painless. The staff explained all my options and helped me choose the best treatment for my lifestyle.',
      treatment: 'Professional Whitening',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Robert Martinez',
      location: 'Sausalito, CA',
      rating: 5,
      text: 'I\'ve been coming here for 5 years and the quality of care is consistently excellent. They use the latest technology and always explain what they\'re doing. Amanda at the front desk is so helpful with insurance questions too.',
      treatment: 'Ongoing Dental Care',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
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
            Patient Reviews
          </h2>
          <h3 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Patients Say About Us
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real patients have to say about 
            their experience at Bright Smile Dental Practice.
          </p>
        </motion.div>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center space-x-8 mb-16"
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <div className="text-3xl font-bold text-primary-500">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="w-px h-16 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500">500+</div>
            <div className="text-sm text-gray-600">5-Star Reviews</div>
          </div>
          <div className="w-px h-16 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500">98%</div>
            <div className="text-sm text-gray-600">Would Recommend</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full relative">
                <div className="absolute top-4 right-4 text-primary-200">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Treatment */}
                  <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                    {testimonial.treatment}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-600 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Review Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Read more reviews on our profiles:
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-lg font-semibold">Google Reviews</div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="text-lg font-semibold">Yelp</div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="text-lg font-semibold">Healthgrades</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-none text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Experience the Bright Smile Difference?
            </h4>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied patients who trust us with their dental care.
            </p>
            <motion.button
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Your Visit Today
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;