import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,  } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitAppComponent } from './git-app/git-app.component';
import { GitRepoComponent } from './git-repo/git-repo.component';
import { GitRepocardComponent } from './git-repocard/git-repocard.component';
import { RepodataComponent } from './repodata/repodata.component';
import { RepositoryComponent } from './repository/repository.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';


@NgModule({
  declarations: [
    AppComponent,
    GitAppComponent,
    GitRepoComponent,
    GitRepocardComponent,
    RepodataComponent,
    RepositoryComponent,
    DashboardComponent,
    ProfileComponent,
    RepositoriesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
