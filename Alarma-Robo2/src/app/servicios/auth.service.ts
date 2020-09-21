import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private user: AngularFireAuth) { }
  login(email: string, pass: string) {
    return this.user.signInWithEmailAndPassword(email, pass);
  }
  register(email: string, pass: string){
    return this.user.createUserWithEmailAndPassword(email, pass);
  }
}
