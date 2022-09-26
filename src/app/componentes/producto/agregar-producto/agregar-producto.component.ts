import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/app/web-api.service';

var prueba = "hola hola hola"
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  productoList$!: Observable<any[]>;
  marcaList$!: Observable<any[]>;

  constructor(private service:WebApiService) { }

  @Input() producto:any;
  id_producto: number = 0;
  nombre: string = "";
  descripcion: string = "";
  precioVenta: string = "";
  id_marca!: number;

  ngOnInit(): void {
    this.id_producto = this.producto.id_producto;
    this.nombre = this.producto.nombre;
    this.descripcion = this.producto.descripcion;
    this.precioVenta = this.producto.precioVenta;
    this.id_marca = this.producto.id_marca;
    this.productoList$=this.service.listarProducto();
    this.marcaList$ = this.service.listarMarca();
  }

  agregarProducto() {
    var producto = {
      nombre:this.nombre,
      descripcion:this.descripcion,
      precioVenta:this.precioVenta,
      marca:{id_marca:this.id_marca}
    }
    this.service.agregarProducto(producto).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();

      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

  console = console.log(prueba)

}
