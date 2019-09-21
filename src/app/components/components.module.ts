import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DrawerContentComponent } from './drawer/drawer-content/drawer-content.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ExperimentalComponent } from './experimental/experimental.component';
import { LayoutComponent } from './layout/layout.component';
import { TableAjaxComponent } from './table/table-ajax/table-ajax.component';
import { TableDragSortingComponent } from './table/table-drag-sorting/table-drag-sorting.component';
import { TableHeadComponent } from './table/table-head/table-head.component';
import { TableComponent } from './table/table.component';

const COMPONENTS = [
  ComponentsComponent,
  LayoutComponent,
  ButtonComponent,
  TableComponent,
  DatePickerComponent,
  DrawerComponent,
  ExperimentalComponent
];

const CHILD_COMPONENTS = [
  TableHeadComponent,
  TableDragSortingComponent,
  TableAjaxComponent
];

const MODAL_COMPONENTS = [
  DrawerContentComponent
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
    ComponentsRoutingModule,
    NzResizableModule
  ],
  entryComponents: [
    ...MODAL_COMPONENTS
  ]
})

export class ComponentsModule {

}
