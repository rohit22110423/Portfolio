import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'CIBIL Score Predictor',
      description: 'An AI-powered system for credit scoring using alternative data sources.',
      tech: ['React', 'Node.js', 'MySQL', 'XGBoost'],
      image: 'assets/projects/cibil.jpg',
      link: 'https://github.com/yourusername/cibil-score'
    },
    {
      title: 'Road Lane Detection',
      description: 'Detects lanes on roads using deep learning and computer vision.',
      tech: ['Python', 'OpenCV', 'UNet++'],
      image: 'assets/projects/lane.jpg',
      link: 'https://github.com/yourusername/lane-detection'
    },
    {
      title: 'Financial Sentiment Analyzer',
      description: 'Performs sentiment analysis on financial news using NLP and BERT.',
      tech: ['NLP', 'BERT', 'TF-IDF', 'Angular'],
      image: 'assets/projects/sentiment.jpg',
      link: 'https://github.com/yourusername/fin-sentiment'
    }
  ];
}
