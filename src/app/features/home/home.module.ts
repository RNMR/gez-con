import { NgModule } from "@angular/core";
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { StartComponent } from './pages/start/start.component';

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