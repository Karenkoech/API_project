import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  
  {path:'userform',component:UserformComponent},
  {path:'',redirectTo:'/userform',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserformComponent,];
