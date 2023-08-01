import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FoldersComponent } from "./folders/folders.component";
import { CodeComponent } from "./code/code.component";
import { CardsComponent } from "./cards/cards.component";

const routes: Routes = [
  { path: '', redirectTo: 'folders', pathMatch: 'full' },
  {
    path: 'folders',
    component: FoldersComponent
  },

  {
    path: 'code',
    component: CodeComponent
  },

  {
    path: 'cards',
    component: CardsComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting { }