import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup<any>({
      email: new FormControl('', [Validators.email, Validators.maxLength(11)]),
      password: new FormControl(null, Validators.minLength(6))
    })
  }

  submit() {
    console.log('Form: ',this.form)
    const dataForm = {...this.form.value}
    console.log('Data Form: ', dataForm)
  }
}

