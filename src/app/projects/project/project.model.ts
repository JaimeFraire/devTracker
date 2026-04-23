import { Technology } from '../../technologies/technology/technology.model';

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  technologies: Technology[];
  url: string;
  status: string;
  time: number;
}

export interface NewProject {
  title: string;
  date: string;
  description: string;
  technologies: Technology[];
  status: string;
  url: string;
}
