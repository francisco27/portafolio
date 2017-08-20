import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class ProductosService {

	productos:any[]=[];
	cargando:boolean=true;

  constructor(public http:Http) {
  		this.cargar_productos();
   }

   public cargar_producto(cod:string){
    return this.http.get(`https://angularweb-25598.firebaseio.com/productos/${ cod }.json`)
   }

   public cargar_productos(){
   	this.cargando=true;

   	this.http.get('https://angularweb-25598.firebaseio.com/productos_idx.json')
  			.subscribe(res=>{
  				//console.log(res.json());
  				this.cargando=false;
  				this.productos=res.json();
  			})
   }

}
