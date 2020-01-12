import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersStartComponent } from './pages/users-start/users-start.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: UsersStartComponent },
  { path: 'detalle/:user', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}
