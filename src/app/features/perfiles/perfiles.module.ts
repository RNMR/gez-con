import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERFILES_PAGE } from './pages';
import { PerfilesRoutingModule } from './perfiles-routing.mosule';
import { SharedModule } from '../shared/shared.module';
import { PERFILES_COMPONENTS } from './components';

@NgModule({
  declarations: [
    PERFILES_PAGE,
    PERFILES_COMPONENTS,
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