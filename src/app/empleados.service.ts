import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.services';

@Injectable()
export class EmpleadosService {
  constructor(
    private servicioVentanaEmergente: ServicioEmpleadosService,
    private dataServise: DataServices
  ) {} //inyecciones

  obtenerEmpleados() {
    return this.dataServise.cargarEmpleados(); //observable actua de forma asincroma como AJAX, solo carga parte del código
  }

  setEmpleados(misEmpleados: Empleado[]) {
    this.empleados = misEmpleados;
  }

  empleados: Empleado[] = [];

  /*
  empleados:Empleado[]=[

    new Empleado("Vicent","Hidalgo","Presidente",7500),
    new Empleado("Pepe","Matao","Directora",5500),
    new Empleado("Maria","Colilla","Jefa",3500),
    new Empleado("Romualdo","Pepino","Administrativo",2000),
  ];
  */

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va a agregar: ' +
        '\n' +
        empleado.nombre +
        '\n' +
        'Salario:' +
        empleado.salario
    );

    this.empleados.push(empleado); //añadimos el empleado nuevo al array

    this.dataServise.guardarEmpleados(this.empleados); //añadimos a la BBDD
  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];

    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    //creamos el servicio el metodo

    let empleadoModificado = this.empleados[indice]; //almacenamos (modificamos) la información del empleado

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataServise.actualizarEmpleados(indice, empleado);
  }

  eliminarEmpleado(indice: number) {
    //eliminar elemento del array

    this.empleados.splice(indice, 1);

    this.dataServise.eliminarEmpleados(indice); //eliminar de la BD

    if (this.empleados != null) {                                //si es diferente a null 

      this.dataServise.guardarEmpleados(this.empleados);        //reconstruir el array para no tener problemas con los indices borrados

    }
  }
}
