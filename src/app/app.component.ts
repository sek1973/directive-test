import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MyTemplateDirective } from './directives/my-template.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'directive-test';
  directiveVisible: boolean = false;
  @ViewChild(MyTemplateDirective, {static: false, read: TemplateRef }) myDirective: TemplateRef<any>;
}
