import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BreadcrumbService } from 'src/app/services/internal/breadcrumb.service';
import { FolderService } from 'src/app/services/apis/folder.service';
import { Subject } from 'rxjs';
import { Folder } from 'src/app/interfaces/folders.interface';
import { LoaderService } from 'src/app/services/loader.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewFolderComponent } from 'src/app/shared/components/new-folder/new-folder.component';

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
export class FoldersComponent implements OnInit, OnDestroy {

  folders: Folder[] = [];

  constructor(
    private alertService: AlertService,
    private router: Router,
    private loaderService: LoaderService,
    private breadcrumbService: BreadcrumbService,
    private supabaseService: FolderService,
    public matDialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.supabaseService.initFolderChanges$().subscribe(res => { })
    this.supabaseService.changeFolderSubscribe$().subscribe(res => {
      console.log("holaaaaaaaa", res)
    })

    this.getAllFolders();
    // Actualiza el breadcrumb con el folder "peliculas"
    this.breadcrumbService.updateBreadcrumb(['Home', 'peliculas']);
  }

  getAllFolders() {
    this.loaderService.open()
    this.supabaseService.getAllFolders().subscribe(res => {
      this.loaderService.close()
      this.folders = res
    });

  }

  newFolder() {
    const dialogRef = this.matDialog.open(NewFolderComponent, {
      width:'350px',
      disableClose: true,
    });

    dialogRef?.afterClosed().subscribe(res => {

    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.folders, event.previousIndex, event.currentIndex);
    this.alertService.openSnackbar('Movido correctamente')
  }


  navigate(folder: Folder) {
    this.router.navigate(['/cards', { folder: folder.id }]);
  }

  ngOnDestroy(): void {
    this.supabaseService.changesFolderUnsubscribe$()
  }

}
