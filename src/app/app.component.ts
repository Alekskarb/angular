import {Component, OnInit} from '@angular/core'
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form!: FormGroup;
  // controls: Array<AbstractControl<any>> = []
  ngOnInit(): void {
    this.form = new FormGroup<any>({
      email: new FormControl('', [Validators.required , Validators.email, Validators.maxLength(11)]),
      password: new FormControl(null, [Validators.required , Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('by', [Validators.required ]),
        city: new FormControl('', Validators.required ),
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    console.log('Form: ',this.form)
    const dataForm = {...this.form.value}
    console.log('Data Form: ', dataForm)
  }

  setCapital() {
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kiiv',
      by: 'Belarus',
    }
    const key = this.form.get('address')!.get('country')?.value ?? 'ru'
    // @ts-ignore
    const city = cityMap[key]
    this.form.patchValue({address: {city}})
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(control);
    (this.form.get('skills') as FormArray).push(control);
    // this.controls = (this.form.get('skills') as FormArray).controls
  }

  get userFormGroups () {
    return this.form.get('skills') as FormArray
  }
}

