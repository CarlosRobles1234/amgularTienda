import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  readonly webApiUrl = "http://localhost:1212/";

  constructor(private http:HttpClient) { }

  //producto
  listarProducto():Observable<any[]>{
    return this.http.get<any>(this.webApiUrl + 'producto/listar');
  }
  agregarProducto(data:any){
    return this.http.post(this.webApiUrl + 'producto/agregar', data);
  }
  actualizarProducto(id_producto:number | string, data:any){
    return this.http.put(this.webApiUrl + `producto/editar/${id_producto}`, data);
  }
  borrarProducto(id_producto:number|string){
    return this.http.delete(this.webApiUrl + `producto/eliminar/${id_producto}`);
  }
  //marca
  listarMarca():Observable<any[]>{
    return this.http.get<any>(this.webApiUrl + 'marca/listar');
  }
  agregarMarca(data:any){
    return this.http.post(this.webApiUrl + 'marca/agregar', data);
  }
  actualizarMarca(id_marca:number | string, data:any){
    return this.http.put(this.webApiUrl + `marca/editar/${id_marca}`, data);
  }
  borrarMarca(id_marca:number|string){
    return this.http.delete(this.webApiUrl + `marca/eliminar/${id_marca}`);
  }

}

