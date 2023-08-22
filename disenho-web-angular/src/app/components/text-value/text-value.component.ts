import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-value',
  templateUrl: './text-value.component.html',
  styleUrls: ['./text-value.component.css'],
})
export class TextValue {
  @Input() value: any;
}
