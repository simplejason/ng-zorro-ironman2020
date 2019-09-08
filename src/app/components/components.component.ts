import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector       : 'app-components',
  templateUrl    : './components.component.html',
  styleUrls      : [ './components.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent implements OnInit {
  collapsed = false;
  theme = 'dark';
  menus = [
    {
      level   : 1,
      title   : 'Components',
      icon    : 'home',
      open    : false,
      children: [
        {
          level: 2,
          title: 'Button',
          path : [ '/components', 'button' ],
          icon : 'tag'
        },
        {
          level: 2,
          title: 'Table',
          path : [ '/components', 'table' ],
          icon : 'tag'
        }
      ]
    },
    {
      level   : 1,
      title   : 'Demos',
      icon    : 'build',
      open    : true,
      children: [
        {
          level: 2,
          title: '待辦事項',
          path : [ '/components', 'demos', 'todo' ],
          icon : 'edit'
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
