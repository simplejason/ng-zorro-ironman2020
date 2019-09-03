import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
