import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpscOnlineComponent } from './upsc-online.component';

const routes: Routes = [{ path: '', component: UpscOnlineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpscOnlineRoutingModule { }
