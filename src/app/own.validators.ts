import {AbstractControl, FormControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

export class OwnValidators {
  static restrictedEmail(control: AbstractControl): { [key: string]: boolean } | null {
    if (['qq@qq.qq', 'rr@rr.rr'].includes(control.value)) {
      return {incorrectEmail: true}
    }
    return null;
  }

  static uniqEmail(control: AbstractControl): Promise<ValidationErrors|null> | Observable<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'aa@aa.aa') {
          resolve({uniqEmail: true})
        } else {
          resolve(null);
        }
      }, 1000)
    })
  }
}
