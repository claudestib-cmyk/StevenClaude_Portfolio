import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  type LucideIcon,
} from 'lucide-react';

export const PROFILE = {
  fullName: 'Steven Claude B. Jumao-as',
  shortName: 'Steven Jumao-as',
  initials: 'SCJ',
  primaryRole: 'Full-Stack Developer',
  secondaryRole: 'Embedded Systems Developer & Computer Engineer',
  location: 'Bohol, Philippines',
  description:
    'I build responsive digital products, full-stack applications, and embedded systems that connect thoughtful software with practical engineering.',
  education: {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'Bohol Island State University — Main Campus',
    year: 'Graduated 2026',
  },
  email: 'claudesteven.jumaoas@gmail.com',
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/claudestib-cmyk', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/steven-claude-jumao-as-99475a3a7/',
    icon: Linkedin,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1DLcH6hXbq/',
    icon: Facebook,
  },
  { label: 'Email', href: 'mailto:claudesteven.jumaoas@gmail.com', icon: Mail },
];

export const NAV_LINKS = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export type ProjectGroup = 'software' | 'hardware';

export type ProjectActionType =
  | 'live'
  | 'demo'
  | 'source'
  | 'case-study';

export type ProjectAction = {
  label: string;
  href: string;
  type: ProjectActionType;
};

export type ProjectCaseStudy = {
  role: string;
  challenge: string;
  approach: string;
  outcome: string;
  highlights: string[];
};

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  image: string;
  alt: string;
  tags: string[];
  actions?: ProjectAction[];
  caseStudy?: ProjectCaseStudy;
  group: ProjectGroup;
};

