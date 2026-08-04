export interface Recommendation {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatarUrl?: string;
  relationship: string;
  text: string;
  rating: number;
  tags: string[];
}

export const recommendationsData: Recommendation[] = [
  {
    id: 'rec-0',
    name: 'Afsana Jerin Shayery',
    role: 'Lecturer, Department of English',
    organization: 'Daffodil International University',
    relationship: 'Academic Supervisor & Faculty',
    text: 'A dedicated and motivated Software Engineering student with a strong willingness to learn, adapt, and contribute effectively in professional environments.',
    rating: 5,
    tags: ['Academic Recommendation', 'Software Engineering', 'Dedication'],
  },
  {
    id: 'rec-2',
    name: 'Md. Nazmul Islam',
    role: 'Senior Software Engineer & Team Lead',
    organization: 'Tech-Edge Innovations',
    relationship: 'Internship Supervisor',
    text: 'During his software engineering internship, Mishad demonstrated remarkable problem-solving skills and clean coding practices. He picked up full-stack frameworks rapidly and contributed clean, maintainable code to our core product module.',
    rating: 5,
    tags: ['Full-Stack Dev', 'Clean Code', 'Teamwork'],
  },
];
