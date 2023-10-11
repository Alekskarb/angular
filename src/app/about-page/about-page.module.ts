import {NgModule} from "@angular/core";
import {AboutExtraPageComponent} from "./about-extra-page/about-extra-page.component";
import {AboutPageComponent} from "./about-page.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: 'about', component: AboutPageComponent, children: [
        {path: 'extra', component: AboutExtraPageComponent}
      ]
    }])
  ],
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent,
  ],
  exports: [RouterModule]
})

export class AboutPageModule {
}
