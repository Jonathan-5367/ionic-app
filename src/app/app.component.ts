import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Información personal', url: '/info-personal', icon: 'person' },
    { title: 'Contactos', url: '/contactos', icon: 'people' }
  ];
  constructor() {}
}
