import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

//Components imports
import { IndexComponent } from "../pages/index/index.component";
import { FahrerComponent } from "../pages/fahrer/fahrer.component";
import { AboutUsComponent } from "../pages/about-us/about-us.component";
import { LoginComponent } from "../pages/login/login.component";
import { SignUpComponent } from "../pages/sign-up/sign-up.component";
import { PageNotFoundComponent } from "../pages/page-not-found/page-not-found.component";
import { UserComponent } from '../pages/user/user.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { UpdateComponent } from '../pages/update/update.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { UsersComponent } from '../pages/users/users.component';
import { StatsComponent } from '../pages/stats/stats.component';
import { DetailsComponent } from '../pages/details/details.component';
import { ContainerComponent } from '../pages/container/container.component';
import { DiagnosticComponent } from '../pages/diagnostic/diagnostic.component';
import { DiagnosticResultsComponent } from '../pages/diagnostic-results/diagnostic-results.component';
import { DiagnosticChatComponent } from '../pages/diagnostic-chat/diagnostic-chat.component';
import { DiagnosticIndexComponent } from '../pages/diagnostic-index/diagnostic-index.component';

const routes : Routes = [
  { path: "", redirectTo: "/undevin/inicio", pathMatch: "full" },
  { path: "undevin", component: ContainerComponent, children: [
    { path: "", redirectTo: "inicio", pathMatch: "full" },
    { path: "inicio", component: IndexComponent },
    { path: "nuestro+proyecto", component: FahrerComponent},
    { path: "conocenos", component: AboutUsComponent},
    { 
      path: "cuenta",
      component: UserComponent,
      children: [
        { path: '', redirectTo: 'perfil', pathMatch: "full" },
        { path: 'resultados', component: ProfileComponent },
        { path: 'editar', component: UpdateComponent }
      ]
    },
    {
      path: "admin",
      component: AdminComponent,
      children: [
        { path: '', redirectTo: 'usuarios', pathMatch: "full" },
        { path: 'usuarios', component: UsersComponent },
        { path: 'estadisticas', component: StatsComponent },
        { path: 'detalles/:id', component: DetailsComponent }
      ]
    }    
  ]},
  { path: 'undevin/diagnostico', component: DiagnosticComponent, children: [
      { path: '', redirectTo: 'menu', pathMatch: "full" },
      { path: 'menu', component: DiagnosticIndexComponent },
      { path: 'chat', component: DiagnosticChatComponent },
      { path: 'resultados', component: DiagnosticResultsComponent }
  ] },
  { path: "dev/entra", component: LoginComponent},
  { path: "dev/registrate", component: SignUpComponent},
  { path: "**", redirectTo: "/undevin/inicio", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
