import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandbooksComponent } from './handbooks.component';

const routes: Routes = [{ path: '', component: HandbooksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandbooksRoutingModule { }
