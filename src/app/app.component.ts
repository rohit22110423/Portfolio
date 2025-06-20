import { Component, HostListener, AfterViewInit } from '@angular/core';



/* ——— Interfaces ——— */
export interface ResumeEntry {
  heading: string;
  sub?: string;
  date?: string;
  description?: string;
}

export interface SkillEntry {
  heading: string;
  icon: string;
}

export interface ResumeSection {
  id: string;
  title: string;
  icon: string;
  image: string;
  items: ResumeEntry[] | SkillEntry[];
}

/* ——— Type guard: true only for the “skills” section ——— */
function isSkillSection(section: ResumeSection): section is ResumeSection & { items: SkillEntry[] } {
  return section.id === 'skills';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  isSkillSection = isSkillSection;

  // 🔄 Section Scroll Spy Tracking
  scrollProgress = 0;
  activeId = 'home';
  sectionIds = ['home', 'about', 'resume', 'education', 'projects', 'contact'];

  // 🔸 Resume Section Cards
  resumeSections: ResumeSection[] = [
    {
      id: 'work',
      title: 'Work Experience',
      icon: 'bi-briefcase-fill',
      image: 'assets/Work.jpg',
      items: [
        {
          heading: 'Machine Learning Intern',
          sub: 'Precision Infomatic Pvt. Ltd.',
          date: 'May 2025 – Present',
          description: 'Built face‑verification & liveness detection (81 % accuracy).'
        }
      ]
    },
    {
      id: 'education-inner',
      title: 'Education',
      icon: 'bi-mortarboard-fill',
      image: 'assets/education.jpg',
      items: [
        {
          heading: 'B.Tech – AI & Data Science',
          sub: 'Shiv Nadar University',
          date: '2022 – 2026',
          description: 'CGPA 8.2 · Core courses: ML, DBMS, Java, DSA.'
        }
      ]
    },
    {
      id: 'projects-inner',
      title: 'Projects',
      icon: 'bi-code-slash',
      image: 'assets/projects.jpg',
      items: [
        {
          heading: 'Book Store App',
          sub: 'MERN Stack',
          date: '2024‑2025',
          description: 'CRUD + JWT auth + role‑based access.'
        }
      ]
    },
    {
      id: 'awards',
      title: 'Awards',
      icon: 'bi-award-fill',
      image: 'assets/awards.jpg',
      items: [
        {
          heading: 'Code Fusion Hackathon',
          sub: 'National Rank 7',
          date: '2023',
          description: 'Top‑10 nationwide for innovation.'
        }
      ]
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: 'bi-tools',
      image: 'assets/skills.jpg',
      items: [
        { heading: 'HTML', icon: 'assets/html.png' },
        { heading: 'CSS', icon: 'assets/css-3.png' },
        { heading: 'Angular', icon: 'assets/angular.png' },
        { heading: 'Node.js', icon: 'assets/node-js.png' },
        { heading: 'MongoDB', icon: 'assets/database.png' },
        { heading: 'MySQL', icon: 'assets/mysql-database.png' }
      ]
    }
  ];

  // 🔸 Education Cards
  educationDetails = [
    {
      level: 'Bachelor of Technology (B.Tech)',
      school: 'Shiv Nadar University, Chennai',
      year: '2022 - 2026',
      CGPA: '8.3',
      image: '/assets/snu.webp'
    },
    {
      level: 'Class 12 (Intermediate)',
      school: 'Vidyagyan School Sitapur',
      board: 'CBSE',
      year: 2022,
      percentage: '95.40%',
      image: '/assets/School.jpg'
    },
    {
      level: 'Class X',
      school: 'Vidyagyan School, Sitapur',
      board: 'CBSE',
      year: '2020',
      percentage: '94.16 %',
      image: 'assets/School.jpg'
    }
  ];
  hoveredCard: number | null = null;

  // 🔸 Project Cards
  projects = [
    {
      title: 'Book Store App',
      description: 'Full‑stack MERN app with JWT, role access & MongoDB Atlas.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: 'assets/projects/bookstore.jpg',
      link: 'https://github.com/rohitkumar/bookstore-app'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive Angular portfolio with animations.',
      tech: ['Angular', 'Bootstrap'],
      image: 'assets/projects/portfolio.jpg',
      link: 'https://rohitkumar.dev'
    }
  ];

  // 🔸 Contact Form
  contact = { name: '', email: '', message: '' };
  successMessage = '';
  errorMessage = '';

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.successMessage = 'Message sent successfully!';
      this.errorMessage = '';
      this.contact = { name: '', email: '', message: '' };
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill out all fields.';
    }
  }

  // 🔸 Scroll Behavior (Progress & Spy)
  ngAfterViewInit() {
    this.updateScrollProgress();
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateScrollProgress();
    this.updateActiveSection();
  }

  private updateScrollProgress() {
    const total = document.body.scrollHeight - window.innerHeight;
    this.scrollProgress = total ? (window.scrollY / total) * 100 : 0;
  }

  private updateActiveSection() {
    const mid = window.scrollY + window.innerHeight / 2;
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el && mid >= el.offsetTop && mid < el.offsetTop + el.offsetHeight) {
        this.activeId = id;
        break;
      }
    }
  }
}
