import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent {
  title = 'Listado de Empleados';

  constructor(
    private miServicio: ServicioEmpleadosService, // injectar 1 servicio
    private empleadosService: EmpleadosService // injectar 2 servicio
  ) {
    //this.empleados=this.empleadosService.empleados           //añadimos(comentado y añado OnInit y pego la linea) el servico dentro de las llaves del constructor
  }

  ngOnInit(): void {
    this.empleadosService.obtenerEmpleados().subscribe((misEmpleados) => {
      //subcribe esta atento a cualquier modificacion de los datos

      console.log(misEmpleados);                    //mostrar el objeto en consola

      this.empleados = Object.values(misEmpleados); //los valores del objeto misEmpleados seran almacenados en array empleados

      this.empleadosService.setEmpleados(this.empleados);  //recibira el registro y se lo pasa e empleados
    });
  }

  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);        //inyectar servicio //comentamos 3
    //this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado); //inyectar 2 servicio (todos los servicios 3)
  }
}
