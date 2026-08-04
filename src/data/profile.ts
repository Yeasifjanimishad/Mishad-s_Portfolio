import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Md. Yeasif Jani Mishad',
  title: 'Software Engineering Student & Web Programmer',
  location: 'Bogura, Rajshahi, Bangladesh',
  email: 'mdyeasifjanimishad@gmail.com',
  phone: '(+880) 1767655821',
  whatsApp: 'https://wa.me/+8801767655821',
  tagline: 'Dedicated Software Engineering student passionate about clean code, web programming, and creative technical leadership.',
  about:
    'Dedicated student of software engineering with strong fundamentals in programming, problem-solving, and web development. Known for effective communication, adaptability, and leadership, striving to deliver high-quality engineering products with continuous improvement.',
  education: [
    {
      id: 'edu-1',
      period: '20 Jun 2024 – Present',
      degree: 'B.Sc. in Software Engineering',
      institution: 'Daffodil International University',
      location: 'Dhaka, Bangladesh',
      url: 'https://daffodilvarsity.edu.bd/',
    },
    {
      id: 'edu-2',
      period: '20 Feb 2022',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Bogura Government College',
      location: 'Bogura, Bangladesh',
      url: 'https://bgcbogura.edu.bd/',
      grade: 'GPA 5.00',
      fieldOfStudy: 'Education Science',
    },
    {
      id: 'edu-3',
      period: '24 Dec 2020',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'BIAM Model School & College',
      location: 'Bogura, Bangladesh',
      url: 'https://biammodelbogura.com/',
      grade: 'GPA 5.00',
      fieldOfStudy: 'Education Science',
    },
    {
      id: 'edu-4',
      period: '30 Dec 2018',
      degree: 'Junior School Certificate (JSC)',
      institution: 'BIAM Model School & College',
      location: 'Bogura, Bangladesh',
      url: 'https://biammodelbogura.com/',
      grade: 'GPA 5.00',
    },
  ],
  experience: [
    {
      id: 'exp-1',
      period: '11 Sep 2024 – Present',
      role: 'Web Programmer',
      company: 'Fiverr',
      location: 'Bogura, Bangladesh',
      highlights: [
        'Developing and delivering responsive web applications for global clients.',
        'Implementing clean front-end UI components and customized web solutions.',
        'Managing client relationship and end-to-end web delivery.',
      ],
    },
    {
      id: 'exp-2',
      period: '2026 – Present',
      role: 'Intern Software Engineer',
      company: 'People Management',
      location: 'Dhaka, Bangladesh',
      highlights: [
        'Currently pursuing a Software Engineering Internship.',
        'Gaining hands-on industry experience and practical skills.',
      ],
    },
    {
      id: 'exp-3',
      period: '2022',
      role: 'Sports Program Coordinator',
      company: 'District Youth Athletics',
      location: 'Bogura, Bangladesh',
      highlights: [
        'Coordinated sports events, schedules, and team logistics.',
        'Led team activities and fostered youth athletic sportsmanship.',
      ],
    },
  ],
  skills: [
    {
      category: 'Programming & Web',
      skills: ['C / C++', 'HTML5 / CSS3', 'JavaScript / TypeScript', 'Web Programming'],
    },
    {
      category: 'Design & Creative',
      skills: ['Adobe Photoshop', 'Adobe InDesign', 'Adobe Dreamweaver', 'Content Writing'],
    },
    {
      category: 'Soft Skills & Leadership',
      skills: [
        'Leadership & Team Management',
        'Public Speaking',
        'Critical Thinking',
        'Time Management',
        'Customer Relationship Management',
      ],
    },
  ],
  awards: [
    {
      id: 'award-1',
      date: '10 Jul 2023',
      title: 'HSC Felicitation Award',
      institution: 'Bondi Patshala',
    },
    {
      id: 'award-2',
      date: '17 May 2024',
      title: 'Best Bowler Award',
      institution: 'Sibbati Cricket Club',
    },
    {
      id: 'award-3',
      date: '19 May 2021',
      title: 'Champion Award',
      institution: 'Sphorron Academy',
    },
    {
      id: 'award-4',
      date: '16 Dec 2018',
      title: '1st Prize in Parade (Team)',
      institution: 'Bogura Zila Administration',
    },
  ],
  recommendation: {
    name: 'Afsana Jerin Shayery',
    title: 'Lecturer, Department of English',
    institution: 'Daffodil International University',
    quote:
      'A dedicated and motivated Software Engineering student with a strong willingness to learn, adapt, and contribute effectively in professional environments.',
    phone: '(+880) 1736373222',
    email: 'afsana.taf@diu.edu.bd',
  },
  languages: [
    { language: 'Bengali', level: 'Native / Mother tongue' },
    { language: 'English', level: 'Proficient (Listening C2, Reading C2, Spoken C2)' },
    { language: 'Hindi', level: 'Independent (Listening B2, Spoken B1)' },
  ],
  hobbies: ['Cricket & Football', 'Gardening', 'Gaming', 'Fishing'],
};
