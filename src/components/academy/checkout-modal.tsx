'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePaystackPayment } from 'react-paystack';
import { useRouter } from 'next/navigation';

interface Course {
  id: string;
  title: string;
  price: number;
  whatsappLink: string;
}

interface CheckoutModalProps {
  course: Course;
  onClose: () => void;
}

export function CheckoutModal({ course, onClose }: CheckoutModalProps) {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: course.price * 100, // Paystack expects amount in kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
    metadata: {
      custom_fields: [
        {
          display_name: "First Name",
          variable_name: "first_name",
          value: firstName
        },
        {
          display_name: "Course",
          variable_name: "course_id",
          value: course.id
        }
      ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    // Save to local storage so success page knows which course they bought
    localStorage.setItem('vheevid_academy_success', JSON.stringify({
      courseId: course.id,
      title: course.title,
      whatsappLink: course.whatsappLink,
      firstName: firstName,
      email: email
    }));
    
    // Redirect to success page
    router.push('/academy/success');
  };

  const onClosePayment = () => {
    setError('Payment was not completed. Please try again when you are ready.');
    setIsSubmitting(false);
  };

  const handleProceed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) {
      setError('Please fill in all fields.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      // Trigger Lead Capture Nurture Sequence API Call (Step 3b)
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, courseId: course.id })
      });
      
      // Proceed to Paystack Checkout
      initializePayment({ onSuccess, onClose: onClosePayment });
    } catch (err) {
      console.error("Lead capture failed", err);
      // We still proceed to payment even if lead capture API fails for some reason
      initializePayment({ onSuccess, onClose: onClosePayment });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md bg-white rounded-[24px] shadow-2xl overflow-hidden z-10"
      >
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-[#111111]">Enrollment Details</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleProceed} className="p-6">
          <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-[13px] text-gray-500 font-medium mb-1">Selected Course</p>
            <p className="text-[16px] font-bold text-[#111111]">{course.title}</p>
            <p className="text-[15px] font-semibold text-[#D62500] mt-2">₦{course.price.toLocaleString()}</p>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1.5">First Name</label>
              <input 
                type="text" 
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D62500]/20 focus:border-[#D62500] transition-all"
                placeholder="John"
              />
            </div>
            
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1.5">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D62500]/20 focus:border-[#D62500] transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-100 text-[13px] text-red-600 font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-xl bg-[#D62500] text-white font-semibold text-[15px] hover:bg-[#b81f00] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Proceed to Payment'
            )}
          </button>
          <p className="text-center text-[12px] text-gray-400 mt-4">Secured by Paystack</p>
        </form>
      </motion.div>
    </div>
  );
}
