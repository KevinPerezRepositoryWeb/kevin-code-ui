import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoaderDialogComponent } from "../components/alerts/loader-dialog/loader-dialog.component";

@Injectable({
    providedIn: 'root',
  })
  export class LoaderService {
    dialogRef!: MatDialogRef<LoaderDialogComponent>;
  
    constructor(private dialog: MatDialog) { }
    /**
     *
     *
     * @param {LoaderData} [data={}]
     * @return {*}  {Observable<boolean>}
     * @memberof LoaderService
     */
    public open() {

      this.dialogRef = this.dialog.open(LoaderDialogComponent, {
        disableClose: true,
      });
  
      return this.dialogRef?.afterClosed();
    }
    /**
     *
     *
     * @memberof LoaderService
     */
    public close() {
      this.dialogRef.close();
    }
  
  }