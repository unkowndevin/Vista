import { trigger, state, style, animate, transition, keyframes } from "@angular/animations";

export class Animations {
    public shakeTranslate = '3'
    public shake : any = trigger('shake', [
        state('unchecked', style({})),
        state('invalid', style({})),
        transition('unchecked => invalid', animate(300, keyframes([
          style({ transform : `translateX(${this.shakeTranslate}%)`}),
          style({ transform : `translateX(-${this.shakeTranslate}%)`}),
          style({ transform : `translateX(${this.shakeTranslate}%)`}),
          style({ transform : `translateX(-${this.shakeTranslate}%)`})
        ])))
        ]);
}

