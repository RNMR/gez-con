import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LAYOUT_PAGES } from './pages';
import { LAYOUT_COMP } from './components';

@NgModule({
  declarations: [
    LAYOUT_PAGES,
    LAYOUT_COMP
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule,
  ],
  exports: [],
  providers: [],
})
export class LayoutModule {}