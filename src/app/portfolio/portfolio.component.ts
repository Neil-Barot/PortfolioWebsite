import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: 'Example Project',
    summary: 'Example Project Summary',
    description: '',
    projectLink: '',
    tags: [Tag.Angular, Tag.HTML, Tag.CSS, Tag.Typescript],
    pictures: []
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('Neil Barot - Portfolio');
  }
}
