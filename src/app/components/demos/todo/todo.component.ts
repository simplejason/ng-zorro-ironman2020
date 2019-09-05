import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ITask } from 'interfaces';

@Component({
  selector       : 'app-todo',
  templateUrl    : './todo.component.html',
  styleUrls      : [ './todo.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  tableWidthConfig = [
    '30px',
    '600px',
    '50px'
  ];
  today = new Date();
  listOfTodoTasks: ITask[] = [
    {
      id         : 1,
      name       : '測試任務 - 1',
      description: '這是第一個測試任務',
      deadline   : new Date(),
      isDone     : false
    },
    {
      id         : 2,
      name       : '測試任務 - 2',
      description: '這是第二個測試任務',
      deadline   : new Date(),
      isDone     : false
    }
  ];


  /**
   * Check the task
   */
  checkTask(task: ITask): void {
    this.listOfTodoTasks = this.listOfTodoTasks.filter(v => v.id !== task.id);
    console.log(task, 'done');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
