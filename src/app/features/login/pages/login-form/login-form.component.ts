import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/features/shared/services/authentication.service';

declare var particlesJS: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm :FormGroup;

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthenticationService,
  ) { }

  ngOnInit(): void {
    // particlesJS.load('particles-js', 'particles.json', null);
    particlesJS.load('particles-js', 'assets/particles-resolve.json', function() {
      console.log('callback - particles.js config loaded');
    });
    this.loginForm = this.fb.group({
      user: [null, Validators.required],
      pass:  [null, Validators.required],
    })
  }

  logUser(){
    const user = this.loginForm.get('user').value;
    const pass = this.loginForm.get('pass').value;
    this.authSrv.login(user, pass).subscribe((data)=>{
      console.log(data)
    }, (err)=>{
      console.log(err)
    })
  }
}
