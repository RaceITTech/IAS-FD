import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentLinkComponent } from './agent-link.component';

const routes: Routes = [{ path: '', component: AgentLinkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentLinkRoutingModule { }
