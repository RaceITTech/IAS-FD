import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpscResidentialComponent } from './upsc-residential.component';

const routes: Routes = [{ path: '', component: UpscResidentialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpscResidentialRoutingModule { }
