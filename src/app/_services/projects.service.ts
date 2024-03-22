import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  exercise: Project = {
    id: 0,
    name: 'Exercise Form Checker',
    summary: 'Uses computer vision in order to analyze and correct exercise form',
    description: "Implemented a human pose detection model from mediapipe to analyze and rectify user form in real time while performing various compound exercises.\n Also calculated the positions of key landmarks on the user's body and employed custom geometric equations to detect unnatural or potentially stressful joint angles.",
    projectLink: 'https://github.com/Neil-Barot/Exercise-Form-Checker',
    tags: [Tag.Python, Tag.CompVision],
    pictures: ["../../assets/PlaceholderImg.png", "../../assets/PlaceholderImg.png", "../../assets/PlaceholderImg.png"]
  }

  makerspace: Project = {
    id: 1,
    name: 'Makerspace Management Tool',
    summary: 'Scheduling tool that is used to manage 3D printers in a makerspace',
    description: 'Utilized SQL, React, and Node.js to create a management tool for a maker space that allows hundreds of users to schedule appointments and manage records for various machines seamlessly. Also displayed various insights such as highest filament cost and cheapest suppliers, allowing employees to save hundreds of dollars on filament expenses',
    projectLink: '',
    tags: [Tag.React, Tag.SQL, Tag.Nodejs],
    pictures: ["../../assets/PlaceholderImg.png", "../../assets/PlaceholderImg.png", "../../assets/PlaceholderImg.png"]
  }

  networks: Project = {
    id: 2,
    name: 'Application Layer Protocol',
    summary: 'Simulated interactions using a custom application layer protocol',
    description: 'Created a custom application layer protocol that simulated interactions between a Controller, Renderer, and Client across three separate mininet networks using sockets in Python',
    projectLink: 'https://github.com/Neil-Barot/Application-Layer-Protocol',
    tags: [Tag.Python, Tag.Networks],
    pictures: ["../../assets/PlaceholderImg.png", "../../assets/PlaceholderImg.png", "../../assets/PlaceholderImg.png"]
  }

  portfolio: Project = {
    id: 3,
    name: 'Portfolio Website',
    summary: 'A portfolio website used to display the skills of a very promising developer',
    description: 'A portfolio website made using Angular. It is being used to display the skills of a very promising developer.',
    projectLink: 'https://github.com/Neil-Barot/PortfolioWebsite',
    tags: [Tag.Angular, Tag.Typescript, Tag.HTML],
    pictures: ["../../assets/PlaceholderImg.png", "../../assets/PlaceholderImg.png", "../../assets/PlaceholderImg.png"]
  }

  projects: Project[] = [this.exercise, this.makerspace, 
  this.networks, this.portfolio];

  constructor() { } 

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError(`There is no project that matches the id: ${id}`);
    }

    return project;
  }
}