export const PROJECTS: Project[] = [
  {
    id: 'webpulse',
    index: '01',
    title: 'WebPulse',
    category: 'Web App / Monitoring',
    year: '2026',
    summary:
     'A role-based website monitoring platform with Viewer, Admin, and Super Admin account levels. It supports monitoring more than 15 websites, performs automated availability checks every 30 seconds, and delivered Gmail outage and recovery alerts within approximately 5–15 seconds during testing.',
    image: 'https://steven-portfolio-alpha.vercel.app/webpulse.png',
    alt: 'WebPulse website monitoring dashboard',
    tags: ['React', 'Monitoring', 'Dashboard'],
    actions: [
      {
        label: 'Live Website',
        href: 'https://web-pulse-6yjl.vercel.app/',
        type: 'live',
      },
    ],
    caseStudy: {
      role: 'Full-Stack Developer',
      challenge:
        'Website owners needed a centralized way to monitor availability and receive fast outage notifications without manually checking each site.',
      approach:
        'Designed, developed, tested, and deployed a role-based monitoring platform with Viewer, Admin, and Super Admin accounts, subscription upgrades, dashboards, incident history, 30-second availability checks, and automated Gmail outage and recovery alerts.',
      outcome:
        'Admin and Super Admin accounts can monitor more than 15 websites, while outage and recovery notifications were delivered within approximately 5–15 seconds during testing.',
      highlights: [
        'Viewer, Admin, and Super Admin roles',
        'Automated 30-second availability checks',
        'Gmail outage and recovery alerts',
        'Incident history and monitoring dashboards',
      ],
    },
    group: 'software',
  },
  {
    id: 'casa-mia',
    index: '02',
    title: 'Casa Mia',
    category: 'Construction / Property Website',
    year: '2026',
    summary:
      'A responsive corporate website for Casa Mia Construction and Property Development Consultancy Services. It organizes the company profile, services, completed projects, careers, enquiry forms, and contact information into a professional platform for local and international clients.',
    image: '/images/casa-mia.png',
    alt: 'Casa Mia construction and property consultancy website',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Business Website'],
    actions: [
      {
        label: 'Live Website',
        href: 'https://casa-mia-mock.vercel.app/',
        type: 'live',
      },
    ],
    caseStudy: {
      role: 'Website Designer & Developer',
      challenge:
        'The construction and property consultancy needed one professional platform for its company profile, services, projects, career opportunities, enquiries, and client contact points.',
      approach:
        'Organized the company’s information into a responsive corporate website with structured service content, project presentation, careers, enquiry forms, request-for-quote access, and contact details.',
      outcome:
        'Consolidated the company’s client-facing information and enquiry pathways into a single professional website for local and international audiences.',
      highlights: [
        'Corporate information architecture',
        'Enquiry and quotation pathways',
        'Responsive client-facing design',
      ],
    },
    group: 'software',
  },
  {
    id: 'the-hamlet-f',
    index: '03',
    title: 'The Hamlet',
    category: 'Hospitality / Business Website',
    year: '2026',
    summary:
      'A responsive hospitality website designed to introduce The Hamlet’s brand, spaces, food, drinks, art, and community experience. The interface uses strong visual storytelling and mobile-friendly layouts to help visitors explore the venue and its offerings.',
    image: '/images/the-hamlet-f.png',
    alt: 'The Hamlet responsive hospitality website',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    actions: [
      {
        label: 'Live Website',
        href: 'https://the-hamlet-f.vercel.app/',
        type: 'live',
      },
    ],
    caseStudy: {
      role: 'Web Designer & Frontend Developer',
      challenge:
        'The venue needed a website that could communicate more than a menu by presenting its spaces, food, drinks, art, and community atmosphere in one clear experience.',
      approach:
        'Designed and developed a responsive website with visual storytelling, structured content sections, and mobile-friendly navigation that lets visitors quickly understand the venue and explore its offerings.',
      outcome:
        'Created a polished digital presence that gives potential visitors a clear introduction to The Hamlet before they visit.',
      highlights: [
        'Responsive hospitality website',
        'Visual storytelling and content structure',
        'Consistent desktop and mobile experience',
      ],
    },
    group: 'software',
  },
  {
    id: 'craze-cafe',
    index: '04',
    title: 'Craze Cafe',
    category: 'Cafe / Business Website',
    year: '2026',
    summary:
      'A modern and responsive cafe website that presents Craze Cafe’s brand and offerings through an engaging digital experience. The site was designed for clear navigation, consistent visual identity, and smooth browsing across desktop and mobile devices.',
    image: '/images/craze-cafe.png',
    alt: 'Craze Cafe responsive business website',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    actions: [
      {
        label: 'Live Website',
        href: 'https://craze-cafe.vercel.app/',
        type: 'live',
      },
    ],
    caseStudy: {
      role: 'Web Designer & Frontend Developer',
      challenge:
        'Craze Cafe needed a modern online presence that could present its identity and offerings clearly while remaining easy to browse on mobile devices.',
      approach:
        'Built a responsive cafe website with a consistent visual direction, clear navigation, and layouts optimized for both desktop and mobile screens.',
      outcome:
        'Delivered a cohesive digital presentation that makes the cafe easier to discover and understand across different devices.',
      highlights: [
        'Responsive business website',
        'Brand-focused interface design',
        'Mobile-friendly navigation',
      ],
    },
    group: 'software',
  },
  {
    id: 'talkglove',
    index: '05',
    title: 'TalkGlove',
    category: 'Wearable / Assistive Tech',
    year: '2026',
    summary:
       'A wearable assistive-technology prototype that converts recognized hand gestures into spoken output. Flex-sensor readings are processed through a trained gesture-classification system and translated into speech to support more accessible communication.',
    image:
      '/images/gloves.jpg',
    alt: 'Robotic hand reaching toward a light on a white background',
    tags: ['Flex Sensors', 'Gesture ML', 'Text-to-Speech', 'Wearable'],
    actions: [
      {
        label: 'Watch Demo',
        href: 'https://drive.google.com/file/d/1xj7HYnum82hgzXYDXBLlqb6ykWEr7ZFM/view',
        type: 'demo',
      },
    ],
    caseStudy: {
      role: 'Wearable Prototype Developer',
      challenge:
        'People who communicate through hand gestures may face barriers when interacting with individuals who do not understand the same gesture system.',
      approach:
        'Combined flex-sensor readings, gesture classification, and text-to-speech output in a wearable prototype that converts recognized hand gestures into spoken words.',
      outcome:
        'Demonstrated an end-to-end gesture-to-speech process in a wearable assistive-technology prototype.',
      highlights: [
        'Flex-sensor gesture capture',
        'Gesture classification workflow',
        'Spoken output through text-to-speech',
      ],
    },
    group: 'hardware',
  },
  {
    id: 'solar-tracker',
    index: '06',
    title: 'Smart Sun Tracking Solar Panel',
    category: 'Embedded / IoT',
    year: '2025',
    summary:
       'A dual-axis solar tracking prototype powered by a Raspberry Pi 5 that uses light-dependent sensors and servo-controlled movement to follow the strongest light source. The system demonstrates sensor-based automation designed to improve solar-panel alignment compared with a fixed position.',
    image:
      '/images/solar.jpg',
    alt: 'Row of photovoltaic solar panels mounted on a green field',
    tags: ['Raspberry Pi 5', 'Python', 'LDR Sensors', 'Servo Control'],
    caseStudy: {
      role: 'Embedded Systems Developer',
      challenge:
        'A fixed solar panel cannot automatically adjust its orientation as the strongest light direction changes throughout the day.',
      approach:
        'Developed a dual-axis prototype using a Raspberry Pi 5, Python, light-dependent sensors, and servo-controlled movement to detect light differences and adjust panel orientation.',
      outcome:
        'Demonstrated an automated sensor-to-actuator workflow that continuously aligns the prototype toward the strongest detected light source.',
      highlights: [
        'Raspberry Pi 5 control system',
        'Dual-axis servo movement',
        'Real-time LDR sensor input',
      ],
    },
    group: 'hardware',
  },
  {
    id: 'laundicast',
    index: '07',
    title: 'LaundriCast',
    category: 'Weather / Productivity App',
    year: '2024',
    summary:
      'A weather-based laundry planning application that uses real-time forecast data to help users choose suitable times for washing and drying clothes. It provides weather recommendations, reminders, and task tracking to make laundry scheduling more convenient and efficient.',
    image:
      '/images/laundricast.jpg',
    alt: 'Row of modern washing machines in a launderette',
    tags: ['React', 'Weather API', 'Task Planning', 'Responsive UI'],
    actions: [
      {
        label: 'Watch Demo',
        href: 'https://drive.google.com/file/d/1Y_5kcCXh3Lx7QxHzWec_I-tvE4kMiCO0/view',
        type: 'demo',
      },
    ],
    group: 'software',
  },
  {
    id: 'component-detector',
    index: '08',
    title: 'Electronic Component Detector',
    category: 'Computer Vision',
    year: '2023',
    summary:
      'A computer-vision application that analyzes camera images to identify and classify common electronic components. The system helps users recognize parts more efficiently by presenting the detected component together with relevant specifications and reference information.',
    image:
      'https://images.pexels.com/photos/6477207/pexels-photo-6477207.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Macro shot of electronic components on a circuit board',
    tags: ['OpenCV', 'Object Detection', 'Python', 'Edge'],

    group: 'software',
  },
  {
    id: 'ark3',
    index: '09',
    title: 'ARK3 Robotic Arm',
    category: 'Robotics / Automation',
    year: '—',
    summary:
     'A robotic-arm prototype developed for controlled and repeatable object manipulation. The project demonstrates fundamental concepts in robotics, actuator control, mechanical movement, and automation for educational, assistive, and hazardous-task applications.',
    image: 'https://steven-portfolio-alpha.vercel.app/ark3.png',
    alt: 'ARK3 robotic arm prototype',
    tags: ['Robotics', 'Automation', 'Prototype'],
    actions: [
      {
        label: 'Watch Demo',
        href: 'https://www.facebook.com/share/v/1FGxNqcw7D/',
        type: 'demo',
      },
    ],
    group: 'hardware',
  },
  {
    id: 'human-da',
    index: '10',
    title: 'Human Da',
    category: 'Mobile / Emergency Response',
    year: '—',
    summary:
      'An emergency assistance and disaster-preparedness application that brings urgent-service information, emergency checklists, donation tracking, and disaster guides into one accessible platform. It was designed to help users quickly find practical information before and during emergency situations.',
    image: 'https://steven-portfolio-alpha.vercel.app/humanda.jpg',
    alt: 'Human Da emergency assistance and disaster preparedness application',
    tags: ['Emergency App', 'Disaster Response', 'Donations'],
    actions: [
      {
        label: 'Watch Demo',
        href: 'https://drive.google.com/file/d/1KSstapiL4L2-P0COBcqqJoUh6T0jFhc_/view?usp=sharing',
        type: 'demo',
      },
    ],
    group: 'software',
  },
];

