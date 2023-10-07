import { Component, Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: Auth
  ) {
    this.form = this.createForm();
  }

  ngOnInit() {}

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async irRegistro() {
    await SplashScreen.show({
      showDuration: 1000,
      autoHide: true,
    });
    this.router.navigate(['/registro']);
  }

  async login() {
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    const singIn = await signInWithEmailAndPassword(this.auth, email, password)
      .then((e) => {
        console.log(e.user);
        SplashScreen.show({
          showDuration: 2000,
          autoHide: true,
        });
        this.router.navigate(['/home']);
      })
      .catch((e) => {
        console.log(e.code);
      });
  }

  esAdmin() {
    this.form.get('email')?.setValue('admin@admin.com');
    this.form.get('password')?.setValue('111111');
  }

  esInvitado() {
    this.form.get('email')?.setValue('invitado@invitado.com');
    this.form.get('password')?.setValue('222222');
  }

  esUser() {
    this.form.get('email')?.setValue('usuario@usuario.com');
    this.form.get('password')?.setValue('333333');
  }

  esAnonimo() {
    this.form.get('email')?.setValue('anonimo@anonimo.com');
    this.form.get('password')?.setValue('444444');
  }

  esTester() {
    this.form.get('email')?.setValue('tester@tester.com');
    this.form.get('password')?.setValue('555555');
  }
}
