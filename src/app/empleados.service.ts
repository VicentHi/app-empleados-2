import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()

export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { }                    //inyeccion 3 servicio

  empleados:Empleado[]=[

    new Empleado("Vicent","Hidalgo","Presidente",7500),
    new Empleado("Pepe","Matao","Directora",5500),
    new Empleado("Maria","Colilla","Jefa",3500),
    new Empleado("Romualdo","Pepino","Administrativo",2000),
  ];

  agregarEmpleadoServicio(empleado:Empleado){

    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + 
    empleado.nombre + "\n" + "Salario:" + empleado.salario);                                    //llamamos al servicio 3

    this.empleados.push(empleado);
  }
}
