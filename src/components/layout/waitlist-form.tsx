'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COURSES = ['Product Design (UI/UX)', 'Software/Web Development', 'Brand Identity', 'CRM & Automation', 'Book & Video Editing', 'Other'];

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    otherCourse: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const courseOfInterest = formData.course === 'Other' && formData.otherCourse.trim() !== '' 
      ? `Other (${formData.otherCourse})` 
      : (formData.course || 'Not specified');

    const text = `Hello Vheevid Hub Academy,

I would like to join the waitlist. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Course of Interest: ${courseOfInterest}

Notes:
${formData.notes || 'None'}`;

    const mailtoUrl = `mailto:vheevidhub@gmail.com?subject=${encodeURIComponent("Academy Waitlist: " + formData.name)}&body=${encodeURIComponent(text)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-2xl mx-auto border border-gray-100 relative">
      <h3 className="text-[28px] sm:text-[32px] font-bold text-[#111111] mb-2 tracking-tight">Join the Waitlist</h3>
      <p className="text-gray-500 text-[15px] mb-8">Secure your spot early. We'll reach out to you once enrollment opens.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-transparent border-b border-gray-200 py-2.5 text-[16px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-transparent border-b border-gray-200 py-2.5 text-[16px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">What would you like to learn?</label>
          <div className="relative">
            <select
              required
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className={`w-full bg-transparent border-b border-gray-200 py-2.5 text-[16px] focus:outline-none focus:border-[#D62500] transition-colors appearance-none pr-8 cursor-pointer ${formData.course === '' ? 'text-gray-400' : 'text-[#111111]'}`}
            >
              <option value="" disabled className="text-gray-400">Select an option</option>
              {COURSES.map(course => (
                <option key={course} value={course} className="text-[#111111]">{course}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {formData.course === 'Other' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-2 overflow-hidden"
            >
              <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Please specify</label>
              <input
                type="text"
                required
                placeholder="E.g. Mobile App Development"
                value={formData.otherCourse}
                onChange={(e) => setFormData({ ...formData, otherCourse: e.target.value })}
                className="w-full bg-transparent border-b border-gray-200 py-2.5 text-[16px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">Optional Notes</label>
          <textarea
            placeholder="Any specific goals or expectations?"
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-[15px] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D62500] transition-colors resize-none mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 sm:h-14 mt-4 bg-[#D62500] text-white font-medium text-[16px] rounded-full hover:bg-[#b81f00] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 active:scale-[0.98]"
        >
          Join via Email
        </button>
      </form>
    </div>
  );
}
