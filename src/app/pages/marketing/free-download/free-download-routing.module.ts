import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeDownloadComponent } from './free-download.component';

const routes: Routes = [{ path: '', component: FreeDownloadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeDownloadRoutingModule { }
