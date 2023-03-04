import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './admin/category/category.component';
import { LoginComponent } from './auth/login/login.component';
import { PopupModalComponent } from './trial/popup-modal/popup-modal.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "category", component: CategoryComponent },
  { path: "trial", component:PopupModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
