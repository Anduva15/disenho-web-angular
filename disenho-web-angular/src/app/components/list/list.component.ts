import { Component, Input } from '@angular/core';
import { FormItem } from '../../interfaces/FormItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() formItems: FormItem[] = [];
  @Input() items: any;
  @Input() uriSingular: any;
  @Input() uriPlural: any;
  @Input() onDelete: Function = () => {};
}
