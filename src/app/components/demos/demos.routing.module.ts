import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path     : 'todo',
    component: TodoComponent
  },
  {
    path     : 'hacker-news',
    component: HackerNewsComponent
  },
  {
    path     : '**',
    redirectTo: 'todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DemosRoutingModule {

}
