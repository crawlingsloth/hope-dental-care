import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Calendar, 
  Clock, 
  Mail, 
  Phone, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Card from './shared/Card';
import Button from './shared/Button';

interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  isNewPatient: boolean;
  insuranceProvider?: string;
  message?: string;
}

const Appointment: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AppointmentFormData>();

  const services = [
    'Dental Braces Consultation',
    'Teeth Cleaning & Scaling',
    'Dental Crowns & Bridges',
    'Dental Emergency',
    'General Checkup',
    'Other'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Appointment request:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting appointment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Appointment Request Submitted!
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Thank you for choosing Hope Dental Care. We'll contact you within 
                24 hours to confirm your appointment details.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Book Another Appointment
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wide">
            Schedule Appointment
          </h2>
          <h3 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            Book Your Visit Today
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience exceptional dental care? Schedule your appointment and 
            take the first step towards a healthier smile.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Office Hours */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Office Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Thursday</span>
                  <span className="font-medium">9:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Friday</span>
                  <span className="font-medium">4:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="font-medium">9:00 AM - 10:00 PM</span>
                </div>
              </div>
            </Card>

            {/* Contact Methods */}
            <Card className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <div>
                    <div className="font-medium">300-1516</div>
                    <div className="text-sm text-gray-600">Main Office</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-medium">+960 795-1515</div>
                    <div className="text-sm text-gray-600">WhatsApp</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <div>
                    <div className="font-medium">hopedentalcaremv@gmail.com</div>
                    <div className="text-sm text-gray-600">Email</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Emergency Info */}
            <Card className="p-6 border-2 border-red-100 bg-red-50">
              <div className="flex items-center space-x-3 mb-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <h4 className="text-lg font-semibold text-red-900">Dental Emergency?</h4>
              </div>
              <p className="text-red-800 text-sm mb-4">
                If you're experiencing severe dental pain or trauma, call us immediately 
                for assistance.
              </p>
              <Button
                variant="outline"
                size="sm"
                href="tel:+9603001516"
                className="text-red-600 border-red-300 hover:bg-red-100"
              >
                Call Us Now
              </Button>
            </Card>
          </motion.div>

          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Request an Appointment
                </h4>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName', { required: 'First name is required' })}
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName', { required: 'Last name is required' })}
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone', { required: 'Phone number is required' })}
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>

                {/* Preferred Date & Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      {...register('preferredDate', { required: 'Please select a date' })}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      {...register('preferredTime', { required: 'Please select a time' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a time...</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
                    )}
                  </div>
                </div>

                {/* Patient Type */}
                <div>
                  <div className="flex items-center space-x-3">
                    <input
                      {...register('isNewPatient')}
                      type="checkbox"
                      id="newPatient"
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="newPatient" className="text-sm text-gray-700">
                      I am a new patient
                    </label>
                  </div>
                </div>

                {/* Insurance Provider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Provider (Optional)
                  </label>
                  <input
                    {...register('insuranceProvider')}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., Blue Cross, Aetna, Delta Dental"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Any specific concerns or questions?"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      'Request Appointment'
                    )}
                  </Button>
                </div>

                <p className="text-xs text-gray-600 text-center">
                  * Required fields. We'll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;