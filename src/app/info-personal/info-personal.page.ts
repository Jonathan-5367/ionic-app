import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.page.html',
  styleUrls: ['./info-personal.page.scss'],
  standalone: false,
})
export class InfoPersonalPage implements OnInit {
  user = {
    name: 'Jonathan XD',
    role: 'Desarrollador Full Stack',
    email: 'jonathan@example.com',
    age: 28,
    birthDate: '15 de Mayo, 1998',
    bio: 'Apasionado por la tecnología y el desarrollo de aplicaciones móviles con Ionic y Angular. Siempre buscando aprender cosas nuevas.',
    stats: {
      projects: 12,
      tasks: 145,
      level: 'Senior'
    }
  };

  constructor() { }

  ngOnInit() {
  }
}
