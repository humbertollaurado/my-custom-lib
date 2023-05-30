import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      This is my component: {{title}}  
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent {

  @Input()
  title: string = '';

}
