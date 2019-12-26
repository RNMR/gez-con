import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERFILES_PAGE } from './pages';
import { PerfilesRoutingModule } from './perfiles-routing.mosule';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PERFILES_PAGE
  ],
  imports: [ 
    CommonModule,
    PerfilesRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
})
export class PerfilesModule {}