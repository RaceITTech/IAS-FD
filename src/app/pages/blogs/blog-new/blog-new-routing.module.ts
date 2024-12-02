import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogNewComponent } from './blog-new.component';

const routes: Routes = [{ path: '', component: BlogNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogNewRoutingModule { }
