import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { collapseMotion, fadeMotion, moveUpMotion } from 'ng-zorro-antd';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [collapseMotion, fadeMotion, moveUpMotion],
})
export class AnimationsComponent implements OnInit {

  isCollapseActive = false;
  isFadeActive = false;
  isMoveActive = false;

  constructor() { }

  ngOnInit() {
  }

}
