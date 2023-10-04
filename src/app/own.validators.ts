import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class OwnValidators {
  static restrictedEmail(control: FormControl): { [key: string]: boolean } | null {
    if (['qq@qq.qq', 'rr@rr.rr'].includes(control.value)) {
      return {incorrectEmail: true}
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> | null {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'aa@aa.aa') {
          return {uniqEmail: true}
        } else {
          return null;
        }
      }, 1000)
    })
  }
}
