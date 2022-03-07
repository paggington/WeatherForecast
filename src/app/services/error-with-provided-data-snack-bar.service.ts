import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ErrorWithProvidedDataSnackBarService {

  constructor(private snack:MatSnackBar) { }
  onError(){

    this.snack.open('Provided data is not valid,try again!','X',{
      duration:5000,
      horizontalPosition:'start',
      verticalPosition:'bottom',// @ts-ignore
      extraClasses: ['notif-success']
    })
    return this.snack._openedSnackBarRef
      ?.onAction().subscribe();
  }
}
