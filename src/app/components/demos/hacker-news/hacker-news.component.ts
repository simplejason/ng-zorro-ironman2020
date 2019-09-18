import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hit} from 'interfaces';
import { NzDrawerService } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { HackerNewsService } from '../../../services/hacker-news.service';
import { StoryDetailComponent } from './story-detail/story-detail.component';

@Component({
  selector       : 'app-hacker-news',
  templateUrl    : './hacker-news.component.html',
  styleUrls      : [ './hacker-news.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HackerNewsComponent implements OnInit, OnDestroy {

  currentPage = 1;
  pageSize = 5;
  queryString = '';
  sortType: 'search' | 'search_by_date' = 'search';
  loading = true;
  listOfNews: Hit[] = [];
  // total news count
  totalCount = 0;
  totalRealCount = 0;

  searchControl = new FormControl();
  destroy$ = new Subject();

  options = ['APPLE', 'HUAWEI', 'SONY', 'XIAOMI'];
  filteredOptions = [];

  getStories() {
    this.loading = true;
    this.cdr.markForCheck();
    this.hackerNewsService.getStoriesByAlgolia(this.queryString, this.currentPage - 1, this.pageSize, this.sortType).subscribe(data => {
      this.listOfNews = data.hits;
      this.totalCount = data.nbPages * this.pageSize;
      this.totalRealCount = data.nbHits;
      this.loading = false;
      this.cdr.markForCheck();
    }, (err) => {
      console.error(err);
      this.loading = false;
      this.cdr.markForCheck();
    });
  }

  showDetail(story: Hit) {
    this.nzDrawerService.create({
      nzTitle        : story.title,
      nzContent      : StoryDetailComponent,
      nzWidth        : '100%',
      nzPlacement    : 'right',
      nzContentParams: {
        storyId: story.objectID
      }
    });
  }

  constructor(
    private hackerNewsService: HackerNewsService,
    private nzDrawerService: NzDrawerService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.getStories();

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(query => {
      this.queryString = query || '';
      // to list autocomplete options
      this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(query.toLowerCase()) === 0);
      this.getStories();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
