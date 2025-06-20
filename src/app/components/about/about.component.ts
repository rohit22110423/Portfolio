import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  // ——— dynamic content you can swap later ———
  name = 'Rohit Kumar';
  title = 'Full‑Stack Developer | UI/UX Enthusiast';
  description = `I blend clean code with bold design to build high‑impact web
  apps. My toolbelt: Angular, Node.js, Docker and cloud‑native stacks.`;

  skills = [
    { text: 'Angular',    clr: 'primary'  },
    { text: 'Node.js',    clr: 'success'  },
    { text: 'MongoDB',    clr: 'info'     },
    { text: 'Docker',     clr: 'danger'   },
    { text: 'TypeScript', clr: 'warning'  },
  ];
}
