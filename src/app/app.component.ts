import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

empleados:Empleado[]=[

  new Empleado("Vicent","Hidalgo","Presidente",7500),
  new Empleado("Pepe","Matao","Directora",5500),
  new Empleado("Maria","Colilla","Jefa",3500),
  new Empleado("Romualdo","Pepino","Administrativo",2000),
];

}

