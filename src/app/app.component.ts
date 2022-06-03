import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showsWebIcon = false;
  showsPublicIcon = false;

  @ViewChild('five') divFive!: ElementRef;
  @ViewChild('eight') divEight!: ElementRef;

  private hideAllIcons() {
    this.showsWebIcon = false;
    this.showsPublicIcon = false;
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFive = this.divFive.nativeElement.getBoundingClientRect();
    const boundingRectEight = this.divEight.nativeElement.getBoundingClientRect();

    if (boundingRectFive.top >= 0 && boundingRectFive.bottom <= windowHeight) {
      setTimeout(() => { this.showsWebIcon = true; }, 500);
    } else if (boundingRectEight.top >= 0 && boundingRectEight.bottom <= windowHeight) {
      setTimeout(() => { this.showsPublicIcon = true; }, 500);
    } else {
      this.hideAllIcons();
    }
  }
}
