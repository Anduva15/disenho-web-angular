import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from '../../../services/bill.service';
import { Bill } from '../../../interfaces/bill';
import { BILL_FORM_STRUCTURE } from 'src/app/constants';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css'],
})
export class BillDetailComponent implements OnInit {
  BILL_FORM_STRUCTURE = BILL_FORM_STRUCTURE;
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        // Load restaurant data based on route parameter
        const restaurantId = params['id'];
        this.billService.getOne(restaurantId).subscribe((bill) => {
          this.bill = bill;
        });
      }
    });
  }
}
