import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SharedModule } from '../shared/shared.module';
import { USUARIOS_PAGES } from '.';

@NgModule({
  declarations: [
    USUARIOS_PAGES,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: [],
})
export class UsuariosModule {}