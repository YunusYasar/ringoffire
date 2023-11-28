import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
   selector: 'app-dialog-add-player',
   templateUrl: './dialog-add-player.component.html',
   styleUrl: './dialog-add-player.component.scss',
})
export class DialogAddPlayerComponent implements OnInit {
   name: string = '';

   constructor(private dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}

   ngOnInit() {}

   onNoClick(): void {
      this.dialogRef.close();
   }
}
