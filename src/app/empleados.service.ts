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

  encontrarEmpleado(indice:number){

    let empleado:Empleado=this.empleados[indice];

    return empleado;

  }

  actualizarEmpleado(indice:number,empleado:Empleado){    //creamos el servicio el metodo

    let empleadoModificado=this.empleados[indice];        //almacenamos (modificamos) la información del empleado 

    empleadoModificado.nombre=empleado.nombre;            
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

  }


  eliminarEmpleado(indice:number){    //eliminar elemento del array

    this.empleados.splice(indice,1);
  }


}
