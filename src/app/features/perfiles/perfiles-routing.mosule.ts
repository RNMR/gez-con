import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPComponentComponent } from './pages';

const routes: Routes = [
  { path: '', component: StartPComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule {}
