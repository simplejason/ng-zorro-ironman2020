import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IReplyComment } from 'interfaces';
import { HackerNewsService } from '../../../../services/hacker-news.service';

@Component({
  selector       : 'app-story-detail',
  templateUrl    : './story-detail.component.html',
  styleUrls      : [ './story-detail.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryDetailComponent implements OnInit {

  @Input() storyId: string;

  loading = true;
  listOfComments: IReplyComment[];

  getStory() {
    this.loading = true;
    this.hackerNewsService.getStoryByAlgolia(this.storyId).subscribe(data => {
      this.listOfComments = data.children || [];
      this.loading = false;
      this.cdr.markForCheck();
    }, () => {
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
    this.getStory();
  }

}
