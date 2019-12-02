import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appNavScroll]'
})
export class NavScrollDirective {
  @HostBinding('class.show') show: boolean;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    console.log('scrolling....', event.target.documentElement.scrollTop);
    if (event.target.documentElement.scrollTop > 60) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
