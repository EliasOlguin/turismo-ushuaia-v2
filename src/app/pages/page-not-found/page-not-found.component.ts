import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  pageX: number = 0;
  pageY: number = 0;
  mouseY = 0;
  mouseX = 0;
  yAxis = 0;
  xAxis = 0;
  clase: string;
  constructor() {}

  ngOnInit(): void {}
  @HostListener('document:mousemove', ['$event'])
  getMove(e: any) {
    console.log(e);
    this.mouseY = e.pageY;
    this.yAxis = ((this.pageY / 2 - this.mouseY) / this.pageY) * 300;
    this.mouseX = e.pageX / -this.pageX;
    this.xAxis = -this.mouseX * 100 - 100;
    this.clase = `transform: translate(${this.xAxis}%,-${this.yAxis}%)`;
    console.log(this.clase);
  }
}
