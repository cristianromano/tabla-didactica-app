import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {
  constructor(private route: ActivatedRoute, private routes: Router) {}
  animal?: any;
  audioOso?: HTMLAudioElement;
  audioPerro?: HTMLAudioElement;
  audioGato?: HTMLAudioElement;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.animal = params.get('id');
    });
  }

  oso() {
    this.audioOso = new Audio();
    if (this.animal == 'esp') {
      this.audioOso.src = '../../../assets/animales/oso_es.mp3';
    } else if (this.animal == 'port') {
      this.audioOso.src = '../../../assets/animales/oso_port.mp3';
    } else {
      this.audioOso.src = '../../../assets/animales/oso_eng.mp3';
    }
    this.audioOso.play();
  }

  perro() {
    this.audioPerro = new Audio();
    if (this.animal == 'esp') {
      this.audioPerro.src = '../../../assets/animales/perro_es.mp3';
    } else if (this.animal == 'port') {
      this.audioPerro.src = '../../../assets/animales/perro_port.mp3';
    } else {
      this.audioPerro.src = '../../../assets/animales/perro_eng.mp3';
    }
    this.audioPerro.play();
  }

  gato() {
    this.audioGato = new Audio();
    if (this.animal == 'esp') {
      this.audioGato.src = '../../../assets/animales/gato_es.mp3';
    } else if (this.animal == 'port') {
      this.audioGato.src = '../../../assets/animales/gato_port.mp3';
    } else {
      this.audioGato.src = '../../../assets/animales/gato_eng.mp3';
    }
    this.audioGato.play();
  }

  atras() {
    this.routes.navigate(['/home']);
  }
}
