import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ScreenService {
  private resizeSource = new Subject<void>();
  public resize$ = this.resizeSource.asObservable();
  largePixels = 780;
  screenWidth: number;
  screenHeight: number;
  constructor() {     
    try {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      window.addEventListener('resize', () => this.onResize())
    } catch (e) {
      console.log(e);
    }
  }

  onResize(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.resizeSource.next();
  }

  isLarge(): boolean {
    return this.screenWidth >= this.largePixels;
  }

}
