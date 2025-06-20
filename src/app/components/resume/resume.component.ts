import { Component, AfterViewInit, HostListener } from '@angular/core';

type ResumeItem = {
  heading: string;
  description: string;
  sub?: string;
  date?: string;
  icon?: string; // only for skills
};

type ResumeSection = {
  id: string;
  icon: string;
  title: string;
  image: string;
  items: ResumeItem[];
};

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  activeId = 'work';
  scrollProgress = 0;

  resumeSections: ResumeSection[] = [
    {
      id: 'work',
      icon: 'bi-briefcase-fill',
      title: 'Work Experience',
      image: 'assets/Work.jpg',
      items: [
        {
          heading: 'Machine Learning Intern',
          sub: 'Precision Infomatic Pvt. Ltd.',
          date: 'May 2025 – Present',
          description: 'Built face-verification & liveness detection (81% accuracy).'
        }
      ]
    },
    {
      id: 'education',
      icon: 'bi-mortarboard-fill',
      title: 'Education',
      image: 'assets/education.jpg',
      items: [
        {
          heading: 'B.Tech – AI & Data Science',
          sub: 'Shiv Nadar University',
          date: '2022 – 2026',
          description: 'CGPA: 8.2 | Core: ML, DBMS, Java, DSA.'
        }
      ]
    },
    {
      id: 'projects',
      icon: 'bi-code-slash',
      title: 'Projects',
      image: 'assets/projects.jpg',
      items: [
        {
          heading: 'Book Store App',
          sub: 'MERN Stack',
          date: '2024',
          description: 'CRUD app with JWT, MongoDB Atlas.'
        }
      ]
    },
    {
      id: 'awards',
      icon: 'bi-award-fill',
      title: 'Awards',
      image: 'assets/awards.jpg',
      items: [
        {
          heading: 'Code Fusion Hackathon',
          sub: 'National Rank 7',
          date: '2023',
          description: 'Recognized for innovation and teamwork.'
        }
      ]
    },
    {
      id: 'skills',
      icon: 'bi-tools',
      title: 'Skills',
      image: 'assets/skills.jpg',
      items: [
        { heading: 'HTML', description: '', icon: 'assets/icons/html5.svg' },
        { heading: 'CSS', description: '', icon: 'assets/icons/css3.svg' },
        { heading: 'Angular', description: '', icon: 'assets/icons/angular.svg' },
        { heading: 'Node.js', description: '', icon: 'assets/icons/nodejs.svg' },
        { heading: 'MongoDB', description: '', icon: 'assets/icons/mongodb.svg' },
        { heading: 'MySQL', description: '', icon: 'assets/icons/mysql.svg' }
      ]
    }
  ];

  ngAfterViewInit() {
    this.updateActive();
    this.updateProgress();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateActive();
    this.updateProgress();
  }

  private updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }

  private updateActive() {
    const midpoint = window.scrollY + window.innerHeight / 2;
    for (const section of this.resumeSections) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (midpoint >= top && midpoint < bottom) {
          this.activeId = section.id;
          break;
        }
      }
    }
  }
}
