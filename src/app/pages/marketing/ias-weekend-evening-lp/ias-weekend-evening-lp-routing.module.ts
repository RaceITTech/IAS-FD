import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IasWeekendEveningLpComponent } from './ias-weekend-evening-lp.component';

const routes: Routes = [{ path: '', component: IasWeekendEveningLpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IasWeekendEveningLpRoutingModule { }
