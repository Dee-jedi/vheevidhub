'use client';

import {
  AcademyHero,
  WhoThisIsFor,
  WhatsInItForYou,
  CourseOne,
  CourseTwo,
  TestimonialsSection,
  CommunityShowcase,
  WhyVheevidAcademy,
  InvestInCareer,
} from '@/components/academy';

export default function AcademyLanding() {
  return (
    <div className="w-full bg-[#FFF8F5] relative overflow-hidden">
      {/* 1. Hero with Countdown, Headline, Showcase Image & 3-Col Info */}
      <AcademyHero />

      {/* 2. Who This Is For */}
      <WhoThisIsFor />

      {/* 3. What's In It For You */}
      <WhatsInItForYou />

      {/* 4. Course One (Logo & Brand Identity) */}
      <div id="courses">
        <CourseOne />
      </div>

      {/* 5. Course Two (AI Automation) */}
      <CourseTwo />

      {/* 6. Student Testimonials Grid / Mobile Snap-Scroll */}
      <TestimonialsSection />

      {/* 7. Community Event Showcase (Bayero University, Kano) */}
      <CommunityShowcase />

      {/* 8. Why Vheevid Hub Academy & Countdown Banner */}
      <WhyVheevidAcademy />

      {/* 9. Invest In Your Career & Academy Footer */}
      <InvestInCareer />
    </div>
  );
}
