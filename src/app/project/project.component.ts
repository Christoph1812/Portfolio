import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: any;

  constructor(private dataService: ProjectService) { }

  ngOnInit(): void {
    this.dataService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
