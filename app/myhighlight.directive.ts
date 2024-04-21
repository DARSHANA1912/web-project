import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Myhighlight]'
})
export class MyhighlightDirective {

  @Input() Myhighlight:string="";
  constructor(private ele:ElementRef) { }
  @HostListener('mouseover')
  addHighlighter(){
    this.ele.nativeElement.style.backgroundColor=this.Myhighlight;
  }
  @HostListener('mouseout')
  removeHighlighter(){
    this.ele.nativeElement.style.backgroundColor='';
  }
}