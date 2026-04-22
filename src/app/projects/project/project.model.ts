export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  url: string;
  status: string;
  time: number;
}

export interface NewProject {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  status: string;
  url: string;
}
