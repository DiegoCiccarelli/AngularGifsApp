import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifSearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor( private http: HttpClient ){

     this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

  }

  public resultados :Gif[]=[];

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }


  buscarGifs(query: string): any{
  
    query = query.toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    //console.log("hola")
    this.http.get<GifSearchResponse>(`https://api.giphy.com/v1/gifs/search?api_key=u1hToqDiRBwUUc815XOHiucO3Wy8zZey&q=${query}&limit=10`)
      .subscribe( (resp) =>{
        this.resultados= resp.data;
       // console.log(this.resultados)
        //return resp.data;
      })
    
  }
   
}
