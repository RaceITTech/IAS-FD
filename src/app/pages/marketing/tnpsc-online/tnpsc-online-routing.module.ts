import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TnpscOnlineComponent } from './tnpsc-online.component';

const routes: Routes = [{ path: '', component: TnpscOnlineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TnpscOnlineRoutingModule { }
