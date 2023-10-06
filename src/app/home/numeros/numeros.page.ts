import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {
  constructor(private route: ActivatedRoute, private routes: Router) {}
  numero?: any;
  audioUno?: HTMLAudioElement;
  audioDos?: HTMLAudioElement;
  audioTres?: HTMLAudioElement;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.numero = params.get('id');
    });
  }

  uno() {
    this.audioUno = new Audio();
    if (this.numero == 'esp') {
      this.audioUno.src = '../../../assets/numeros/uno_es.mp3';
    } else if (this.numero == 'port') {
      this.audioUno.src = '../../../assets/numeros/uno_port.mp3';
    } else {
      this.audioUno.src = '../../../assets/numeros/uno_eng.mp3';
    }
    this.audioUno.play();
  }

  dos() {
    this.audioDos = new Audio();
    if (this.numero == 'esp') {
      this.audioDos.src = '../../../assets/numeros/dos_es.mp3';
    } else if (this.numero == 'port') {
      this.audioDos.src = '../../../assets/numeros/dos_port.mp3';
    } else {
      this.audioDos.src = '../../../assets/numeros/dos_eng.mp3';
    }
    this.audioDos.play();
  }

  tres() {
    this.audioTres = new Audio();
    if (this.numero == 'esp') {
      this.audioTres.src = '../../../assets/numeros/tres_es.mp3';
    } else if (this.numero == 'port') {
      this.audioTres.src = '../../../assets/numeros/tres_port.mp3';
    } else {
      this.audioTres.src = '../../../assets/numeros/tres_eng.mp3';
    }
    this.audioTres.play();
  }

  atras() {
    this.routes.navigate(['/home']);
  }
}
