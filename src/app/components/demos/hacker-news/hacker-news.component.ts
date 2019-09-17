import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Hit, IBaseStoryType, IStory } from 'interfaces';
import { NzDrawerService } from 'ng-zorro-antd';
import { HackerNewsService } from '../../../services/hacker-news.service';
import { StoryDetailComponent } from './story-detail/story-detail.component';

@Component({
  selector       : 'app-hacker-news',
  templateUrl    : './hacker-news.component.html',
  styleUrls      : [ './hacker-news.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HackerNewsComponent implements OnInit {

  currentPage = 1;
  pageSize = 20;
  queryString = '';
  sortType: 'search' | 'search_by_date' = 'search';
  loading = true;
  listOfNews: Hit[] = [];
  // total news count
  totalCount = 0;
  totalRealCount = 0;

  getStories() {
    this.loading = true;
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
    // this.hackerNewsService.getStories(this.currentPage, this.pageSize, IBaseStoryType.BEST).subscribe(data => {
    //   console.log(data, 'offical data');
    // });
    //
    this.getStories();
  }

}
