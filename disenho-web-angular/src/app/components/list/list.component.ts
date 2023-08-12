import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() headerItems: any;
  @Input() items: any;
  @Input() uriSingular: any;
  @Input() uriPlural: any;
  @Input() onDelete: Function = () => {};
  constructor() {}

  ngOnInit(): void {}
}
