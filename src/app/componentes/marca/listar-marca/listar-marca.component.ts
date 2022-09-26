import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/app/web-api.service';

@Component({
  selector: 'app-listar-marca',
  templateUrl: './listar-marca.component.html',
  styleUrls: ['./listar-marca.component.scss']
})
export class ListarMarcaComponent implements OnInit {


marcaList$!:Observable<any[]>;
//marcaList:any=[];

marcaMap:Map<number,string> = new Map()

  constructor(private service:WebApiService) { }

  ngOnInit(): void {

    this.marcaList$ = this.service.listarMarca();

  }

modalmarcaTitulo:string ='';
activateAgregarMarca:boolean=false;
marca:any;

modaladdmarca(){
  this.marca = {
    id_marca:0,
    nombre:null
  }
  this.modalmarcaTitulo = "agregar marca";
  this.activateAgregarMarca = true;
}


modalEditmarca(marca:any) {
  this.marca = marca;
  this.modalmarcaTitulo = "editar marca";
  this.activateAgregarMarca = true;
}

delete(marca:any) {
  if(confirm(`Esta usted seguro que desea borrar la marca ${marca.nombre}`)) {
    this.service.borrarMarca(marca.id_marca).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
    if(closeModalBtn) {
      closeModalBtn.click();
    }

    var showDeleteSuccess = document.getElementById('delete-success-alert');
    if(showDeleteSuccess) {
      showDeleteSuccess.style.display = "block";
    }
    setTimeout(function() {
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "none"
      }
    }, 4000);
    this.marcaList$ = this.service.listarMarca();

    })

  }
}

modalClose() {
  this.activateAgregarMarca = false;
  this.marcaList$ = this.service.listarMarca();
}
}





