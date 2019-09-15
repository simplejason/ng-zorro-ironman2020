import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PipesModule } from '../../pipes/pipes.module';
import { DemosRoutingModule } from './demos.routing.module';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { TaskDetailComponent } from './todo/task-detail/task-detail.component';
import { TaskListComponent } from './todo/task-list/task-list.component';
import { TodoComponent } from './todo/todo.component';

const COMPONENTS = [
  TodoComponent,
  TaskListComponent,
  HackerNewsComponent
];

const MODAL_COMPONENTS = [
  TaskDetailComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...MODAL_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    DemosRoutingModule,
    PipesModule
  ],
  entryComponents: [
    ...MODAL_COMPONENTS
  ]
})

export class DemosModule {

}
