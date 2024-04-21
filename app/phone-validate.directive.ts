import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhoneValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidateDirective,
      multi: true
    }
  ]
})
export class PhoneValidateDirective implements Validator {

  constructor() { }
  validate(control: FormControl): { [key: string]: any } | null {
    const phoneNumberPattern = /^\d{10}$/;

    if (control.value && !phoneNumberPattern.test(control.value)) {
      return { 'invalidPhoneNumber': true };
    }

    return null;
  }
}