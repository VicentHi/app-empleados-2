import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/app'
import { CookieService } from "ngx-cookie-service";


@Injectable()
export class LoginService{

    constructor(private router:Router, private cookies:CookieService){}

    token:string;               //firma de seguridad del usuariario de sesión

    login(email:string,password:string){

        firebase.auth().signInWithEmailAndPassword(email,password).then(      // .then respuesta-promesa cuando se sepa se autentifica

            response=>{
                firebase.auth().currentUser?.getIdToken().then(              // se pide el token   

                    token=>{
                        
                        this.token=token;               //generar token   
                        this.cookies.set("token",this.token);                                //guardar el token en una cookie    
                        this.router.navigate(['/']);     //redirecciona al index
                    }
                )
            }

        );
    }

    getIdToken(){
        //return this.token;                         //devuelve token
        return this.cookies.get("token");           // devuelve lo que hay almacenado en la cookie
    }

    estaLogueado(){           //si esta logueado devuelve token
        console.log(this.token);
        //return this.token;
        return this.cookies.get("token");           // devuelve lo que hay almacenado en la cookie
    }

    logout(){                 //si no esta logueado token vacio y volve indice

        firebase.auth().signOut().then(()=>{        //then promesa para cuando se sepa

            this.token="";                                      //generar cadena vacia
            this.cookies.set("token",this.token);              // añadimos el valor de  la cookie
            this.router.navigate(['/']);
            window.location.reload();                          //actualizar la pagina 
        });

    }

    
}