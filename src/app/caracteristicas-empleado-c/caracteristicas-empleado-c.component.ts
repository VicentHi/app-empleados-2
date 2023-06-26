import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit{

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  agregaCaracteristicas(value:string){
    this.caracteristicasEmpleado.emit(value);
    //this.miServicio.muestraMensaje(value);                     //inyectar servicio //comentamos 3 
  }

  ngOnInit(): void {
    
  }

  //constructor(private miServicio:ServicioEmpleadosService){}      //inyectar servicio  //comentamos 3


}
