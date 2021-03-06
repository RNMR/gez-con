import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { 
	IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxCardModule, IgxDividerModule, IgxExpansionPanelModule, IgxListModule, IgxSliderModule, IgxChipsModule, IgxDialogModule, IgxTooltipModule, IgxTabsModule, IgxCheckboxModule, IgxAvatarModule, IgxSelectModule, IgxRadioModule, IgxToastModule
 } from "igniteui-angular";
import { SHARED_SERVICES } from './services';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { PasswordPipe } from './pipies/password.pipe';

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
  IgxDialogModule,
  IgxTooltipModule,
  IgxTabsModule,
  IgxCheckboxModule,
  IgxAvatarModule,
  IgxSelectModule,
  IgxRadioModule,
  IgxToastModule,
  
]

@NgModule({
  declarations: [
    PasswordPipe,
  ],
  imports: MODULES,
  exports: [
    ...MODULES,
    PasswordPipe,
  ],
  providers: [
    ...SHARED_SERVICES,
    {
      provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true 
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true 
    },
  ],
})
export class SharedModule {}