import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from    '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from  '../contact/contact.component';

const AppRoutes: Routes = [
  { path: "",         component: AboutComponent }, //maybe make a homepage component
  { path: "about",    component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact",  component: ContactComponent },
  // { path: '', redirectTo: '/about', pathMatch: 'full'},
  // { path: '**', redirectTo: '/about', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
