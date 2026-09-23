export interface Technology {
  id: string;
  name: string;
  iconUrl: string;
}

export interface TechnologyCategory {
  title: string;
  technologies: Technology[];
}
