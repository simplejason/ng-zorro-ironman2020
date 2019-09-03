import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing.module';

const COMPONENTS = [
  ComponentsComponent,
  ButtonComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports     : [
    CommonModule,
    NgZorroAntdModule,
    ComponentsRoutingModule
  ]
})

export class ComponentsModule {

}
