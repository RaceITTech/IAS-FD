import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebinarComponent } from './webinar.component';

const routes: Routes = [{ path: '', component: WebinarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebinarRoutingModule { }
