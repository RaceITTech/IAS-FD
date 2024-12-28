import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoProductComponent } from './demo-product.component';

const routes: Routes = [{ path: '', component: DemoProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoProductRoutingModule { }
