import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Folders {
  id: string;
  name: string;
  favority?: boolean;
  cards?: number;
}

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css'],
})
export class FoldersComponent implements OnInit {

  constructor(
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
  }

  todo = ['todo1', 'todo2', 'todo3', 'todo4'];

hola(){
  console.log("estoy caegando")
  return 1000;
}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
    this.alertService.openSnackbar('Movido correctamente')
  }

  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  onDrag(event: MouseEvent) {
    if (!this.isNavOpen) return;

    const navStyle = window.getComputedStyle(event.currentTarget as HTMLElement);
    const navTop = parseInt(navStyle.top);
    const navHeight = parseInt(navStyle.height);
    const windHeight = window.innerHeight;
    const movementY = event.movementY;

    const nav = event.currentTarget as HTMLElement;
    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : '1px';
    if (navTop > windHeight - navHeight) {
      nav.style.top = `${windHeight - navHeight}px`;
    }
  }

  onMouseDown(event: MouseEvent) {
    if (this.isNavOpen) {
      const nav = event.currentTarget as HTMLElement;
      nav.addEventListener('mousemove', this.onDrag.bind(this));
      nav.addEventListener('mouseup', this.onMouseUp.bind(this));
      nav.addEventListener('mouseleave', this.onMouseUp.bind(this));
    }
  }

  onMouseUp(event: MouseEvent) {
    const nav = event.currentTarget as HTMLElement;
    nav.removeEventListener('mousemove', this.onDrag.bind(this));
    nav.removeEventListener('mouseup', this.onMouseUp.bind(this));
    nav.removeEventListener('mouseleave', this.onMouseUp.bind(this));
  }
  
}
