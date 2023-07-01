import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  cargarEmpleados() {
    return this.httpClient.get(
      'https://mis-clientes-df6ad-default-rtdb.europe-west1.firebasedatabase.app/datos.json'
    );

    //get para optener información
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
