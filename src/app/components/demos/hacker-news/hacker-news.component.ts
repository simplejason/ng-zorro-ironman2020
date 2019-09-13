import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HackerNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
