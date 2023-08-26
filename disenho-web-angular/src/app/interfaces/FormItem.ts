export interface FormItem {
  label: string;
  name: string;
  inputType: string;
  validators?: any;
  disabled?: boolean;
  options?: Array<{
    label: string;
    value: string;
  }>;
}
