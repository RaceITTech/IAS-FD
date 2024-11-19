import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpsWeekendEveningLpComponent } from './ips-weekend-evening-lp.component';

const routes: Routes = [{ path: '', component: IpsWeekendEveningLpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpsWeekendEveningLpRoutingModule { }
