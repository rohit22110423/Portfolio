import { Component } from '@angular/core';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  hoveredCard: number | null = null;
  educationDetails = [
    {
      level: 'Class 10 (Matriculation)',
      school: 'Vidyagyan School Sitapur',
      board: 'CBSE',
      year: 2020,
      percentage: '94.16%',
      image: '/assets/School.jpg'
    },
    {
      level: 'Class 12 (Intermediate)',
      school: 'Vidyagyan School Sitapur',
      board: 'CBSE',
      year: 2022,
      percentage: '95%',
      image: '/assets/School.jpg'
    },
    {
      level: 'Bachelor of Technology (B.Tech)',
      school: 'Shiv Nadar University, Chennai',
      year: '2022 - 2026',
      CGPA: '8.3',
      image: '/assets/snu.webp'    }
  ];
}
