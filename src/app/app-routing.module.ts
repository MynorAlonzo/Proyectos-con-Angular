import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component';

const routes: Routes = [
  { path: 'accout', loadChildren: ()=> import('./pages/authentication/authentication.module').then((m)=> m.AuthenticationModule) },
  {path:'start', component : LayoutBaseComponent,
  children:[
    {path:'', loadChildren: ()=> import('./pages/start/start.module').then((m)=>m.StartModule)}
  ]},
  {
    path: 'accout/login', redirectTo: 'accout/login', pathMatch: 'full'
  },
{
  path:'**', redirectTo: 'start', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
