import { Component, OnInit } from '@angular/core';
import { SecureService } from '../services/secure.service';
import { UnsecureService } from '../services/unsecure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password:string;

  constructor(private unsecureSvc: UnsecureService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.unsecureSvc.login(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/test']);
      },
      err => { console.error(err); },
      () => {}
    );
  }
}
