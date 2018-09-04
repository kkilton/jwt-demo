import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(protected authService: AuthService,
        protected router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}

export class AuthGuardAdmin extends AuthGuard {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            return this.authService.currentUser && this.authService.currentUser.role && this.authService.currentUser.role.indexOf('admin') > -1;
        }

        this.router.navigate(['/login']);
        return false;
    }
}