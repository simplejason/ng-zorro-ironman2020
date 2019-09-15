import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Hit, IBaseStoryType, IStory } from 'interfaces';
import { HackerNewsService } from '../../../services/hacker-news.service';

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

  getStories() {
    this.hackerNewsService.getStoriesByAlgolia(this.queryString, this.currentPage, this.sortType).subscribe(data => {
      this.listOfNews = data.hits;
      this.loading = false;
      this.cdr.markForCheck();
      console.log(this.listOfNews);
    }, (err) => {
      console.error(err);
      this.loading = false;
      this.cdr.markForCheck();
    });
  }

  constructor(
    private hackerNewsService: HackerNewsService,
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
