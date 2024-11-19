import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { studentAuthGuard } from '../../guard/student-auth.guard';

const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [studentAuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
