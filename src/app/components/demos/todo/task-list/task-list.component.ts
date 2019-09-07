import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ITask } from 'interfaces';
import { NzDrawerRef, NzDrawerService, NzMessageService } from 'ng-zorro-antd';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector       : 'app-task-list',
  templateUrl    : './task-list.component.html',
  styleUrls      : [ './task-list.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers      : [
    {
      provide    : NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaskListComponent),
      multi      : true
    }
  ]
})
export class TaskListComponent implements OnInit, ControlValueAccessor {
  listOfTasks: ITask[] = [];
  drawerRef: NzDrawerRef;
  activatedTask: ITask;

  tableWidthConfig = [
    '30px',
    '600px',
    '50px'
  ];

  /**
   * Check the task
   */
  checkTask(task: ITask): void {
    this.listOfTasks = this.listOfTasks.filter(v => v.id !== task.id);
    this.onChange(this.listOfTasks);
    const successText = this.listOfTasks.length ? '恭喜完成一個任務，繼續加油！' : '恭喜你完成了所有待辦任務！';
    this.nzMessageService.success(successText);
  }

  showEditTask() {
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
        this.listOfTasks = this.listOfTasks.map(v => {
          if (v.id === task.id) {
            v = task;
          }
          return v;
        });
        this.onChange(this.listOfTasks);
        this.nzMessageService.success('成功更新了這個任務！');
      }
    });
  }

  /**
   * delete a task
   */
  deleteTask() {
    this.listOfTasks = this.listOfTasks.filter(v => v.id !== this.activatedTask.id);
    this.onChange(this.listOfTasks);
  }

  /**
   * active task to edit or delete
   */
  setActivatedTask(task: ITask) {
    this.activatedTask = task;
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private nzMessageService: NzMessageService,
    private nzDrawerService: NzDrawerService
  ) {
  }

  ngOnInit() {
  }

  /**
   * Update ngModel -> update listOfSelectedValue
   */
  onChange: (value: ITask[]) => void = () => [];
  onTouched: () => void = () => null;

  writeValue(tasks: ITask[]): void {
    if (tasks) {
      this.listOfTasks = [ ...tasks ];
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn: (value: ITask[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
