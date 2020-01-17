import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
  transform(password: string, visibleDigits: number = 0): string {
    // let maskedSection = password.slice(0, -visibleDigits);
    // let visibleSection = password.slice(-visibleDigits);
    // return maskedSection.replace(/./g, '*') + visibleSection;
    return password.replace(/./g, '*');
  }
}