//Core Dependancies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//App Routing Module
import { AppRoutingModule } from './app-routing/app-routing.module';

//Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { StackFilterPipe } from './stack-filter.pipe';

//Services
import { FormsService } from "./services/forms.service";
import { ProjectsService } from "./services/projects.service";
import { ContactService } from "./services/contact.service";
import { DropdownModule } from 'ngx-dropdown';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent,
    StackFilterPipe,
    HomeComponent,
    FormsComponent,
    BrowserAnimationsModule
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpModule,
    DropdownModule,
    RouterModule
  ],
  providers: [
    FormsService,
    ProjectsService,
    ContactService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
