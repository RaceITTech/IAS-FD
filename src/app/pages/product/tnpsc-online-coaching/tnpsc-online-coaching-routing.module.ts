import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TnpscOnlineCoachingComponent } from './tnpsc-online-coaching.component';

const routes: Routes = [{ path: '', component: TnpscOnlineCoachingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TnpscOnlineCoachingRoutingModule { }
