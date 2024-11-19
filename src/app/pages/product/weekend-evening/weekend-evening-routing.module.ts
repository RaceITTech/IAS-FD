import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekendEveningComponent } from './weekend-evening.component';

const routes: Routes = [{ path: '', component: WeekendEveningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekendEveningRoutingModule { }
