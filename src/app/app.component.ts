import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{ 

  constructor(){

  }

  ngOnInit(): void {}

}




/*
import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{                    //añadimos OnInit (comentado)
  title = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService,      // injectar 1 servicio
    private empleadosService:EmpleadosService,                  // injectar 2 servicio
    ){//this.empleados=this.empleadosService.empleados           //añadimos(comentado y añado OnInit y pego la linea) el servico dentro de las llaves del constructor    
    };
    
    ngOnInit(): void {
      this.empleados=this.empleadosService.empleados            //añadimos linea entre llaves del constructor
  };
                                                        


    empleados:Empleado[]=[];


empleados:Empleado[]=[

  new Empleado("Vicent","Hidalgo","Presidente",7500),
  new Empleado("Pepe","Matao","Directora",5500),
  new Empleado("Maria","Colilla","Jefa",3500),
  new Empleado("Romualdo","Pepino","Administrativo",2000),
];



cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

agregarEmpleado(){
  let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);        //inyectar servicio //comentamos 3
  //this.empleados.push(miEmpleado);
  this.empleadosService.agregarEmpleadoServicio(miEmpleado);                          //inyectar 2 servicio (todos los servicios 3)                    

}

}

*/