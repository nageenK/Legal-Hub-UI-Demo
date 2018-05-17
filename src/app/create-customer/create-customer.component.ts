import {Customer} from '../customer';
import {DataService} from '../data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})

export class CreateCustomerComponent implements OnInit {
  customer = new Customer;
  router: Router;
  submitted = false;
  constructor(private dataService: DataService,
    private location: Location) {}

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  private save(): void {
    this.dataService.create(this.customer).then(() => {
      this.router.navigateByUrl('/customer');
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }
}
