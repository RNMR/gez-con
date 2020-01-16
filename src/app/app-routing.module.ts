import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from './features/shared/shared.module';
import { AuthGuard } from './features/shared/guard/auth.guard';

const routes :Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren: () => import('./features/login/login.module').then(m=>m.LoginModule),
  },
  {
    path: '',
    loadChildren: () => import('./features/layout/layout.module').then(m=>m.LayoutModule),
    canActivate: [AuthGuard],
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