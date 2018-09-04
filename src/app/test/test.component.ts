import { Component, OnInit } from '@angular/core';
import { SecureService } from '../services/secure.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  output: string;

  constructor(private secureSvc: SecureService) { }

  ngOnInit() {
  }

  showWorking() {
    this.output = 'working on it...';
  }
  getSecureData() {
    this.showWorking();
    this.secureSvc.getSecureData().subscribe(
      data => this.output = data,
      err => this.output = err.message
    );
  }

  getSecureAdminData() {
    this.showWorking();
    this.secureSvc.getSecureAdminData().subscribe(
      data => this.output = data,
      err => this.output = err.message
    );
  }

  getUnsecureData() {
    this.showWorking();
    this.secureSvc.getUnsecureData().subscribe(
      data => this.output = data,
      err => this.output = err.message
    );
  }
}
