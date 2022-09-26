import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/app/web-api.service';


@Component({
  selector: 'app-agregar-marca',
  templateUrl: './agregar-marca.component.html',
  styleUrls: ['./agregar-marca.component.scss']
})
export class AgregarMarcaComponent implements OnInit {

  marcaList$!: Observable<any[]>;

  constructor(private service:WebApiService) { }

  @Input() marca:any;
  id_marca: number = 0;
  nombre: string = "";

  ngOnInit(): void {
    this.id_marca = this.marca.id_marca;
    this.nombre = this.marca.nombre;
    this.marcaList$ = this.service.listarMarca();
  }
  agregarMarca() {
    var marca = {
      nombre:this.nombre
    }
    this.service.agregarMarca(marca).subscribe(res => {
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
  actualizarMarca() {

    var marca = {
      id_marca: this.id_marca,
      nombre:this.nombre

    }
    var id_marca:number = this.id_marca;

    this.service.actualizarMarca(this.id_marca,marca).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      console.log(marca)
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }
}

