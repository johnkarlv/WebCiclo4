import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RutaModel } from 'src/app/modelos/ruta.model';
import { RutaService } from 'src/app/servicios/ruta.service';
import Swal from 'sweetalert2'
import { AeropuertoModel } from 'src/app/modelos/aeropuerto.model';
import { AeropuertoService } from 'src/app/servicios/aeropuerto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private aeropuertoService: AeropuertoService,
    private rutaService: RutaService,
    private router: Router,
    private route: ActivatedRoute) { }

    listadoAeropuertos: AeropuertoModel[] = []

    fgValidacion = this.fb.group({
      id: ['', [Validators.required]],
      origen: ['', [Validators.required]],
      destino: ['', [Validators.required]],
      tiempo_estimado: [0, [Validators.required]],
    });

    getAllAeropuertos(){
      this.aeropuertoService.getAll().subscribe((data: AeropuertoModel[]) => {
        this.listadoAeropuertos = data
        console.log(data)
      })
    }
  
 
    id: string=''

    getWithId(id: string){
      this.rutaService.getWithId(id).subscribe((data: RutaModel) => {
        console.log(data)
        this.fgValidacion.controls["id"].setValue(id)
        this.fgValidacion.controls["origen"].setValue(data.origen as string)
        this.fgValidacion.controls["destino"].setValue(data.destino as string)
        //REVISAR LA ASIGNACION DE CERO
        this.fgValidacion.controls["tiempo_estimado"].setValue(data.tiempo_estimado as number)
        //this.fgValidacion.controls["tiempo_estimado"].setValue(0)
      })
    }

    edit(){
      let ruta = new RutaModel();
      ruta.id = this.fgValidacion.controls["id"].value as string;
      ruta.origen = this.fgValidacion.controls["origen"].value as string;
      ruta.destino = this.fgValidacion.controls["destino"].value as string;
      ruta.tiempo_estimado = this.fgValidacion.controls["tiempo_estimado"].value as number;
   
      this.rutaService.update(ruta).subscribe((data: RutaModel)=> {
        Swal.fire('Editado Correctamente!', '', 'success')
        this.router.navigate(['/rutas/get']);
      },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
    }
  
    ngOnInit(): void {
      this.getAllAeropuertos()
      // Obtiene el ID de la URL
      this.id = this.route.snapshot.params["id"]
      //Consulta la informacion de la ruta
      this.getWithId(this.id);
    }
  }
