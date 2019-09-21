import { Component, Input } from '@angular/core';
import { IMenu } from 'interfaces';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  @Input() theme: 'light' | 'dark' = 'dark';
  @Input() collapsed = false;
  @Input() menus: IMenu[] = [];
  @Input() width = 200;

  id = -1;
  onSideResize({ width }: { width: number }): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.width = width;
    });
  }
}
