import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Perfil', url: '/info-personal', icon: 'person' },
    { title: 'Contactos', url: '/contactos', icon: 'people' }
  ];

  constructor(private router: Router) {}

  logout() {
    // Aquí iría la lógica para limpiar la sesión (ej. localStorage)
    this.router.navigate(['/login']);
  }
}
