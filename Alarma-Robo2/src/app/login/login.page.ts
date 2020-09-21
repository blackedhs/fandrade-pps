import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public usuario = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, public router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    const {email, password} = this.usuario.value;
    this.authSvc.login(email, password).
    then(() => this.router.navigate(['/home']) )
    .catch(error => alert(error));
  }
}
