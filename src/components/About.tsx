import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Award, Users } from 'lucide-react';
import Card from './shared/Card';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment and digital imaging for precise, comfortable treatments.'
    },
    {
      icon: Heart,
      title: 'Gentle Care',
      description: 'Patient comfort is our priority with pain-free procedures and a calming environment.'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Board-certified dentists and experienced hygienists committed to excellence.'
    },
    {
      icon: Users,
      title: 'Family Focused',
      description: 'Comprehensive care for patients of all ages, from children to seniors.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wide">
                About Hope Dental Care
              </h2>
              <h3 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
                Your Trusted Dental Care Provider in the Maldives
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Hope Dental Care, where we combine expertise, compassion, and advanced technology to provide exceptional dental services in the heart of Male, Maldives. Our dedicated team of dental professionals is committed to delivering personalized care that meets your unique needs and exceeds your expectations.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that visiting the dentist can be a stressful experience for many. That's why we've created a warm, welcoming environment where your comfort is our top priority. From routine check-ups to complex procedures, we take the time to listen to your concerns and explain every step of your treatment journey.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At Hope Dental Care, we believe that everyone deserves a healthy, beautiful smile. Our mission is to make quality dental care accessible to all residents of the Maldives, using the latest techniques and highest quality materials to ensure lasting results for our patients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-8"
            >
              <div>
                <div className="text-3xl font-bold text-primary-500">15+</div>
                <div className="text-sm text-gray-600">Years Serving<br/>the Community</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">5K+</div>
                <div className="text-sm text-gray-600">Satisfied<br/>Patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">98%</div>
                <div className="text-sm text-gray-600">Patient<br/>Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-none">
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 italic">
              "Experience the gentle difference in dental care at Hope Dental Care, where your smile is our passion and your comfort is our promise."
            </blockquote>
            <div className="mt-6">
              <div className="text-primary-500 font-semibold">Hope Dental Care Team</div>
              <div className="text-gray-600">Committed to Excellence in Dental Health</div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;