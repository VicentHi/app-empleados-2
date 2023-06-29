import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualizar-component',
  templateUrl: './actualizar-component.component.html',
  styleUrls: ['./actualizar-component.component.css'],
})
export class ActualizarComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']); //rescatar el valor que le pasamos por la url

    this.empleados = this.empleadosService.empleados;

    this.indice = this.route.snapshot.params['id']; //rescatamos el id del empleado que viene de la url

    let empleado: Empleado = this.empleadosService.encontrarEmpleado(
      this.indice
    ); //creamos objeto empleado, llamamos al metodo pasandole en indice para que encuente el empleado

    this.cuadroNombre = empleado.nombre; //cargar el valor en el cuadro del formulario
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  empleados: Empleado[] = [];

  volverHome() {
    this.router.navigate(['']); // si ponemos 'contacto' iriamos a contacto
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  indice: number;

  accion: number; //

  actualizaEmpleado() {
    if (this.accion == 1) {
      let miEmpleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );

      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado); //sobreescribe en la posicion del indice del array los datos del empleado

      this.router.navigate(['']); //redirigir a home

    } else {                      //valor 2
      this.empleadosService.eliminarEmpleado(this.indice);

      this.router.navigate(['']); //redirigir a home
    }
  }

  /* (las dos funciones en 1 arriba)
  actualizaEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );

    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);       //sobreescribe en la posicion del indice del array los datos del empleado

    this.router.navigate([''])      //redirigir a home
  }

  eliminaEmpleado() {
   
    this.empleadosService.eliminarEmpleado(this.indice);       

    this.router.navigate([''])      //redirigir a home
  }
*/
}

