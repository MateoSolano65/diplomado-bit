import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { SaludoComponent } from './components/saludo/saludo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:AppComponent, pathMatch: 'full' },
  {path: 'login', component:LoginComponent, pathMatch: 'full'},
  {path: 'hijo', component:HijoComponent, pathMatch: 'full'},
  {path: 'saludo', component:SaludoComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
