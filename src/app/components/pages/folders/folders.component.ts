import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../alerts/snackbar/snackbar.component';
import { AlertService } from 'src/app/services/alert.service';
import { Constants } from 'src/app/core/Constants';
import { Router } from '@angular/router';

export interface Folders {
  id: string;
  name: string;
  favority?: boolean;
  cards?: number;
}

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  constructor(
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
  }

  folders: Folders[] = [
    { id: '1', name: 'Carpeta Front' },
    { id: '1', name: 'Carpeta Backend' },
    { id: '1', name: 'Carpeta 3' },
    // Agrega más carpetas según tus necesidades
  ];


  onDragStart(event: any) {
    event.dataTransfer.setData('text/plain', event.target.id);
  }

  navigate(folder: Folders) {
    this.router.navigate(['/cards', { folder:folder.id }])
  }

  onDragOver(event: any) {
    console.log("onDragOver-->", event)

    event.preventDefault();
  }

  onDrop(event: any) {
    console.log("onDrop-->", event)
    event.preventDefault();
    const folderId = event.dataTransfer.getData('text/plain');
    const index = this.folders.findIndex(folder => folder.name === folderId);
    const newIndex = this.getChildIndex(event.target) - 1;

    this.folders.splice(newIndex, 0, this.folders.splice(index, 1)[0]);
    this.alertService.openSnackbar(Constants.messages.custom1, 1500);
  }

  getChildIndex(element: any): number {
    const parent = element.parentNode;
    const children = parent.children;

    for (let i = 0; i < children.length; i++) {
      if (children[i] === element) return i;
    }
    return -1;
  }

}
