import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { TodoComponent } from './demos/todo/todo.component';
import { LayoutComponent } from './layout/layout.component';

const COMPONENTS = [
  ComponentsComponent,
  ButtonComponent,
  LayoutComponent,
  TodoComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports     : [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    ComponentsRoutingModule
  ]
})

export class ComponentsModule {

}
