'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Service data                                                       */
/* ------------------------------------------------------------------ */
const SERVICES = [
  {
    title: 'Book Editing',
    description: 'Polishing your words to create clear, professional, and compelling books.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Product Design (UI/UX)',
    description: 'User friendly and intuitive UI/UX systems that scale with your vision.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-6.836m-1.64 8.64a15.995 15.995 0 00-4.648 4.764l-6.836 3.879" />
      </svg>
    ),
  },
  {
    title: 'Custom Software',
    description: 'Developing tailored software solutions that solve real business problems.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Graphic Design',
    description: 'Crafting visuals that captivate, communicate, and connect.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Vheevid Hub Academy',
    description: 'We equip you with practical skills to thrive in tech and digital space.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Automation',
    description: 'Streamlining processes using technology to improve efficiency.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Brand Identity',
    description: 'Building identities that leave a lasting impression and tell your story.',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Card positions as % of canvas — top-left corner                    */
/*  Canvas = the relative div that wraps everything                    */
/* ------------------------------------------------------------------ */
/*
 * Cards on the VERTICAL line (x=72%) get centered horizontally via translateX(-50%).
 * Card on the HORIZONTAL line (y=46%) gets centered vertically via translateY(-50%).
 * Other cards are positioned by top-left.
 */
const CARD_POS: { left: string; top: string; mobileTop?: string; transform?: string }[] = [
  /* 0 Book Editing       */ { left: '-2%', top: '-2%' },
  /* 1 Product Design     */ { left: '33%', top: '-11%', mobileTop: '-18%' },
  /* 2 Custom Software    */ { left: '62.5%', top: '-10%', transform: 'translateX(-50%)' },   // centered on vertical line
  /* 3 Graphic Design     */ { left: '0%', top: '34%', transform: 'translateY(-50%)' },   // centered on horizontal line
  /* 4 Vheevid Hub Acad.  */ { left: '-2%', top: '72%' },
  /* 5 Automation         */ { left: '33.5%', top: '79%' },
  /* 6 Brand Identity     */ { left: '62.5%', top: '82%', transform: 'translateX(-50%)' },   // centered on vertical line
];

/* Hub center position */
const HUB_LEFT = '72%';
const HUB_TOP = '46%';

export function OurServices() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-28 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] leading-tight tracking-tight mb-3">
            {"Our ".split("").map((char, i) => (
              <motion.span 
                key={`our-serv-${i}`} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.1, delay: i * 0.06 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="relative inline-block whitespace-nowrap font-bold">
              {"Services".split("").map((char, i) => (
                <motion.span 
                  key={`serv-${i}`} 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.1, delay: (4 + i) * 0.06 }}
                >
                  {char}
                </motion.span>
              ))}
              <svg
                className="absolute -bottom-1 left-0 w-full h-[clamp(6px,1vw,10px)]"
                viewBox="0 0 120 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 12 * 0.06 }}
                  d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                  stroke="#D62500"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <motion.p
            variants={fadeUpVariants}
            className="mx-auto max-w-2xl text-[14px] sm:text-[16px] text-gray-500"
          >
            We don&apos;t just teach technology, we build tech + believe in it where we see the industry.
          </motion.p>
        </div>

        {/* ============================================================ */}
        {/*  FLUID HUB LAYOUT                                             */}
        {/* ============================================================ */}
        <div className="w-full flex justify-center overflow-visible pt-6 pb-12">
          <div className="relative w-full max-w-[1000px] h-[320px] sm:h-[480px] lg:h-[700px] mt-10 sm:mt-16 lg:mt-32">
            {/* Inner translate wrapper visually centers the diagram (compensating for text alignment weight) */}
            <div className="absolute inset-0 translate-x-[7%] lg:translate-x-[10%]">

              {/* ---- Hub node: dashed circle + solid dot ---- */}
              <div
                className="absolute z-10"
                style={{ left: HUB_LEFT, top: HUB_TOP, transform: 'translate(-50%, -50%)' }}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-dashed border-[#D62500]/40 bg-white"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#D62500] rounded-full" />
                  </div>
                </motion.div>
              </div>

              {/* ---- Lines: start with vertical + horizontal through hub ---- */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                  <clipPath id="hub-clip">
                    {/* The circle grows from the hub to reveal the dashed lines outwards */}
                    <motion.circle
                      cx="72%" cy="46%"
                      initial={{ r: 0 }}
                      whileInView={{ r: "120%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                    />
                  </clipPath>
                </defs>

                <g clipPath="url(#hub-clip)">
                  {/* Line 1: Vertical line cutting through the circle (top to bottom) */}
                  <line
                    x1="72%" y1="15%"
                    x2="72%" y2="82%"
                    stroke="#D62500"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    opacity="0.3"
                  />
                  {/* Line 2: Horizontal line — goes LEFT to the hub only (stops at node) */}
                  <line
                    x1="20%" y1="46%"
                    x2="72%" y2="46%"
                    stroke="#D62500"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    opacity="0.3"
                  />
                  {/* Line 3: 60-degree line going UP-LEFT from the hub */}
                  <line
                    x1="52%" y1="11.4%"
                    x2="72%" y2="46%"
                    stroke="#D62500"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    opacity="0.3"
                  />
                  {/* Line 4: 60-degree line going DOWN-LEFT from the hub (Mirrors Line 3) */}
                  <line
                    x1="52%" y1="80.6%"
                    x2="72%" y2="46%"
                    stroke="#D62500"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    opacity="0.3"
                  />
                  {/* Line 5: 34-degree line going UP-LEFT (longer) */}
                  <line
                    x1="18%" y1="9.6%"
                    x2="72%" y2="46%"
                    stroke="#D62500"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    opacity="0.3"
                  />
                  {/* Line 6: 34-degree line going DOWN-LEFT (longer, mirrors Line 5) */}
                  <line
                    x1="18%" y1="82.4%"
                    x2="72%" y2="46%"
                    stroke="#D62500"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    opacity="0.3"
                  />
                </g>
              </svg>

              {/* ---- Service cards ---- */}
              {SERVICES.map((service, index) => {
                const pos = CARD_POS[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                    className="absolute z-20 w-[95px] sm:w-[140px] lg:w-[214px] top-(--mobile-top) sm:top-(--desktop-top)"
                    style={{
                      left: pos.left,
                      '--mobile-top': pos.mobileTop || pos.top,
                      '--desktop-top': pos.top,
                      transform: pos.transform
                    } as React.CSSProperties}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Reusable card component                                            */
/* ------------------------------------------------------------------ */
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg lg:rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100/60 hover:shadow-[0_6px_24px_rgb(214,37,0,0.08)] transition-shadow duration-300 group p-1.5 sm:p-2.5 lg:p-[18px_17px]">
      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 rounded-md lg:rounded-lg bg-[#FFF5F3] text-[#D62500] flex items-center justify-center mb-1 lg:mb-2.5 group-hover:scale-110 transition-transform duration-300">
        <div className="scale-[0.6] lg:scale-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-[7.5px] sm:text-[9.5px] lg:text-[12px] font-semibold text-[#111111] mb-0.5 lg:mb-1 leading-tight">{title}</h3>
      <p className="text-[6.5px] sm:text-[8.5px] lg:text-[10.5px] text-gray-500 leading-relaxed mb-1 lg:mb-2 line-clamp-2 lg:line-clamp-none">{description}</p>
      <Link href="/projects" className="inline-flex items-center text-[6.5px] sm:text-[8.5px] lg:text-[10.5px] font-medium text-[#D62500] hover:text-[#b81f00] transition-colors">
        View Projects
        <svg className="ml-0.5 lg:ml-1 w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
