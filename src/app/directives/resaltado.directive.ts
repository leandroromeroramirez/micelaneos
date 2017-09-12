import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private _el:ElementRef) { 
    console.log("Directiva llamada");
    // _el.nativeElement.style.backgroundColor = "yellow"
  }
  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltado(this.nuevoColor || 'yellow');
    // console.log(this.nuevoColor);
    // this._el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltado(null);
    // this._el.nativeElement.style.backgroundColor = null;
  }

  private resaltado(color:string){
    this._el.nativeElement.style.backgroundColor = color;
  }
}
