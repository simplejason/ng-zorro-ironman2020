import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path     : '',
    component: ComponentsComponent,
    children: [
      {
        path: 'button',
        component: ButtonComponent
      },
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full'
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
