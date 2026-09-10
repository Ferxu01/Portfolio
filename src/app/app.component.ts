import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  imports: [RouterOutlet, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('Portfolio');
}
