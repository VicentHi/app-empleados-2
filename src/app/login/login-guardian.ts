import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()

export class LoginGuardian implements CanActivate{


    constructor(private loginSerice:LoginService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        if(this.loginSerice.estaLogueado()){
            return true;
        }
        else{
            this.router.navigate(['login]']);
            return false;
        }
    }
    
}


