import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  exports: [],
  providers: [],
})
export class LoginModule {}