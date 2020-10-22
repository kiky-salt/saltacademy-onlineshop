import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalPage: number;
  @Output() newProductEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  counter(): any {
    return new Array(this.totalPage);
  }

  addNewProduct(value: string): any {
    this.newProductEvent.emit(value);
  }
}
