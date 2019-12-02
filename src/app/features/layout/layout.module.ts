import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LAYOUT_PAGES } from './pages';

@NgModule({
  declarations: [
    LAYOUT_PAGES,
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule,
  ],
  exports: [],
  providers: [],
})
export class LayoutModule {}