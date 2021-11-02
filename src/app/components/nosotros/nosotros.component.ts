import {AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit,AfterViewInit {

 cards = [
    {img: '../../../assets/img/galeria 10.jpg'},
    {img: '../../../assets/img/galeria 11.jpg'},
    {img: '../../../assets/img/galeria 12.jpg'},
    {img: '../../../assets/img/galeria 13.jpg'},
    {img: '../../../assets/img/galeria 14.jpg'},
    {img: '../../../assets/img/galeria 16.jpg'},
    {img: '../../../assets/img/galeria 17.jpg'},
    {img: '../../../assets/img/galeria 9.jpg'},
    {img: '../../../assets/img/galeria 8.png'},
    {img: '../../../assets/img/galeria 7.jpg'},
    {img: '../../../assets/img/galeria 6.jpg'},
    {img: '../../../assets/img/galeria I.jpg'}
  ];

  slides: any = [[]];
  constructor(private renderer: Renderer2, private storageRef:AngularFireStorage) { }

  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
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
