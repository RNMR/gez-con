import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { 
	IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxCardModule, IgxDividerModule, IgxExpansionPanelModule, IgxListModule, IgxSliderModule, IgxChipsModule
 } from "igniteui-angular";
import { SHARED_SERVICES } from './services';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header.interceptor';

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
  IgxCardModule,
	IgxDividerModule,
	IgxRippleModule,
	IgxChipsModule,
	IgxSliderModule,
	IgxListModule,
	IgxExpansionPanelModule,

]

@NgModule({
  imports: MODULES,
  exports: [
    ...MODULES,
  ],
  providers: [
    ...SHARED_SERVICES,
    {
      provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true 
    },
  ],
})
export class SharedModule {}