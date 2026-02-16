import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IncidentService } from '../../../core/services/incident.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-incident-create',
  standalone: true,
  templateUrl: './incident-create.component.html',
  styleUrls: ['./incident-create.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class IncidentCreateComponent {

  private fb = inject(FormBuilder);
  private service = inject(IncidentService);
  private dialogRef = inject(MatDialogRef<IncidentCreateComponent>);
  public data = inject(MAT_DIALOG_DATA, { optional: true });

  loading = false;
  isEditMode: boolean = false;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(200)]],
    service: ['', Validators.required],
    severity: ['SEV3', Validators.required],
    status: ['OPEN'],
    owner: [''],
    summary: ['']
  });

  ngOnInit() {
    console.log('Incoming Data:', this.data); // 👈 check this in console

    if (this.data) {
      this.isEditMode = true;
      this.form.patchValue({
        title: this.data.title,
        severity: this.data.severity,
        status: this.data.status,
        service: this.data.service
      });
    }
  }

  submit() {
    if (this.form.invalid) return;

    this.loading = true;

    if (this.isEditMode) {
      this.service.updateIncident(this.data._id, this.form.value)
        .subscribe(() => {
          this.loading = false;
          this.dialogRef.close(true);
        });
    } else {
      this.service.createIncident(this.form.value)
        .subscribe(() => {
          this.loading = false;
          this.dialogRef.close(true);
        });
    }
  }


  close() {
    this.dialogRef.close();
  }
}
