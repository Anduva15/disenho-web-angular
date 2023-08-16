import { Component, Input } from '@angular/core';
import { FormItem } from 'src/app/interfaces/FormItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() headerItems: FormItem[] = [];
  @Input() items: any;
  @Input() uriSingular: any;
  @Input() uriPlural: any;
  @Input() onDelete: Function = () => {};
  constructor() {}

  ngOnInit(): void {}
}
