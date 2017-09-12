import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tam">
     Hola mundo ... esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tam = tam+5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tam = tam-5">
    <i class="fa fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tam:number =30;
  constructor() { }

  ngOnInit() {
  }

}
