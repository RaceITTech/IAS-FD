import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterWebinarComponent } from './register-webinar.component';

const routes: Routes = [{ path: '', component: RegisterWebinarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterWebinarRoutingModule { }
