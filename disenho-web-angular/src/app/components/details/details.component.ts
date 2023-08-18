import { Component, Input } from '@angular/core';
import { FormItem } from 'src/app/interfaces/FormItem';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() formItems: FormItem[] = [];
  @Input() item: any;
}
