import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { ITask } from 'interfaces';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector       : 'app-todo',
  templateUrl    : './todo.component.html',
  styleUrls      : [ './todo.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  showAddForm = false;
  createForm: FormGroup;
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

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private nzMessageService: NzMessageService
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
