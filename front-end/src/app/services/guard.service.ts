import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class GuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const {allowedRole, deniedRole} = route.data;

    if (allowedRole && allowedRole == this.auth.currentUser.type) 
      return true
    
    if (deniedRole && deniedRole != this.auth.currentUser.type) 
      return true

    if(!this.auth.currentUser) this.router.navigate(['login'])
    return false
  }
}
