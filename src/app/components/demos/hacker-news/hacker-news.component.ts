import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IBaseStoryType } from 'interfaces';
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

  constructor(
    private hackerNewsService: HackerNewsService
  ) {
  }

  ngOnInit() {
    this.hackerNewsService.getStories(this.currentPage, this.pageSize, IBaseStoryType.BEST).subscribe(data => {
      console.log(data, 'offical data');
    });

    this.hackerNewsService.getStoriesByAlgolia().subscribe(data => {
      console.log(data, 'algolia data');
    });
  }

}
