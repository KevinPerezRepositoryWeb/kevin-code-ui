import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostBinding, Inject, OnDestroy } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { Subscription, timer } from 'rxjs';
import { Snackbar } from 'src/app/interfaces/snackbar.interface';
import { bounceAnimation, } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    bounceAnimation
]

})
export class SnackbarComponent implements AfterViewInit, OnDestroy {



  progressValue: number = 0;
  progressTimer: Subscription | undefined;
  interval: number = 50; // Intervalo de actualización inicial en milisegundos
  showProgressBar: boolean = true;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: Snackbar,
    private snackBarRef: MatSnackBarRef<SnackbarComponent>
    ) {
  }

  ngAfterViewInit() {
    const steps = Math.floor(this.data.duration / this.interval); // Calcular el número de iteraciones necesarias
    this.progressTimer = timer(0, this.interval).subscribe((value: number) => {
      this.progressValue = (value / steps) * 100;
      if (value >= steps) {
        this.showProgressBar = false;
        // To stop the Observable from emitting any more values.
        if (this.progressTimer) this.progressTimer.unsubscribe();
        this.progressValue = 0;
      }
    });
  }

  ngOnDestroy() {
    if (this.progressTimer) this.progressTimer.unsubscribe();
  }


  close(){
    this.snackBarRef.dismiss();

  }




}
