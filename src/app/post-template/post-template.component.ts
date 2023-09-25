import { Component } from '@angular/core';

@Component({
  selector: 'app-post-template',
  template: `<div>html into ts-file</div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, in!</p>
  `,
  styles: [`.post {
    padding: 12px;
    border: 2px solid black;
}`]
})
export class PostTemplateComponent {

}
