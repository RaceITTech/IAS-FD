import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentLinkRoutingModule } from './agent-link-routing.module';
import { AgentLinkComponent } from './agent-link.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgentLinkComponent
  ],
  imports: [
    CommonModule,
    AgentLinkRoutingModule,FormsModule
  ]
})
export class AgentLinkModule { }
