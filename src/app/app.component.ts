import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core'
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modal = false
  @ViewChild(RefDirective) refDir?: RefDirective

  constructor(
    private factory: ViewContainerRef,
    private title: Title,
    private meta: Meta,
  ) {
    const ti = title.getTitle();
    console.log(ti);
    title.setTitle('New Tittle!')
    meta.addTags([
      {name: 'keywords', content: 'angular, google'},
      {name: 'description', content: 'this id angular app'},
    ])
  }

  showModal() {
    const modal = this.refDir?.containerRef.createComponent(ModalComponent);
    modal!.instance.title = 'Dynamic title'
    modal?.instance.close.subscribe(e => {
      this.refDir?.containerRef.clear();
    })
  }
}

