import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToFavoritos() {
    this.router.navigate(['/favoritos']);
  }

  cerrarSesion() {
    // Implementa la lógica para cerrar sesión aquí
    console.log('Sesión cerrada');
  }
}