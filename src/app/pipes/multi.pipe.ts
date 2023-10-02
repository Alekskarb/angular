import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
name: 'multi'
})
export class MultiPipe implements PipeTransform {
    transform(value: number, pow: number): number {
        // throw new Error("Method not implemented.");
      return value * pow
    }

}
