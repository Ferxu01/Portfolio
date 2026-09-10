import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, BannerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {}
