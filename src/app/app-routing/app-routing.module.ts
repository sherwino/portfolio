import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "../home/home.component";
import { FormsComponent } from    '../forms/forms.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from  '../contact/contact.component';

const AppRoutes: Routes = [
  { path: "",         component: HomeComponent }, //maybe make a homepage component
  { path: "forms",    component: FormsComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact",  component: ContactComponent },
  // { path: '', redirectTo: '/form', pathMatch: 'full'},
  // { path: '**', redirectTo: '/form', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
