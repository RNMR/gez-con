import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var particlesJS: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  loginForm :FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // particlesJS.load('particles-js', 'particles.json', null);
    particlesJS.load('particles-js', 'assets/particles-resolve.json', function() {
      console.log('callback - particles.js config loaded');
    });
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      pass:  [null, Validators.required],
    })
  }
}
