import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

export class RandomUserService {
  randomUserUrl = 'https://api.randomuser.me/';

  getUsers(
    pageIndex: number = 1,
    pageSize: number  = 10,
    sortField: string,
    sortOrder: string
  ): Observable<{}> {
    const params = new HttpParams()
    .append('page', `${pageIndex}`)
    .append('results', `${pageSize}`)
    .append('sortField', sortField)
    .append('sortOrder', sortOrder);
    return this.http.get(`${this.randomUserUrl}`, {
      params
    });
  }

  constructor(private http: HttpClient) {
  }
}

@Component({
  selector       : 'app-table-ajax',
  templateUrl    : './table-ajax.component.html',
  styleUrls      : [ './table-ajax.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers      : [ RandomUserService ]
})
export class TableAjaxComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData = [];
  loading = true;
  sortValue: string | null = null;
  sortKey: string | null = null;

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.randomUserService
    .getUsers(this.pageIndex, this.pageSize, this.sortKey, this.sortValue)
    .subscribe((data: any) => {
      this.loading = false;
      this.total = 200;
      this.listOfData = data.results;
      this.cdr.markForCheck();
    });
  }

  sort(sort: { key: string; value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  constructor(
    private randomUserService: RandomUserService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.searchData();
  }

}
