import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AeropuertoModel } from 'src/app/modelos/aeropuerto.model';
import { AeropuertoService } from 'src/app/servicios/aeropuerto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private aeropuertoService: AeropuertoService,
    private router: Router,
    private route: ActivatedRoute) { }

    fgValidacion = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      coordx: ['', [Validators.required]],
      coordy: ['', [Validators.required]],
      siglas: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });
 
    id: string=''

    buscarRegistro(id: string){
      this.aeropuertoService.getWithId(id).subscribe((data: AeropuertoModel) => {
        console.log(data)
        this.fgValidacion.controls["id"].setValue(id)
        this.fgValidacion.controls["nombre"].setValue("nombre")
        this.fgValidacion.controls["ciudad"].setValue("ciudad")
        this.fgValidacion.controls["pais"].setValue("pais")
        this.fgValidacion.controls["coordx"].setValue("coordx")
        this.fgValidacion.controls["coordy"].setValue("coordy")
        this.fgValidacion.controls["siglas"].setValue("siglas")
        this.fgValidacion.controls["tipo"].setValue("tipo")
      })
    }  

    edit(){
      let aeropuerto = new AeropuertoModel();
      aeropuerto.id = this.fgValidacion.controls["id"].value as string;
      aeropuerto.nombre = this.fgValidacion.controls["nombre"].value as string;
      aeropuerto.ciudad = this.fgValidacion.controls["ciudad"].value as string;
      aeropuerto.pais = this.fgValidacion.controls["pais"].value as string;
      aeropuerto.coordx = this.fgValidacion.controls["coordx"].value as string;
      aeropuerto.coordy = this.fgValidacion.controls["coordy"].value as string;
      aeropuerto.siglas = this.fgValidacion.controls["siglas"].value as string;
      aeropuerto.tipo = this.fgValidacion.controls["tipo"].value as string;
   
      this.aeropuertoService.update(aeropuerto).subscribe((data: AeropuertoModel)=> {
        Swal.fire('Editado Correctamente!', '', 'success')
        this.router.navigate(['/aeropuertos/get']);
      },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
    }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.buscarRegistro(this.id);
  }

}
