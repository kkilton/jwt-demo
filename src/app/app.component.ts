import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) {}

  get userName(): string {
    let user = this.authService.currentUser;
    if (user)
      return `${user.firstName} ${user.lastName}`

    return null;
  }

  get isAdmin(): boolean {
    let user = this.authService.currentUser;
    return user && user.role.indexOf('admin') > -1;
  }
}
