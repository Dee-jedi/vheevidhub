export interface CurriculumModule {
  week: string;
  title: string;
  items: string[];
}

export interface Bootcamp {
  id: string;
  title: string;
  status: 'active' | 'inactive';
  badgeText: string;
  dateText: string;
  description: string;
  fullDescription?: string;
  buttonText: string;
  price: number;
  usdPrice?: number;
  duration?: string;
  trackName?: string;
  location?: string;
  features: string[];
  whatsappLink: string;
  curriculumDescription?: string;
  curriculum?: CurriculumModule[];
}

export const BOOTCAMPS: Bootcamp[] = [
  {
    id: 'graphic-design',
    title: 'Logo & Brand Identity',
    status: 'active',
    badgeText: 'Live Cohort',
    dateText: 'Starts 10th of August 2026',
    description: 'Learn to design brand identities the way working designers do, from client conversation to final delivery.',
    fullDescription: 'Learn to design brand identities the way working designers do, from client conversation to final delivery. This track is build and ship: by week six, you will have a complete, client ready brand identity built entirely by your own hand.',
    buttonText: 'View Details →',
    price: 30000,
    usdPrice: 30,
    duration: '5 weeks',
    trackName: 'Design Track',
    location: 'Live on Google Meet',
    features: [
      'Live interactive classes',
      'Hands-on portfolio projects',
      'Certificate of completion',
      'Mentorship from experts'
    ],
    whatsappLink: 'https://chat.whatsapp.com/L51ztWo0EjP0FaJJFUFz0s',
    curriculumDescription: 'Your step by step journey from blank page to a complete logo & brand identity you can present to a client with confidence.',
    curriculum: [
      {
        week: 'W1',
        title: 'Introduction to Branding and Design',
        items: [
          'What Branding Really Means',
          'What Graphic Design Involves',
          'Principles of Good Design'
        ]
      },
      {
        week: 'W2',
        title: 'Design Foundations',
        items: [
          'Color Theory',
          'Typography',
          'Shapes and Brand Personality'
        ]
      },
      {
        week: 'W3',
        title: 'Logo Design Process',
        items: [
          'Logo Types',
          'Research Before Designing',
          'Sketching and Digital Design'
        ]
      },
      {
        week: 'W4',
        title: 'Building a Brand Identity',
        items: [
          'Brand Identity System',
          'Mockups and Presentation',
          'Freelancing Basics'
        ]
      },
      {
        week: 'W5',
        title: 'Final Project (Part 1)',
        items: [
          'Brand Strategy Summary',
          'Mood Board and Logo Concepts',
          'Color Palette and Typography'
        ]
      },
      {
        week: 'W6',
        title: 'Final Project (Part 2)',
        items: [
          'Brand Mockups',
          'Presentation Writing',
          'Final Client - Style Presentation'
        ]
      }
    ]
  },
  {
    id: 'automations',
    title: 'AI Automation',
    status: 'active',
    badgeText: 'Live Cohort',
    dateText: 'Starts 10th of August 2026',
    description: 'Learn to build and ship live applications with AI. Two tracks: Builders ship a real MVP in 5 weeks. Founders go further, learning to turn what they build into a...',
    fullDescription: 'Learn to build real automated systems using Make.com and Airtable. This track is build and ship: by week six, you will have designed and deployed a working automation that solves an actual business problem.',
    buttonText: 'View Details →',
    price: 30000,
    usdPrice: 30,
    duration: '6 weeks',
    trackName: 'Design Track',
    location: 'Live on Google Meet',
    features: [
      'Live interactive classes',
      'Real-world automation setups',
      'Certificate of completion',
      'Mentorship from experts'
    ],
    whatsappLink: 'https://chat.whatsapp.com/B7itIXpTDWI9pJVUBjfoxe',
    curriculumDescription: 'Your step by step journey from spreadsheet beginner to building live AI powered automations that connect your apps and run your workflows for you.',
    curriculum: [
      {
        week: 'W1',
        title: 'Airtable Foundations',
        items: [
          'Bases, Fields and Views',
          'Formulas and Basic Functions',
          'Linked Records and Lookups'
        ]
      },
      {
        week: 'W2',
        title: 'Airtable Automations and Data Hygiene',
        items: [
          'Native Airtable Automations',
          'Advanced Formula Patterns',
          'Data Hygiene and Structure'
        ]
      },
      {
        week: 'W3',
        title: 'Make.com Fundamentals',
        items: [
          'Interface and Terminology',
          'Connecting Apps and Mapping Data',
          'Building Your First Scenario'
        ]
      },
      {
        week: 'W4',
        title: 'Flow Control and AI Workflows',
        items: [
          'Routers and Filters',
          'Data Types and Make Functions',
          'AI Workflows and Agents'
        ]
      },
      {
        week: 'W5',
        title: 'Make and Airtable Integration',
        items: [
          'Connecting Make to Airtable',
          'Core Airtable Modules',
          'Two-Way Data Flows'
        ]
      },
      {
        week: 'W6',
        title: 'Capstone and Presentation',
        items: [
          'Capstone Build Clinic',
          'Troubleshooting Support',
          'Final Presentation and Demo'
        ]
      }
    ]
  },
  {
    id: 'product-ui-ux',
    title: 'Product & UI UX Design',
    status: 'inactive',
    badgeText: 'Enrollment Closed',
    dateText: 'New cohort coming soon',
    description: 'Learn how to Design and Build mobile & Web applications. Master product thinking, market intelligence, UI/UX design, and MVP development.',
    buttonText: 'Join Waitlist',
    price: 0,
    features: [],
    whatsappLink: ''
  },
  {
    id: 'web-development',
    title: 'Web Development',
    status: 'inactive',
    badgeText: 'Enrollment Closed',
    dateText: 'New cohort coming soon',
    description: 'A vibe coding bootcamp for UI/UX designers to learn how to build MVPs using AI and AI agents.',
    buttonText: 'Join Waitlist',
    price: 0,
    features: [],
    whatsappLink: ''
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    status: 'inactive',
    badgeText: 'Enrollment Closed',
    dateText: 'New cohort coming soon',
    description: 'A vibe coding bootcamp for UI/UX designers to learn how to build MVPs using AI and AI agents.',
    buttonText: 'Join Waitlist',
    price: 0,
    features: [],
    whatsappLink: ''
  },
  {
    id: 'book-editing',
    title: 'Book Editing',
    status: 'inactive',
    badgeText: 'Enrollment Closed',
    dateText: 'New cohort coming soon',
    description: 'Learn how to Design and Build mobile & Web applications. Master product thinking, market intelligence, UI/UX design, and MVP development.',
    buttonText: 'Join Waitlist',
    price: 0,
    features: [],
    whatsappLink: ''
  }
];
