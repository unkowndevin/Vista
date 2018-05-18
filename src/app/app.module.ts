import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

//Module Imports
import { RoutingModule } from "./routing/routing.module";
import { ChartsModule } from "ng2-charts";

//Components Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { IndexComponent } from './pages/index/index.component';
import { FahrerComponent } from './pages/fahrer/fahrer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UsersComponent } from './pages/users/users.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateComponent } from './pages/update/update.component';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DetailsComponent } from './pages/details/details.component';
import { ContainerComponent } from './pages/container/container.component';
import { DiagnosticComponent } from './pages/diagnostic/diagnostic.component';
import { DiagnosticIndexComponent } from './pages/diagnostic-index/diagnostic-index.component';
import { DiagnosticChatComponent } from './pages/diagnostic-chat/diagnostic-chat.component';
import { DiagnosticResultsComponent } from './pages/diagnostic-results/diagnostic-results.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    IndexComponent,
    FahrerComponent,
    AboutUsComponent,
    LoginComponent,
    SignUpComponent,
    UsersComponent,
    StatsComponent,
    ProfileComponent,
    UpdateComponent,
    UserComponent,
    AdminComponent,
    DetailsComponent,
    ContainerComponent,
    DiagnosticComponent,
    DiagnosticIndexComponent,
    DiagnosticChatComponent,
    DiagnosticResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
