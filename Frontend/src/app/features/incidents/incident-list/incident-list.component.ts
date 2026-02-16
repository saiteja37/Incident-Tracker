import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../core/services/incident.service';
import { debounceTime, Subject } from 'rxjs';
import { NgClass, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

import { IncidentCreateComponent } from '../incident-create/incident-create.component';
import { IncidentDetailComponent } from '../incident-detail/incident-detail.component';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss'],
  imports: [
    CommonModule,
    NgClass,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatSelectModule
  ]
})
export class IncidentListComponent implements OnInit {

  data: any[] = [];
  totalRecords = 0;
  page = 1;
  limit = 10;
  sortBy = 'createdAt';
  order = 'desc';
  loading = false;

  /** SEARCH */
  searchSubject = new Subject<string>();
  currentSearch = '';

  /** FILTERS (NEW) */
  selectedSeverity: string = '';
  selectedStatus: string = '';

  displayedColumns: string[] = [
    'title',
    'severity',
    'status',
    'createdAt',
    'actions'
  ];

  constructor(
    private service: IncidentService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {}

  private showToast(
    message: string,
    type: 'success' | 'error' | 'delete' = 'success'
  ) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [
        'theme-snackbar',
        type === 'success'
          ? 'theme-snackbar-success'
          : type === 'delete'
          ? 'theme-snackbar-delete'
          : 'theme-snackbar-error'
      ]
    });
  }

  ngOnInit() {
    this.loadData();

    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.page = 1;
        this.currentSearch = value;
        this.loadData();
      });
  }

  loadData() {
    this.loading = true;

    this.service.getIncidents({
      page: this.page,
      limit: this.limit,
      search: this.currentSearch,
      sortBy: this.sortBy,
      order: this.order,

      /** FILTER PARAMS (NEW) */
      severity: this.selectedSeverity || undefined,
      status: this.selectedStatus || undefined
    }).subscribe(res => {
      this.data = [...res.data];
      this.totalRecords = res.totalRecords;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  onSearch(value: string) {
    this.searchSubject.next(value);
  }

  /** FILTER CHANGE HANDLER (NEW) */
  onFilterChange() {
    this.page = 1;
    this.loadData();
  }

  onPageChange(event: any) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.loadData();
  }

  sort(column: string) {
    this.sortBy = column;
    this.order = this.order === 'asc' ? 'desc' : 'asc';
    this.loadData();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(IncidentCreateComponent, {
      width: '550px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showToast('Incident created successfully ✅');
        this.loadData();
      }
    });
  }

  openUpdateDialog(incident: any) {
    const dialogRef = this.dialog.open(IncidentCreateComponent, {
      width: '550px',
      data: incident
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showToast('Incident updated successfully ✏️');
        this.loadData();
      }
    });
  }

  deleteIncident(id: string) {
    if (!confirm('Are you sure you want to delete this incident?')) return;

    this.service.deleteIncident(id).subscribe(() => {
      this.showToast('Incident deleted successfully', 'delete');
      this.loadData();
    });
  }

  viewIncident(incident: any) {
    this.dialog.open(IncidentDetailComponent, {
      width: '500px',
      data: incident
    });
  }
}
