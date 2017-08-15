//Core Dependancies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//App Routing Module
import { AppRoutingModule } from './app-routing/app-routing.module';

//Components
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { StackFilterPipe } from './stack-filter.pipe';

//Services
import { AboutService } from "./services/about.service";
import { ProjectsService } from "./services/projects.service";
import { ContactService } from "./services/contact.service";




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    StackFilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    AboutService, 
    ProjectsService,
    ContactService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
