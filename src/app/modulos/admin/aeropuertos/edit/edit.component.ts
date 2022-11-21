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

    getWithId(id: string){
      this.aeropuertoService.getWithId(id).subscribe((data: AeropuertoModel) => {
        console.log(data)
        this.fgValidacion.controls["id"].setValue(id)
        this.fgValidacion.controls["nombre"].setValue(data.nombre as string)
        this.fgValidacion.controls["ciudad"].setValue(data.ciudad as string)
        this.fgValidacion.controls["pais"].setValue(data.pais as string)
        this.fgValidacion.controls["coordx"].setValue(data.coordx as string)
        this.fgValidacion.controls["coordy"].setValue(data.coordy as string)
        this.fgValidacion.controls["siglas"].setValue(data.siglas as string)
        this.fgValidacion.controls["tipo"].setValue(data.tipo as string)
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
      // Obtiene el ID de la URL
      this.id = this.route.snapshot.params["id"]
      //Consulta la informacion del aeropuerto
      this.getWithId(this.id);
    }
  }
