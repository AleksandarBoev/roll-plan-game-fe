import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreModifierCalc',
  standalone: false
})
export class ScoreModifierCalcPipe implements PipeTransform {

  transform(stat: number | undefined): string {
    if (!stat) {
      return '';
    }

    let result: number = stat;
    result = (result - 10) / 2;

    result = Math.trunc(result);
    if (result > 0) {
      return '+' + result;
    } else {
      return result.toString();
    }
  }
}
