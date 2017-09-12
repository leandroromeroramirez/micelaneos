import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle Works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private _route:ActivatedRoute) {
    this._route.parent.params.subscribe( parametros => {
      console.log("Ruta hija");
      console.log(parametros);
    });
   }

  ngOnInit() {
  }

}
