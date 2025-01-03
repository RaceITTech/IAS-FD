import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpscPrelimsComponent } from './upsc-prelims.component';

const routes: Routes = [{ path: '', component: UpscPrelimsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpscPrelimsRoutingModule { }
