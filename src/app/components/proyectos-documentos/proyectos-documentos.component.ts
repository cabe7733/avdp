import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos-documentos',
  templateUrl: './proyectos-documentos.component.html',
  styleUrls: ['./proyectos-documentos.component.scss']
})
export class ProyectosDocumentosComponent implements OnInit {

  newDoc:boolean;
  Doc:boolean;

  documentos =[
    {
      title:'Acta de constitución',
      ruta:'../../../assets/docs/documentos listos RE/acta de costitucion.pdf'
    },
    {
      title:'Certificado de existencia y representación legal',
      ruta:'../../../assets/docs/documentos listos RE/AvueloExis.pdf'
    },
    {
      title:'Certificado Libros',
      ruta:'../../../assets/docs/documentos listos RE/AvueloLibros.pdf'
    },
    {
      title:'Estatutos',
      ruta:'../../../assets/docs/documentos listos RE/estatutos ong a vuelo de pajaro.pdf'
    },
    {
      title:'Certificación de antecedentes judiciales',
      ruta:'../../../assets/docs/documentos listos RE/certificación de antecedentes judiciales.pdf'
    },
    {
      title:'Rut actualizado',
      ruta:'../../../assets/docs/documentos listos RE/RUT ACTUALIZADO.pdf'
    },
    {
      title:'estados financieros 2020',
      ruta:'../../../assets/docs/estados financieros 2020.pdf'
    },
    {
      title:'Contadora',
      ruta:'../../../assets/docs/contadora.pdf'
    },
    {
      title:'certificacion de requisitos',
      ruta:'../../../assets/docs/certificacion de requisitos.pdf'
    },
    {
      title:'Certificación de los cargos directivos y gerenciales',
      ruta:'../../../assets/docs/Certificación de los cargos directivos y gerenciales.pdf'
    },
    {
      title:'Acta de asamblea general autorización solicitud RE',
      ruta:'../../../assets/docs/Acta de asamblea general autorización solicitud RE c.pdf'
    },
    {
      title:'Antecedentes Socios',
      ruta:'../../../assets/docs/antecedentes_socios.pdf'
    }
  ]

  documentosNew =[
    {
      title:'Recursos de reposicion',
      ruta:'../../../assets/docs/RECURSO DE REPOSICIÓN RÉGIMEN ESPECIAL/recurso de reposicion.pdf'
    },
    {
      title:'acta de retiro de socios',
      ruta:'../../../assets/docs/RECURSO DE REPOSICIÓN RÉGIMEN ESPECIAL/acta numero 4 retiro socios (1).pdf'
    },
    {
      title:'acta de reinversión de excedentes',
      ruta:'../../../assets/docs/RECURSO DE REPOSICIÓN RÉGIMEN ESPECIAL/acta  reinversion de ecxedentes 2020.pdf'
    },
    {
      title:'estados financieros 2020',
      ruta:'../../../assets/docs/RECURSO DE REPOSICIÓN RÉGIMEN ESPECIAL/E financieros.pdf'
    },
    {
      title:'cartas de renuncia socios',
      ruta:'../../../assets/docs/RECURSO DE REPOSICIÓN RÉGIMEN ESPECIAL/cartas de renuncia socios fundadores.pdf'
    },
    {
      title:'estatutos soporte del recurso de reposicion',
      ruta:'../../../assets/docs/RECURSO DE REPOSICIÓN RÉGIMEN ESPECIAL/estatutos recurso de reposicion.pdf'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showHideNewDoc(){
    this.newDoc = !this.newDoc;
  }

  showHideDoc(){
    this.Doc = !this.Doc;
  }
}
