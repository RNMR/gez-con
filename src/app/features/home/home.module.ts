import { NgModule } from "@angular/core";
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { StartComponent } from './pages/start/start.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StartComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [],
})
export class HomeModule {}