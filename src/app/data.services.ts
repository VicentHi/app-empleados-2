import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';
import 'firebase/compat/auth';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient, private loginService:LoginService) {}

  cargarEmpleados() {

    const token=this.loginService.getIdToken();
    return this.httpClient.get(                   //get para optener información
      'https://mis-clientes-df6ad-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
    
  }

  guardarEmpleados(empleados: Empleado[]) {
    this.httpClient
      .put(
        'https://mis-clientes-df6ad-default-rtdb.europe-west1.firebasedatabase.app/datos.json',
        empleados
        //sustituimos post por put para que no se dupliquen los registros
      )
      .subscribe(
        (response) => {
          console.log('Se han guardado los empleados: ' + response);
        },
        (error) => {
          console.log('Error: ' + error);
        }
      );
  }

  actualizarEmpleados(indice: number, empleado: Empleado) {
    //metodo pasandole en la URL el idice del array

    let url =
      'https://mis-clientes-df6ad-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

    this.httpClient.put(url, empleado).subscribe(
      (response) => {
        console.log('Se ha modificado correctamente el empleado: ' + response);
      },
      (error) => {
        console.log('Error: ' + error);
      }
    );
  }

  eliminarEmpleados(indice: number) {
    //metodo pasandole en la URL el idice del array

    let url =
      'https://mis-clientes-df6ad-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

    this.httpClient.delete(url).subscribe(
      (response) => {
        console.log('Se ha eliminado correctamente el  empleado: ' + response);
      },
      (error) => {
        console.log('Error: ' + error);
      }
    );
  }
}
