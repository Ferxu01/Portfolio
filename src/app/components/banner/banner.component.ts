import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  imports: [TranslocoPipe],
})
export class BannerComponent implements OnInit, OnDestroy {
  private readonly translocoService = inject(TranslocoService);

  private readonly texts = ['SOFTWARE_ENGINEER', 'FULLSTACK_DEVELOPER', 'ANGULAR_DEVELOPER'];

  private readonly isAlive = signal(true);
  protected readonly displayedText = signal('');

  ngOnInit(): void {
    this.runTypingLoop();
  }

  ngOnDestroy(): void {
    this.isAlive.set(false);
  }

  private async runTypingLoop(): Promise<void> {
    let index = 0;

    // Ensures that the current translations file is completely loaded before beginning the loop
    await firstValueFrom(this.translocoService.selectTranslation());

    while (this.isAlive()) {
      const currentText = this.translocoService.translate(this.texts[index]);

      // 1. Write the text character by character
      for (let i = 1; i <= currentText.length && this.isAlive(); i++) {
        this.displayedText.set(currentText.slice(0, i));
        await this.sleep(100);
      }

      // 2. Wait with the complete text displayed
      await this.sleep(2000);

      // 3. Delete the text character by character
      for (let i = currentText.length - 1; i >= 0 && this.isAlive(); i--) {
        this.displayedText.set(currentText.slice(0, i));
        await this.sleep(50);
      }

      index = (index + 1) % this.texts.length;
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
