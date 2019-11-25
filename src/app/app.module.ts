import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './features/shared/shared.module';
import { DrawerTriggerService } from './features/shared/services/drawer-trigger.service';
// import { IgxNavigationDrawerModule } from 'igniteui-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // IgxNavigationDrawerModule,
    SharedModule,
  ],
  providers: [DrawerTriggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
