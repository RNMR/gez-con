import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { 
	IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule
 } from "igniteui-angular";
import { SHARED_SERVICES } from './services';
import { ReactiveFormsModule } from '@angular/forms';

const MODULES = [

  CommonModule,
  // RouterModule,
  IgxButtonModule,
  IgxIconModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule,
  IgxInputGroupModule,
  ReactiveFormsModule,
  IgxButtonModule,

]

@NgModule({
  imports: MODULES,
  exports: [
    ...MODULES,
  ],
  providers: [...SHARED_SERVICES],
})
export class SharedModule {}