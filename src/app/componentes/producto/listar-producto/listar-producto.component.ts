import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/app/web-api.service';
import { ProductoMod } from 'src/app/models/producto.model';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss']
})
export class ListarProductoComponent implements OnInit {

productoList$!:Observable<any[]>;
marcaList$!:Observable<any[]>;
marcaList:any=[];

marcaMap:Map<number,string> = new Map()

  constructor(private service:WebApiService) {

   }

  ngOnInit(): void {
    this.productoList$ = this.service.listarProducto();
    this.marcaList$ = this.service.listarMarca();
    this.refreshMarcaMap();
  }

modalproductoTitulo:string ='';
activateAgregarProducto:boolean=false;
producto:any;
//modal que esta en http
modaladdproducto(){
  this.producto = {
    id_producto:0,
    nombre:null,
    descripcion:null,
    precioVenta:null,
    marca:{id_marca:null}
  }
  this.modalproductoTitulo = "agregar producto";
  this.activateAgregarProducto = true;
}
modalClose() {
  this.activateAgregarProducto = false;
  this.productoList$ = this.service.listarProducto();
}

  //mapeo de id marca
  refreshMarcaMap(){
    this.service.listarMarca().subscribe(data => {
      this.marcaList = data;

      for(let i = 0; i< data.length; i++)
      {
        this.marcaMap.set(this.marcaList[i].id_marca, this.marcaList[i].nombre);
      }
    })
  }
}
