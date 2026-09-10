import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit, OnDestroy {
  private readonly texts = ['Software Engineer', 'UI/UX Designer', 'React Native Developer'];

  private isAlive = true;
  protected readonly displayedText = signal('');

  ngOnInit(): void {
    this.runTypingLoop();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  private async runTypingLoop(): Promise<void> {
    let index = 0;

    while (this.isAlive) {
      const currentText = this.texts[index];

      // 1. Write the text character by character
      for (let i = 1; i <= currentText.length && this.isAlive; i++) {
        this.displayedText.set(currentText.slice(0, i));
        await this.sleep(100);
      }

      // 2. Wait with the complete text displayed
      await this.sleep(2000);

      // 3. Delete the text character by character
      for (let i = currentText.length - 1; i >= 0 && this.isAlive; i--) {
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
