import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-incident-detail',
  standalone: true,
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    NgClass,
    MatIconModule
  ]
})
export class IncidentDetailComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<IncidentDetailComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
