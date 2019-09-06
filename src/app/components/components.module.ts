import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { TaskDetailComponent } from './demos/todo/task-detail/task-detail.component';
import { TodoComponent } from './demos/todo/todo.component';
import { LayoutComponent } from './layout/layout.component';

const COMPONENTS = [
  ComponentsComponent,
  ButtonComponent,
  LayoutComponent,
  TodoComponent
];

const MODAL_COMPONENTS = [
  TaskDetailComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...MODAL_COMPONENTS
  ],
  imports     : [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    ComponentsRoutingModule
  ],
  entryComponents: [
    ...MODAL_COMPONENTS
  ]
})

export class ComponentsModule {

}
