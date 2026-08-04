export interface TextSegment {
  text: string;
  className?: string;
}

export interface FeatureCardData {
  id: string;
  number: string;
  title: string;
  iconUrl: string;
  items: string[];
  type?: 'video' | 'card';
  videoUrl?: string;
  subtitle?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  url?: string;
  grade?: string;
  fieldOfStudy?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface AwardItem {
  id: string;
  date: string;
  title: string;
  institution: string;
}

export interface RecommendationItem {
  name: string;
  title: string;
  institution: string;
  quote: string;
  phone: string;
  email: string;
}

export interface LanguageSkill {
  language: string;
  level: string;
  details?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  whatsApp: string;
  about: string;
  tagline: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  awards: AwardItem[];
  recommendation: RecommendationItem;
  languages: LanguageSkill[];
  hobbies: string[];
}

