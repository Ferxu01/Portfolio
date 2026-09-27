import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [TranslocoPipe],
})
export class AboutComponent {}
