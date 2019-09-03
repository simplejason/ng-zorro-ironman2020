import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing.module';

const COMPONENTS = [ ComponentsComponent ];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports     : [
    CommonModule,
    ComponentsRoutingModule
  ]
})

export class ComponentsModule {

}
