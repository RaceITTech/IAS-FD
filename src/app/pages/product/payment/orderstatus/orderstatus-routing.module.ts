import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderstatusComponent } from './orderstatus.component';

const routes: Routes = [{ path: '', component: OrderstatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderstatusRoutingModule { }
