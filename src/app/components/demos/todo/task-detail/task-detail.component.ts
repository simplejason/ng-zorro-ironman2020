import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from 'interfaces';
import { NzDrawerRef } from 'ng-zorro-antd';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';

@Component({
  selector       : 'app-task-detail',
  templateUrl    : './task-detail.component.html',
  styleUrls      : [ './task-detail.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDetailComponent implements OnInit {

  @Input() task: ITask;
  createForm: FormGroup;

  /**
   * disable date before today
   */
  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) < 0;
  };


  cancelEdit(data: ITask | null = null) {
    this.nzDrawerRef.close(data);
  }

  editTaskData() {
    this.cancelEdit({
      ...this.task,
      ...this.createForm.getRawValue()
    });
  }

  constructor(
    private nzDrawerRef: NzDrawerRef,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      name       : [ null, [ Validators.required ] ],
      description: [ null ],
      isDone     : [ false ],
      deadline   : [ new Date() ]
    });
  }

  ngOnInit() {
    this.createForm.reset({
      ...this.task
    });
  }

}
