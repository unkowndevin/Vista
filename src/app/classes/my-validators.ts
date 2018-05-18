import { Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms/src/directives/validators';

export class MyValidators {
    public emailValidator : ValidatorFn[] = [
        Validators.required,
        Validators.maxLength(320),
        Validators.pattern(/^(?:[^<>()[\].,;:\s@"ñÑáéóúíÁÉÓÚÍäëüïöÄËÜÏÖ]+(\.[^<>()[\].,;:\s@"ñÑáéóúíÁÉÓÚÍäëüïöÄËÜÏÖ]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"ñÑáéóúíÁÉÓÚÍäëüïöÄËÜÏÖ]+\.)+[^<>()[\]\.,;:\s@"ñÑáéóúíÁÉÓÚÍäëüïöÄËÜÏÖ]{1,63}$/i),
        Validators.minLength(5)
    ];
    public passwordValidator : ValidatorFn[] = [
        Validators.required,
        Validators.pattern(/[\w\+\-&%$#@=?¡¿,;|°\.]{6,26}$/),
        Validators.minLength(6),
        Validators.maxLength(26)
    ];
    public wordValidator : ValidatorFn[] = [
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-Z]+\s?(?=[a-zA-Z]{0,}(?=\S{2,}))/g)
    ]
}
