import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typeScript: boolean = false;

  angular: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Neil Barot - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typeScript) {
      filterTags.push(Tag.Typescript);
    }

    if (this.angular) {
      filterTags.push(Tag.Angular);
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }
}
