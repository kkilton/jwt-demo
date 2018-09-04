import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component'
import { AppRoutes } from './app.routes';
import { UnsecureService } from './services/unsecure.service';
import { SecureService } from './services/secure.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuard, AuthGuardAdmin } from './app.authgaurd';
import { AuthInterceptor } from './services/auth.interceptor';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    LogoutComponent,
    AdminComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    SecureService,
    UnsecureService,
    AuthService,
    AuthGuard,
    AuthGuardAdmin,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
