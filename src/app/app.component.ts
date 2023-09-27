import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'strings';
  number = 'strings';
  arr = [1,2,3]
  obj = {a: 1, b: {c:2}}
  img = 'https://topcraft.by/wp-content/uploads/2019/04/Avtomojka-Top-Craft.jpg';
  inputValue = '';
  toggleBG: any = false;

  constructor() {
    // super(props);
    setTimeout(()=> {
      this.img = 'https://topcraft.by/wp-content/uploads/2019/09/Top_Craft_021-667x667.jpg'
    }, 2000)
  }

  inputHandler(e: Event) {
    console.log('input event :', e)
    this.inputValue = (<HTMLInputElement>e.target).value
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

  protected readonly event = event;
}
