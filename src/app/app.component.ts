import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core'
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modal = false
  @ViewChild(RefDirective) refDir?: RefDirective

  constructor(
    private factory: ViewContainerRef
    // private resolver: ComponentFactoryResolver,
  ) {
  }

  showModal() {
    const modal = this.refDir?.containerRef.createComponent(ModalComponent);
    modal!.instance.title = 'Dynamic title'
    modal?.instance.close.subscribe(e => {
      this.refDir?.containerRef.clear();
    })
  }
}

