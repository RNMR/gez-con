import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/features/shared/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

declare var particlesJS: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm :FormGroup;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authSrv: AuthenticationService,
  ) {
      // redirect to home if already logged in
    if (this.authSrv.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    // particlesJS.load('particles-js', 'particles.json', null);
    particlesJS.load('particles-js', 'assets/particles-resolve.json', function() {
      console.log('callback - particles.js config cargada');
    });
    this.loginForm = this.fb.group({
      user: [null, Validators.required],
      pass:  [null, Validators.required],
    })

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  logUser(){
    const user = this.loginForm.get('user').value;
    const pass = this.loginForm.get('pass').value;
    // console.log("ogin in", user, pass)
    this.authSrv.login(user, pass).pipe(first()).subscribe((data)=>{
      console.log("")
      this.router.navigate([ 'home' ]);
    })
  }
}
