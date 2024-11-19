import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentUploadComponent } from './student-upload.component';

const routes: Routes = [{ path: '', component: StudentUploadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentUploadRoutingModule { }
