import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IopComponent } from './iop.component';

const routes: Routes = [{ path: '', component: IopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IopRoutingModule { }
