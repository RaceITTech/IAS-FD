import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpscResidentialProgrammeComponent } from './upsc-residential-programme.component';

const routes: Routes = [{ path: '', component: UpscResidentialProgrammeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpscResidentialProgrammeRoutingModule { }
