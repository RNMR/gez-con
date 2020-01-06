import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent, NonExistentComponent } from './pages';

const routes: Routes = [
  { 
    path: '',
    component: MainComponent,
    children: [
      // {
      //   path:'',

      // },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'perfiles',
        loadChildren: () => import('../perfiles/perfiles.module').then(m => m.PerfilesModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
    ]
  },
  {
    path: '**',
    component: NonExistentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
