import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  Equipo = [
    {
      name:'Blanca Libia Grajales Correa',
      cargo:'PRESIDENTA',
      text: 'Docente de educación básica Secretaría educación de Risaralda Ambientalista con trayectoria en diseño y ejecución de proyectos comunitarios',
      photo:'../../../assets/img/equipo/presidenta.jpg',
    },
    {
      name:'Natalia Parra Gaviria',
      cargo:'SECRETARIA',
      text:'Licenciada etnoeducadora Catedratica universidad Tecnologica de Pereira Dinamica y colaboradora,  con experiencia en asesoría de proyectos de investigacion ',
      photo:'../../../assets/img/equipo/natalia.jpeg',
    },
    {
      name:'Saida Jeanette Loaiza Toro',
      cargo:'TESORERA',
      text:'Licenciada en español y literatura UTP Técnico en mercadotecnia. Colaboradora, altruista con trayectoria en áreas comerciales y procesos contables',
      photo:'../../../assets/img/equipo/SaidaJeanette.jpg',
    },
    {
      name:'Juan Alejandro Gil',
      cargo:'Estudiante de guianza turística',
      text:'Solidario, altruista Apasionado por la naturaleza, los animales, el turismo de aventura y el futbol. Disfruto del trabajo comunitario y creo en los procesos colaborativos',
      photo:'../../../assets/img/equipo/juanalejandro.jpg',
    },
    {
      name:'Eduar Ramírez Echeverri',
      cargo:'ASESOR EN TECNOLOGÍA Y SISTEMAS',
      text:'Desarrolador de Software. Amante de la lectura y la vida en familia.',
      photo:'../../../assets/img/equipo/eduar.jpeg',
    },
    {
      name:'Diana Mercedes Ayala Moncada',
      cargo:'Docente / (Asesoría y seguimiento a proyectos)',
      text:'“Soy una mujer disciplinada, responsable, altruista y solidaria.Amo viajar, leer. Disfruto del silencio y de la contemplación. Me gusta colaborar en causas nobles y ayudar para que mi entorno sea cada vez mejor”',
      photo:'../../../assets/img/equipo/diana.jpg',
    },
    {
      name:'Guillermo León Calle Tangarife',
      cargo:'LÍDER COMUNITARIO',
      text:'Líder comunitario con trayectoria en trabajo cooperativo, amante de la vida y los procesos de desarrollo social',
      photo:'../../../assets/img/equipo/guillermo.jpg',
    },
    {
      name:'Maria Elsy Ruiz Martínez ',
      cargo:'LÍDER COMUNITARIA',
      text:'Amante de la va vida y la naturaleza.Colaboradora. Siempre dispuesta a servir a los otros, dedicada a su familia y al trabajo comunitario',
      photo:'../../../assets/img/equipo/cilantro.jpg',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
