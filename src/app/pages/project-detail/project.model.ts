export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  architecture?: string[];
}
