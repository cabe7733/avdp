import { Renderer2 } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit,AfterViewInit {

  public img;
  carousel = [
    {
      img:'../../../assets/img/imagen2.jpg',
      title:'Unete a la Red',
      description:'¡Pidele Perdón al Planeta!'
    },
    {
      img:'../../../assets/img/imagen3.jpg',
      title:'Unete a la Red',
      description:'¡Pidele Perdón al Planeta!'
    },
    {
      img:'../../../assets/img/imagen4.jpg',
      title:'Unete a la Red',
      description:'¡Pidele Perdón al Planeta!'
    }
  ];

  preguntasFrecuentes =[
    {
      pregunta:'¿Cuál es nuestra prioridad?',
      respuesta:'Formar individuos conscientes de las riquezas naturales de su entorno para fortalecer el sentido de pertenencia y la gobernanza en sus comunidades.'
    },
    {
      pregunta:'¿Qué papel juegan los niños en nuestras comunidades?',
      respuesta:'Su formación integral es fundamental; fortalecemos sus capacidades de liderazgo y comunicación asertiva en procura de generaciones más sensibles con su entorno.'
    },
    {
      pregunta:'¿Por qué es importante favorecer la economía circular?',
      respuesta:'El clásico sistema de extracción de recursos de la naturaleza, transformación, producción, venta y eliminación de los productos consumidos NO es sostenible. Queremos hacer parte de la transición a una economía circular y a la adopción de prácticas comola reutilización, la reparación o el reciclaje; porque cada uno de nosotros tiene la responsabilidad de aportar su granito de arena para proteger nuestro planeta.'
    }
  ]

  cards = [
    {img: '../../../assets/img/logos/blanco.png'},
    {img: '../../../assets/img/logos/carder.png'},
    {img: '../../../assets/img/logos/jordania.png'},
    {img: '../../../assets/img/logos/ondas.png'},
    {img: '../../../assets/img/logos/vidasilvestre.png'},
    {img: '../../../assets/img/logos/alcaldiaapia.png'},
    {img: '../../../assets/img/logos/tatama.png'},
    {img: '../../../assets/img/logos/alcaldiasantarosa.png'},
  ];

  slides: any = [[]];

  constructor(private renderer: Renderer2) { }

  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
    this.img="../../../assets/img/logo.jpg";
    this.slides = this.chunk(this.cards, 2);
    this.slides = this.chunk(this.cards, 3);
  }

  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-3');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
  }
}
