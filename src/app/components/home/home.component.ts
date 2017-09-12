import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
        AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br><br>
  <app-css></app-css>
  <br><br>
  <app-clases></app-clases>
  <br><br>
  <p [appResaltado]="'orange'">
    Hola Mundo
  </p>
  <br><br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit")
  }

  ngOnChanges () {
    console.log("ngOnChanges")
  }
  ngDoCheck () {
    console.log("ngDoCheck")
  }
  ngAfterContentInit () {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked () {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewChecked () {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit () {
    console.log("ngAfterViewInit")
  }
  ngOnDestroy () {
    console.log("ngOnDestroy")
  }
}
