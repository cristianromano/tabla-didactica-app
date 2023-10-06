import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {
  constructor(private route: ActivatedRoute, private routes: Router) {}
  idioma?: any;
  audio?: HTMLAudioElement;
  audioV?: HTMLAudioElement;
  audioR?: HTMLAudioElement;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.idioma = params.get('id');
    });
  }

  colorRojo() {
    this.audio = new Audio();
    if (this.idioma == 'esp') {
      this.audio.src = '../../../assets/colores/rojo_es.mp3';
    } else if (this.idioma == 'port') {
      this.audio.src = '../../../assets/colores/rojo_port.mp3';
    } else {
      this.audio.src = '../../../assets/colores/rojo_eng.mp3';
    }
    this.audio.play();
  }

  colorVerde() {
    this.audioV = new Audio();
    if (this.idioma == 'esp') {
      this.audioV.src = '../../../assets/colores/verde_esp.mp3';
    } else if (this.idioma == 'port') {
      this.audioV.src = '../../../assets/colores/verde_port.mp3';
    } else {
      this.audioV.src = '../../../assets/colores/verde_eng.mp3';
    }
    this.audioV.play();
  }

  colorRosa() {
    this.audioR = new Audio();
    if (this.idioma == 'esp') {
      this.audioR.src = '../../../assets/colores/rosa_esp.mp3';
    } else if (this.idioma == 'port') {
      this.audioR.src = '../../../assets/colores/rosa_port.mp3';
    } else {
      this.audioR.src = '../../../assets/colores/rosa_eng.mp3';
    }
    this.audioR.play();
  }

  atras() {
    this.routes.navigate(['/home']);
  }
}
