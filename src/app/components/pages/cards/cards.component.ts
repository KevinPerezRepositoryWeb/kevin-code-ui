import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {



  cards: any[] = [
  ]; // Supongamos que tienes un array con los datos de las cards
  currentPage = 0;
  pageSize = 9;

  constructor() {
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

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getIconImageUrl(iconName: string): string {
    return `assets/icons/${iconName}`;
  }

}
