import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TodoComponent } from './demos/todo/todo.component';
import { DrawerComponent } from './drawer/drawer.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path     : '',
    component: ComponentsComponent,
    children : [
      {
        path     : 'button',
        component: ButtonComponent
      },
      {
        path     : 'table',
        component: TableComponent
      },
      {
        path     : 'date-picker',
        component: DatePickerComponent
      },
      {
        path     : 'drawer',
        component: DrawerComponent
      },
      {
        path    : 'demos',
        children: [
          {
            path     : 'todo',
            component: TodoComponent
          },
          {
            path     : '**',
            redirectTo: 'todo',
            pathMatch: 'full'
          }
        ]
      },
      {
        path      : '',
        redirectTo: 'demos',
        pathMatch : 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class ComponentsRoutingModule {

}
