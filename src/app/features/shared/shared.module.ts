import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { 
	IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule
 } from "igniteui-angular";
import { SHARED_SERVICES } from './services';

const MODULES = [
  CommonModule,
  // RouterModule,
  IgxButtonModule,
  IgxIconModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule

]

@NgModule({
  imports: MODULES,
  exports: MODULES,
  providers: [...SHARED_SERVICES],
})
export class SharedModule {}