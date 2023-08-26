export interface FormItem {
  label: string;
  name: string;
  inputType: string;
  validators?: any;
  options?: Array<{
    label: string;
    value: string;
  }>;
}
