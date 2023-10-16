import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "../components/alerts/snackbar/snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    public matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }


  openSnackbar(message: string, duration: number = 5000): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: duration, // Duración en milisegundos que se mostrará el Snackbar
      horizontalPosition: 'end', // Posición horizontal del Snackbar (start, center, end)
      verticalPosition: 'bottom', // Posición vertical del Snackbar (top, bottom)
      panelClass: ['custom-snackbar'], // Clase CSS personalizada para estilizar el Snackbar
      data: { message: message, duration:duration } // Datos que se pasan al componente Snackbar
    });
  }

  
}