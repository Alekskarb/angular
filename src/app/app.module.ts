import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MultiPipe} from "./pipes/multi.pipe";
import { ExMarksPipe } from './pipes/ex-marks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultiPipe,
    ExMarksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
