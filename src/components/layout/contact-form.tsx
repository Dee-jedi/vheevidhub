'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const PROJECT_TYPES = ['Product Design', 'Engineering', 'Brand Identity', 'CRM & Growth', 'Other'];
const BUDGETS = ['< ₦1M', '₦1M - ₦5M', '₦5M - ₦15M', '₦15M+'];
const TIMELINES = ['< 1 Month', '1 - 3 Months', '3 - 6 Months', '6+ Months'];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello Veevid Hub,

I'd like to discuss a potential project. Here are my details:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType || 'Not specified'}
*Budget:* ${formData.budget || 'Not specified'}
*Timeline:* ${formData.timeline || 'Not specified'}

*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/2348066966442?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full min-h-svh bg-white overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Abstract Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#D62500]/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#D62500]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 w-full">

        {/* Centered Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[13px] font-medium text-gray-500 uppercase tracking-widest">
                Direct to WhatsApp
              </span>
            </div>

            <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-bold text-[#111111] leading-[1.05] tracking-tight mb-6">
              Start a <span className="text-[#D62500] italic">project.</span>
            </h1>

            <p className="text-[18px] sm:text-[20px] text-gray-500 leading-relaxed max-w-xl mx-auto">
              Skip the long email chains. Fill out the details below and we'll connect instantly on WhatsApp to discuss your vision.
            </p>
          </motion.div>
        </div>

        {/* Form Container */}
        <div className="w-full">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 border border-gray-100 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col gap-8 sm:gap-10">

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[14px] font-bold text-gray-500 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-[18px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[14px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-[18px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors"
                  />
                </div>
              </div>

              {/* Project Type Chips */}
              <div className="flex flex-col gap-4">
                <label className="text-[14px] font-bold text-gray-500 uppercase tracking-widest">I'm interested in...</label>
                <div className="flex flex-wrap gap-3">
                  {PROJECT_TYPES.map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-5 py-3 rounded-full text-[14px] font-medium transition-all duration-300 border ${formData.projectType === type
                        ? 'bg-[#D62500] text-white border-[#D62500]'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Chips */}
              <div className="flex flex-col gap-4">
                <label className="text-[14px] font-bold text-gray-500 uppercase tracking-widest">Estimated Budget</label>
                <div className="flex flex-wrap gap-3">
                  {BUDGETS.map(budget => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget })}
                      className={`px-5 py-3 rounded-full text-[14px] font-medium transition-all duration-300 border ${formData.budget === budget
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                        }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Chips */}
              <div className="flex flex-col gap-4">
                <label className="text-[14px] font-bold text-gray-500 uppercase tracking-widest">Timeline</label>
                <div className="flex flex-wrap gap-3">
                  {TIMELINES.map(timeline => (
                    <button
                      key={timeline}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline })}
                      className={`px-5 py-3 rounded-full text-[14px] font-medium transition-all duration-300 border ${formData.timeline === timeline
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                        }`}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Box */}
              <div className="flex flex-col gap-3">
                <label className="text-[14px] font-bold text-gray-500 uppercase tracking-widest">Project Details</label>
                <textarea
                  required
                  placeholder="Tell us a bit about what you want to build..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 text-[16px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full flex items-center justify-center gap-3 bg-[#D62500] text-white py-5 rounded-2xl text-[18px] font-bold overflow-hidden transition-all duration-300 hover:bg-[#b81f00] shadow-[0_8px_20px_rgb(214,37,0,0.15)] hover:shadow-[0_12px_25px_rgb(214,37,0,0.25)]"
              >
                <span className="relative z-10">Send via WhatsApp</span>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </button>
            </div>
          </motion.form>


        </div>

      </div>
    </section>
  );
}
