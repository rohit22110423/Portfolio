import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ You must import this here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EducationComponent } from './components/education/education.component'; // ✅ Import it

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // ✅ Add this here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