export type ExpertiseArea = {
  title: string;
  description: string;
  points: string[];
};

export const EXPERTISE: ExpertiseArea[] = [
  {
    title: 'Full-Stack Development',
    description:
      'End-to-end web products — from database design and APIs to responsive, accessible interfaces.',
    points: [
      'React, TypeScript & modern frontend tooling',
      'Node/Supabase backends and REST APIs',
      'Auth, realtime data and role-based access',
    ],
  },
  {
    title: 'Embedded Systems',
    description:
      'Hardware that talks to software — sensors, actuators and microcontroller firmware.',
    points: [
      'Arduino, ESP32 and STM32 firmware',
      'Sensor integration and servo/motor control',
      'Low-power and real-time logic',
    ],
  },
  {
    title: 'Computer Engineering',
    description:
      'A grounding in the systems beneath it all — circuits, signals and architecture.',
    points: [
      'Analog & digital circuit analysis',
      'Microprocessor architecture',
      'Hardware-software co-design',
    ],
  },
];

export type ToolkitItem = {
  name: string;
  group: string;
  /** devicons or simpleicons SVG URL */
  logo?: string;
};

export const TOOLKIT: ToolkitItem[] = [
  // Languages
  {
    name: 'TypeScript',
    group: 'Languages',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    group: 'Languages',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Python',
    group: 'Languages',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'C / Embedded C',
    group: 'Languages',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    name: 'SQL',
    group: 'Languages',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  // Frontend
  {
    name: 'React',
    group: 'Frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Tailwind CSS',
    group: 'Frontend',
    logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  {
    name: 'Vite',
    group: 'Frontend',
    logo: 'https://cdn.simpleicons.org/vite/646CFF',
  },
  // Backend
  {
    name: 'Node.js',
    group: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Supabase',
    group: 'Backend',
    logo: 'https://cdn.simpleicons.org/supabase/3ECF8E',
  },
  {
    name: 'PostgreSQL',
    group: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  // Embedded
  {
    name: 'Arduino',
    group: 'Embedded',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
  },
  {
    name: 'ESP32',
    group: 'Embedded',
    logo: 'https://cdn.simpleicons.org/espressif/E7352C',
  },
  {
    name: 'STM32',
    group: 'Embedded',
    logo: 'https://cdn.simpleicons.org/stmicroelectronics/03234B',
  },
  // Tooling
  {
    name: 'OpenCV',
    group: 'Tooling',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  },
  {
    name: 'Git',
    group: 'Tooling',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];

export type JourneyStep = {
  year: string;
  title: string;
  detail: string;
};

export const JOURNEY: JourneyStep[] = [
  {
    year: '2021',
    title: 'Started Computer Engineering',
    detail:
      'Entered Bohol Island State University and built foundational knowledge in circuits, programming and digital systems.',
  },
  {
    year: '2023',
    title: 'First embedded builds',
    detail:
      'Shipped the Electronic Component Detector and began combining computer vision with microcontroller hardware.',
  },
  {
    year: '2024',
    title: 'Weather-based application development',
    detail:
      'Developed LaundriCast, a weather-based productivity application for planning washing and drying schedules.',
  },
  {
    year: '2025',
    title: 'Sun-tracking & smart energy',
    detail:
      'Developed the Smart Sun Tracking Solar Panel, focusing on efficient servo control and sensor-driven automation.',
  },
  {
    year: '2026',
    title: 'Research, graduation & collaboration',
    detail:
      'Developed TalkGlove as a research project, completed the Computer Engineering degree, and continued building full-stack and embedded systems projects.',
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Clarify the problem, the users and the constraints before writing a single line — hardware or software.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Sketch the system: data models, component layout, and the interface that ties the physical to the digital.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Iterate in small, working slices — firmware on the bench, features on the screen — each one testable.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'Polish performance, accessibility and edge cases until the result feels deliberate and reliable.',
  },
];