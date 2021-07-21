import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

 constructor( private gifsSevice: GifsService){

 }
  

  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;
  
  buscar(){
    const valor = this.textBuscar.nativeElement.value;
    if(valor!=""){
    this.gifsSevice.buscarGifs(valor);
    }
    this.textBuscar.nativeElement.value="";
  }  

  
  
}
