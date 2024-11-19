import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekendEveningLpComponent } from './weekend-evening-lp.component';

const routes: Routes = [{ path: '', component: WeekendEveningLpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekendEveningLpRoutingModule { }
