import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd';

@Component({
  selector   : 'app-table-drag-sorting',
  templateUrl: './table-drag-sorting.component.html',
  styleUrls  : [ './table-drag-sorting.component.less' ]
})
export class TableDragSortingComponent implements OnInit {
  @ViewChild('virtualTable', { static: false }) nzTableComponent: NzTableComponent;


  listOfData = [];

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.listOfData, event.previousIndex, event.currentIndex);
  }

  /**
   * scroll
   */
  scrollToIndex(index: number): void {
    this.nzTableComponent.cdkVirtualScrollViewport.scrollToIndex(index);
  }

  trackByIndex(_: number, data: VirtualDataInterface): number {
    return data.index;
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 20000; i++) {
      data.push({
        key: i,
        name: `Edward King`,
        age: 32,
        address: `London`
      });
    }
    this.listOfData = data;
  }
}
