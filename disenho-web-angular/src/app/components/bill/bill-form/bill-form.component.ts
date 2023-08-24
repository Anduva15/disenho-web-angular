import { Component } from '@angular/core';
import { omit } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

import { BILLS, BILL_FORM_STRUCTURE } from 'src/app/constants';
import { BillService } from '../../../services/bill.service';
import { Bill } from '../../../interfaces/bill';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css'],
})
export class BillFormComponent {
  isNew: boolean = true;
  formFields = BILL_FORM_STRUCTURE;

  bill: Bill = {
    id: 0,
  totalAmount: 0,
  clients: [],
  entryDate: new Date(),
  exitDate: new Date(),
  reservationDate: new Date(),
  reservationId: "",
  bar: false,
  restaurantId: "",
  status: "",
  };

  constructor(
    private billService: BillService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load ACCOUNT data if editing an existing ACCOUNT
        const BILLId = params['id'];
        this.billService.getOne(BILLId).subscribe((BILL) => {
          this.bill = BILL;
          this.isNew = false;
        });
      }
    });
  }

  onSubmit(formData: any) {
    // Update ACCOUNT data with form data
    this.bill = { ...this.bill, ...formData };

    if (this.isNew) {
      this.billService.create(omit(this.bill, ['id'])).subscribe(() => {
        // Redirect to ACCOUNT list after successful creation
        this.router.navigate([BILLS]);
      });
    } else {
      this.billService
        .update(this.bill.id as number, this.bill)
        .subscribe(() => {
          // Redirect to ACCOUNT list after successful update
          this.router.navigate([BILLS]);
        });
    }
  }
}
