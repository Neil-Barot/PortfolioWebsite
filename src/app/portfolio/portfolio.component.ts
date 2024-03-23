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
  python: boolean = false;
  html: boolean = false;
  css: boolean = false;
  java: boolean = false;
  sql: boolean = false;

  angular: boolean = false;
  react: boolean = false;
  nodejs: boolean = false;
  docker: boolean = false;

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
    if (this.python) {
      filterTags.push(Tag.Python);
    }
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }
    if (this.java) {
      filterTags.push(Tag.Java);
    }
    if (this.sql) {
      filterTags.push(Tag.SQL);
    }

    if (this.angular) {
      filterTags.push(Tag.Angular);
    }
    if (this.react) {
      filterTags.push(Tag.React);
    }
    if (this.nodejs) {
      filterTags.push(Tag.Nodejs);
    }
    if (this.docker) {
      filterTags.push(Tag.Docker); 
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }
}
