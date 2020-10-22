import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  totalPage = 15;
  items = ['item1', 'item2', 'item3', 'item4'];
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(event): void {
    this.items.push(event);
  }
}
