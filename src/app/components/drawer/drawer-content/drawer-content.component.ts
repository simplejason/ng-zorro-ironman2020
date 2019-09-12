import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd';

@Component({
  selector       : 'app-drawer-content',
  templateUrl    : './drawer-content.component.html',
  styleUrls      : [ './drawer-content.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerContentComponent implements OnInit {

  @Input() name: string;
  createForm: FormGroup;

  submit() {
    this.nzDrawerRef.close(this.createForm.getRawValue());
  }

  openWithService() {
    const drawerRef = this.nzDrawerService.create({
      nzTitle        : 'Child Drawer Title',
      nzContent      : DrawerContentComponent,
      nzWidth        : 400,
      nzContentParams: {
        name: 'This is a param from child'
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(child Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data, 'child');
    });
  }

  constructor(
    private nzDrawerRef: NzDrawerRef,
    private nzDrawerService: NzDrawerService,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      name       : [ null ],
      description: [ null ],
      deadline   : [ new Date() ]
    });
  }

  ngOnInit() {
  }

}
