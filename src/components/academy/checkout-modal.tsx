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
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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
    // Save to local storage for records
    localStorage.setItem('vheevid_academy_success', JSON.stringify({
      courseId: course.id,
      title: course.title,
      whatsappLink: course.whatsappLink,
      firstName: firstName,
      email: email
    }));
    
    // Switch modal to success state instead of redirecting
    setPaymentSuccess(true);
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
        {paymentSuccess ? (
          <div className="p-8 sm:p-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-[24px] sm:text-[28px] font-bold text-[#111111] tracking-tight mb-3">
              Payment Successful!
            </h3>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
              Welcome to the <strong className="text-gray-800">{course.title}</strong> course, {firstName}. Click the button below to join the exclusive WhatsApp class group right away.
            </p>
            <a
              href={course.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-14 rounded-xl bg-green-500 text-white font-semibold text-[16px] hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 active:scale-[0.98]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Join WhatsApp Class
            </a>
            <button onClick={onClose} className="mt-5 text-[14px] text-gray-400 font-medium hover:text-gray-600 transition-colors">
              Close window
            </button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </motion.div>
    </div>
  );
}
