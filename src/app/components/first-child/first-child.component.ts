import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.sass']
})
export class FirstChildComponent implements OnInit {
  @Input() myDirective: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
