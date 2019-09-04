import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { LayoutComponent } from './layout/layout.component';

const COMPONENTS = [
  ComponentsComponent,
  ButtonComponent,
  LayoutComponent
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
