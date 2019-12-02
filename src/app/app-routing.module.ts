import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from './features/shared/shared.module';

const routes :Routes = [
  {
    path:'login',
    loadChildren: () => import('./features/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/layout/layout.module').then(m=>m.LayoutModule)
  },
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}