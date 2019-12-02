import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from './features/shared/shared.module';

const routes :Routes = [
  {
    path: '',
    loadChildren: () => import('./features/layout/layout.module')
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}