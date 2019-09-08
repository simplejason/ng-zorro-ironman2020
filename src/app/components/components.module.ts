import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { TaskDetailComponent } from './demos/todo/task-detail/task-detail.component';
import { TaskListComponent } from './demos/todo/task-list/task-list.component';
import { TodoComponent } from './demos/todo/todo.component';
import { LayoutComponent } from './layout/layout.component';
import { TableDragSortingComponent } from './table/table-drag-sorting/table-drag-sorting.component';
import { TableHeadComponent } from './table/table-head/table-head.component';
import { TableComponent } from './table/table.component';

const COMPONENTS = [
  ComponentsComponent,
  LayoutComponent,
  TodoComponent,
  TaskListComponent,
  ButtonComponent,
  TableComponent
];

const CHILD_COMPONENTS = [
  TableHeadComponent,
  TableDragSortingComponent
];

const MODAL_COMPONENTS = [
  TaskDetailComponent
];

@NgModule({
  declarations   : [
    ...COMPONENTS,
    ...CHILD_COMPONENTS,
    ...MODAL_COMPONENTS
  ],
  imports        : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    ScrollingModule,
    NgZorroAntdModule,
    ComponentsRoutingModule
  ],
  entryComponents: [
    ...MODAL_COMPONENTS
  ]
})

export class ComponentsModule {

}
