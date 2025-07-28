export interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: Category;
  tags: string[];
  client?: string;
  year: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: Experience[];
  contact: {
    email: string;
    phone?: string;
    social: SocialLink[];
  };
  avatarUrl: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}


export interface ContactForm {
  name: string;
  email: string;
  budget?: string;
  projectType: string;
  message: string;
}