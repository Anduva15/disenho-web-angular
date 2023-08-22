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
  @Input() onSearch: Function = () => {};

  searchItems = [
    {
      label: undefined,
      value: undefined,
    },
  ];

  onAddNewRow() {
    this.searchItems.push({
      label: undefined,
      value: undefined,
    });
  }

  onResetSearch() {
    this.searchItems = [
      {
        label: undefined,
        value: undefined,
      },
    ];
    this.onSearch();
  }

  onClearSearchField(index: number) {
    const newSearchItems = this.searchItems.filter((_, i) => index !== i);
    this.searchItems = newSearchItems.length
      ? newSearchItems
      : [
          {
            label: undefined,
            value: undefined,
          },
        ];
  }

  searchWithParams() {
    const params = this.searchItems.reduce(
      (acc, searchItem) =>
        searchItem.label && searchItem.value
          ? { ...acc, [searchItem.label]: searchItem.value }
          : acc,
      {}
    );

    this.onSearch(params);
  }
}
