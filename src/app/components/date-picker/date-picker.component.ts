import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { en_US, NzI18nService, zh_TW } from 'ng-zorro-antd';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent implements OnInit {

  today = new Date();
  isEnglish = false;

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_TW : en_US);
    this.isEnglish = !this.isEnglish;
  }

  constructor(private i18n: NzI18nService) {}

  ngOnInit() {
  }

}
