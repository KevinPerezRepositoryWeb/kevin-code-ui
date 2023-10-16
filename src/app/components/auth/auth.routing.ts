import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingUpComponent } from "./sing-up/sing-up.component";


const routes: Routes = [
  { path: '', redirectTo: 'folders', pathMatch: 'full' },
  {
    path: 'sing-up',
    component: SingUpComponent // registrarse
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouting { }