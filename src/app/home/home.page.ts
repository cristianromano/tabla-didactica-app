import { Component, Input } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idioma?: string;
  constructor(private route: Router, private auth: Auth) {}

  idiomaEsp() {
    this.idioma = 'esp';
  }

  idiomaIng() {
    this.idioma = 'ingles';
  }

  idiomaPort() {
    this.idioma = 'port';
  }

  irColor() {
    this.route.navigate(['/color', this.idioma]);
  }

  irNumero() {
    this.route.navigate(['/numeros', this.idioma]);
  }

  irAnimal() {
    this.route.navigate(['/animales', this.idioma]);
  }

  LogOut() {
    this.auth.signOut();
    this.route.navigate(['/login']);
  }
}
