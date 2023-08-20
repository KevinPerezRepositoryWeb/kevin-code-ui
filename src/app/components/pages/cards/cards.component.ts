import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { cardAnimate } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [cardAnimate]
})
export class CardsComponent implements OnInit {

  /** ############################################ VARIABLES GLOBALES ############################################33  */
  @ViewChildren("original") original!: QueryList<ElementRef>;

  timing = "500ms ease-in-out";
  search = new FormControl()

  cards: any[] = [
  ]; // Supongamos que tienes un array con los datos de las cards
  currentPage = 0;
  pageSize = 6;

  constructor(
  ) {
    // Ejemplo de datos para llenar las cards
    for (let i = 1; i <= 55; i++) {
      this.cards.push({
        id: i,
        title: `Card ${i}`,
        icon: 'java.svg',
        description: `This is the content of Card ${i}`,
      });
    }
  }

  ngOnInit(): void {
    this.initSearchValueChanges();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getIconImageUrl(iconName: string): string {
    return `assets/icons/${iconName}`;
  }

  obs$!: Observable<any[]>;


  initSearchValueChanges() {
    this.obs$ = this.search.valueChanges.pipe(
      startWith(null), debounceTime(200),
      map(res => res ? this.cards.filter(x => x.title.indexOf(res) >= 0) : this.cards))
  }




}

