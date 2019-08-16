import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[appCard]'
})
export class CardDirective {
    constructor(private elem: ElementRef,
                private renderer: Renderer2) {
            const el = this.elem.nativeElement;
            // el.style.background = 'blue';
            renderer.setStyle(el, 'background', 'gray');
    }
}
