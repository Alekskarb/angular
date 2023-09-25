import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostTemplateComponent } from './post-template/post-template.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostTemplateComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
