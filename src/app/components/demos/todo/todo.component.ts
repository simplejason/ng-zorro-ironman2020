import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from 'interfaces';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import { NzDrawerRef, NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@Component({
  selector       : 'app-todo',
  templateUrl    : './todo.component.html',
  styleUrls      : [ './todo.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  showAddForm = false;
  createForm: FormGroup;
  activatedTask: ITask;
  drawerRef: NzDrawerRef;

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
   * disable date before today
   */
  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) < 0;
  };

  /**
   * Check the task
   */
  checkTask(task: ITask): void {
    this.listOfTodoTasks = this.listOfTodoTasks.filter(v => v.id !== task.id);
    const successText = this.listOfTodoTasks.length ? '恭喜完成一個任務，繼續加油！' : '恭喜你完成了所有待辦任務！';
    this.nzMessageService.success(successText);
  }

  /**
   * add task
   */
  addTask(): void {
    for (const i in this.createForm.controls) {
      this.createForm.controls[ i ].markAsDirty();
      this.createForm.controls[ i ].updateValueAndValidity();
    }
    if (this.createForm.valid) {
      const newTask = {
        ...this.createForm.getRawValue(),
        id: new Date().getTime()
      };
      this.listOfTodoTasks = this.listOfTodoTasks.concat([ newTask ]);
      // reset after adding new task
      this.createForm.get('name').reset();
      this.nzMessageService.success('成功創建了一個任務，記得完成喔！');
    }
  }

  /**
   * toggle create form state
   */
  showTaskForm(isShow: boolean = false): void {
    if (isShow) {
      // cancel to show form
      this.createForm.reset({
        name    : null,
        deadline: new Date()
      });
    }
    this.showAddForm = isShow;
  }

  /**
   * active task to edit or delete
   */
  setActivatedTask(task: ITask) {
    this.activatedTask = task;
  }

  showEditTask() {
    // hide add form
    this.showTaskForm(false);

    this.drawerRef = this.nzDrawerService.create({
      nzTitle        : this.activatedTask.name,
      nzContent      : TaskDetailComponent,
      nzWidth        : 400,
      nzContentParams: {
        task: this.activatedTask
      }
    });

    this.drawerRef.afterClose.subscribe(task => {
      if (task) {
        this.listOfTodoTasks = this.listOfTodoTasks.map(v => {
          if (v.id === task.id) {
            v = task;
          }
          return v;
        });
        this.cdr.markForCheck();
        this.nzMessageService.success('成功更新了這個任務！');

      }
    });
  }

  /**
   * delete a task
   */
  deleteTask() {
    this.listOfTodoTasks = this.listOfTodoTasks.filter(v => v.id !== this.activatedTask.id);
  }

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private nzMessageService: NzMessageService,
    private nzDrawerService: NzDrawerService
  ) {
    this.createForm = this.fb.group({
      name       : [ null, [ Validators.required ] ],
      description: [ null ],
      isDone     : [ false ],
      deadline   : [ new Date() ]
    });
  }

  ngOnInit() {
  }

}
