import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { TestComponent } from "./test/test.component";
import { AuthGuard } from "./app.authgaurd";
import { LogoutComponent } from "./logout/logout.component";
import { AdminComponent } from "./admin/admin.component";

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'test', component: TestComponent, canActivate: [AuthGuard]}
];