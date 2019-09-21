import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ExperimentalComponent } from './experimental/experimental.component';
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
        path     : 'experimental',
        component: ExperimentalComponent
      },
      {
        path        : 'demos',
        loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)
      },
      {
        path      : '**',
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
