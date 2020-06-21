import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.sass']
})
export class SecondChildComponent implements OnInit {
  @Input() myDirective: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
