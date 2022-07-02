import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Directive({
  selector: '[screenSmall]'
})
export class ScreenSmallDirective implements OnInit {
  @Input() set screenLarge(condition: boolean) {
    condition = this.screenService.screenWidth < this.screenService.largePixels;
    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }
  private hasView = false;

  constructor(
    private template: TemplateRef<Object>, 
    private screenService: ScreenService, 
    private viewContainer: ViewContainerRef
  ) { 
    screenService.resize$.subscribe(() => {
      this.onResize();
    })
  }

  ngOnInit() {
    this.onResize();
  }

  onResize() {
    this.screenLarge = false;
  }
}
