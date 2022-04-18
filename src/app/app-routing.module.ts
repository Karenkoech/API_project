import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';



const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/' },
  { path: '', component: DashboardComponent    },
  { path: 'profile', component: ProfileComponent },
  { path: 'repositories',  component: RepositoriesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
