import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BILL,
  BILLS,
  BILL_EDIT,
  BILL_FORM_STRUCTURE,
} from 'src/app/constants';
import { Bill } from 'src/app/interfaces/bill';
import { BillService } from 'src/app/services/bill.service';
import { UrlParam } from '../../../interfaces/UrlParam';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
})
export class BillListComponent implements OnInit {
  bills: Bill[] = [];
  BILL = BILL;
  BILLS = BILLS;
  BILL_FORM_STRUCTURE = BILL_FORM_STRUCTURE;

  constructor(
    private billService: BillService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onLoadBills();
  }

  onLoadBills = (urlParams?: UrlParam | undefined) => {
    this.billService.getAll(urlParams).subscribe((bills) => {
      this.bills = bills;
    });
  };

  editBill(userId: string) {
    this.router.navigate([BILL_EDIT, userId]); // Navigate to the edit page
  }

  deleteBill = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.billService.delete(userId).subscribe(() => {
        this.billService.getAll().subscribe((u) => {
          this.bills = u;
        });
      });
    }
  };
}
