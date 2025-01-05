export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
}