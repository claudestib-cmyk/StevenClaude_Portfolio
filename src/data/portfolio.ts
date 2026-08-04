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
  link?: string;
  group: ProjectGroup;
};

export const PROJECTS: Project[] = [
  {
    id: 'the-hamlet-f',
    index: '01',
    title: 'The Hamlet ',
    category: 'Hospitality / Business Website',
    year: '2026',
    summary:
      'A responsive hospitality website that presents The Hamlet F through a polished, mobile-friendly experience, making its brand, spaces, offerings, and visitor information easy to explore.',
    image: '/images/the-hamlet-f.png',
    alt: 'The Hamlet F responsive hospitality website',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://the-hamlet-f.vercel.app/',
    group: 'software',
  },
  {
    id: 'craze-cafe',
    index: '02',
    title: 'Craze Cafe',
    category: 'Cafe / Business Website',
    year: '2026',
    summary:
      'A responsive cafe website designed to showcase the Craze Cafe brand, offerings, and customer information through a modern and engaging interface across desktop and mobile devices.',
    image: '/images/craze-cafe.png',
    alt: 'Craze Cafe responsive business website',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://craze-cafe.vercel.app/',
    group: 'software',
  },
  {
    id: 'casa-mia',
    index: '03',
    title: 'Casa Mia',
    category: 'Construction / Property Website',
    year: '2026',
    summary:
      'A responsive business website for Casa Mia Construction and Property Development Consultancy Services, presenting its company profile, services, projects, careers, enquiry options, and contact information.',
    image: '/images/casa-mia.png',
    alt: 'Casa Mia construction and property consultancy website',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Business Website'],
    link: 'https://casa-mia-mock.vercel.app/',
    group: 'software',
  },
  {
    id: 'solar-tracker',
    index: '04',
    title: 'Smart Sun Tracking Solar Panel',
    category: 'Embedded / IoT',
    year: '2025',
    summary:
      'A dual-axis solar tracking system that follows the sun throughout the day using light-dependent sensors and a servo-driven mount, improving energy yield over fixed panels.',
    image:
      '/images/solar.jpg',
    alt: 'Row of photovoltaic solar panels mounted on a green field',
    tags: ['Embedded C', 'Servo Control', 'LDR Sensors', 'Arduino'],
    group: 'hardware',
  },
  {
    id: 'talkglove',
    index: '05',
    title: 'TalkGlove',
    category: 'Wearable / Assistive Tech',
    year: '2024',
    summary:
      'A gesture-to-speech glove that translates sign-language gestures into spoken words in real time using flex sensors and a trained gesture classifier.',
    image:
      '/images/gloves.jpg',
    alt: 'Robotic hand reaching toward a light on a white background',
    tags: ['Flex Sensors', 'Gesture ML', 'Text-to-Speech', 'Wearable'],
    link: 'https://drive.google.com/file/d/1xj7HYnum82hgzXYDXBLlqb6ykWEr7ZFM/view',
    group: 'hardware',
  },
  {
    id: 'laundicast',
    index: '06',
    title: 'LaundriCast',
    category: 'Full-Stack / IoT',
    year: '2024',
    summary:
      'A weather-based laundry planning application that uses real-time forecast data to help users choose suitable times for washing and drying clothes. It provides weather recommendations, reminders, and task tracking to make laundry scheduling more convenient and efficient.',
    image:
      '/images/laundricast.jpg',
    alt: 'Row of modern washing machines in a launderette',
    tags: ['React', 'Supabase', 'ESP32', 'Realtime'],
    link: 'https://drive.google.com/file/d/1Y_5kcCXh3Lx7QxHzWec_I-tvE4kMiCO0/view',
    group: 'software',
  },
  {
    id: 'component-detector',
    index: '07',
    title: 'Electronic Component Detector',
    category: 'Computer Vision',
    year: '2023',
    summary:
      'A computer-vision tool that identifies and classifies electronic components on a workbench from a single camera frame, returning specs and part references.',
    image:
      'https://images.pexels.com/photos/6477207/pexels-photo-6477207.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Macro shot of electronic components on a circuit board',
    tags: ['OpenCV', 'Object Detection', 'Python', 'Edge'],

    group: 'software',
  },
  {
    id: 'webpulse',
    index: '08',
    title: 'WebPulse',
    category: 'Web App / Monitoring',
    year: '2026',
    summary:
      'An automated website monitoring platform that tracks uptime, detects downtime, measures website performance, and presents real-time analytics through a centralized dashboard.',
    image: 'https://steven-portfolio-alpha.vercel.app/webpulse.png',
    alt: 'WebPulse website monitoring dashboard',
    tags: ['React', 'Monitoring', 'Dashboard'],
    link: 'https://web-pulse-6yjl.vercel.app/',
    group: 'software',
  },
  {
    id: 'human-da',
    index: '09',
    title: 'Human Da',
    category: 'Mobile / Emergency Response',
    year: '—',
    summary:
      'An emergency assistance and disaster preparedness application that connects users to urgent services, donation tracking, emergency checklists, and disaster guides for safer communities.',
    image: 'https://steven-portfolio-alpha.vercel.app/humanda.jpg',
    alt: 'Human Da emergency assistance and disaster preparedness application',
    tags: ['Emergency App', 'Disaster Response', 'Donations'],
    link:
      'https://drive.google.com/file/d/1KSstapiL4L2-P0COBcqqJoUh6T0jFhc_/view?usp=sharing',
    group: 'software',
  },
  {
    id: 'ark3',
    index: '10',
    title: 'ARK3 Robotic Arm',
    category: 'Robotics / Automation',
    year: '—',
    summary:
      'A robotic arm prototype designed for precise, repeatable, and flexible object manipulation, supporting automation, hazardous-task handling, assistive use, and robotics education.',
    image: 'https://steven-portfolio-alpha.vercel.app/ark3.png',
    alt: 'ARK3 robotic arm prototype',
    tags: ['Robotics', 'Automation', 'Prototype'],
    link: 'https://www.facebook.com/share/v/1FGxNqcw7D/',
    group: 'hardware',
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
    title: 'Hardware meets the web',
    detail:
      'Built TalkGlove and LaundriCast — projects that bridge wearables and IoT sensors with full-stack web dashboards.',
  },
  {
    year: '2025',
    title: 'Sun-tracking & smart energy',
    detail:
      'Developed the Smart Sun Tracking Solar Panel, focusing on efficient servo control and sensor-driven automation.',
  },
  {
    year: '2026',
    title: 'Graduating & open to collaborate',
    detail:
      'Finishing the Computer Engineering degree and looking for full-stack and embedded systems opportunities.',
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