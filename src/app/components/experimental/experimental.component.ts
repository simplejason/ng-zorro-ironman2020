import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector       : 'app-experimental',
  templateUrl    : './experimental.component.html',
  styleUrls      : [ './experimental.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperimentalComponent implements OnInit {

  width = 400;
  height = 200;
  id = -1;

  onResize({ width, height }: { width: number; height: number }): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.width = width;
      this.height = height;
    });
  }

  constructor() {
  }

  ngOnInit() {
  }

}
