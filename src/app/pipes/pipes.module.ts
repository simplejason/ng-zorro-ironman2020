import { NgModule } from '@angular/core';
import { HostParsePipe } from './host-parse.pipe';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [
    TimeAgoPipe,
    HostParsePipe
  ],
  exports: [
    TimeAgoPipe,
    HostParsePipe
  ]
})
export class PipesModule {}
