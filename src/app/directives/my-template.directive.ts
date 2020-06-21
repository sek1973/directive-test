import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyTemplate]'
})
export class MyTemplateDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
