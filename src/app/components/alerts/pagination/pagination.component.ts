import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeOutRightAnimation } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  animations:[fadeOutRightAnimation]
})
export class PaginationComponent   {

  @Input() currentPage = 0;
  @Input() pageSize = 9;
  @Input() totalItems = 0;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
