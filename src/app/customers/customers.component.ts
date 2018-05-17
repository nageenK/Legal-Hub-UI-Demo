import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'customers-list',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})

export class CustomersComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer;
  columns: any;

  constructor(private dataService: DataService) {}

  getCustomers() {
     this.dataService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
     this.getCustomers();
     this.columns = ['First Name', 'Last Name', 'Address', 'Company ID'];
  }

  delete(id): void {
    this.dataService.delete(id).then(() => {
      const item = this.customers.find(cust => cust.id === id);
      this.customers.splice(this.customers.indexOf(item))
    });
  }

  onSelect(cust: Customer): void {
      this.selectedCustomer = cust;
  }

}
