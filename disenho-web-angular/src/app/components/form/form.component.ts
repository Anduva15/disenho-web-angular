import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormItem } from 'src/app/interfaces/FormItem';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() formFields: FormItem[] = [];
  @Input() initialValues: any = {};
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = this.formBuilder.group({});
  dropdownSettings = {
    singleSelection: false,
    idField: 'value',
    textField: 'label',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    enableCheckAll: false,
  };
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: any) {
    if (changes.initialValues && changes.initialValues.currentValue) {
      this.setFormValues(changes.initialValues.currentValue);
    }
  }

  setFormValues(data: any) {
    const formControlsConfig: { [key: string]: any } = {};
    this.formFields.forEach((field) => {
      formControlsConfig[field.name] = [
        data[field.name] || '', // Set initial value if available
        field.validators || [],
      ];
    });

    this.form = this.formBuilder.group(formControlsConfig);
  }

  submitForm() {
    if (this.form.valid) {
      const formValues = Object.keys(this.form.value).reduce((acc, key) => {
        const field = this.formFields.find((field) => key === field.name);

        return {
          ...acc,
          [key]:
            field?.inputType === 'checkbox'
              ? Boolean(this.form.value[key])
              : this.form.value[key],
        };
      }, {});

      this.formSubmit.emit(formValues);
      this.form.reset();
    }
  }
}
