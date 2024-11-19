import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TnpscResidentialComponent } from './tnpsc-residential.component';

const routes: Routes = [{ path: '', component: TnpscResidentialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TnpscResidentialRoutingModule { }
