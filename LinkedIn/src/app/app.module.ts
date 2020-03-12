import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { ProfileComponent } from "./features/profile/profile.component";
import { HomeComponent } from "./features/home/home.component";
import { EducationComponent } from "./features/profile/education/education.component";
import { EducationFormComponent } from "./features/profile/education/education-form/education-form.component";
import { ConfirmationComponent } from './shared/confirmation/confirmation.component';
import { ExperienceComponent } from './features/profile/experience/experience.component';
import { ExperienceFormComponent } from './features/profile/experience/experience-form/experience-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent,
    EducationComponent,
    EducationFormComponent,
    ConfirmationComponent,
    ExperienceComponent,
    ExperienceFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
