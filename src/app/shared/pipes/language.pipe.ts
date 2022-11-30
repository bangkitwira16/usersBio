import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  transform(value: any): string {
    if (value !== undefined)
      return Object.entries(value)
        .map((val) => (val[1] !== false ? val[0] : null))
        .filter((lang) => lang !== null)
        .toString();
    return ''
  }
}
