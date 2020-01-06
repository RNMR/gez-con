import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersStartComponent } from './pages/users-start/users-start.component';

const routes: Routes = [
  { path: '', component: UsersStartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}
