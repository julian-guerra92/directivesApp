import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _message: string = 'This field is required!!'
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  };

  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  };

  @Input() set valid(value: boolean) {
    (value === true) ?
      this.htmlElement.nativeElement.classList.remove('hidden') :
      this.htmlElement.nativeElement.classList.add('hidden')
  };

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = element;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  setStyle() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }

}
