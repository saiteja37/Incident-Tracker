import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IncidentService {

  private apiUrl = 'http://localhost:5000/api/incidents';

  constructor(private http: HttpClient) {}

  getIncidents(query: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(query).forEach(key => {
      if (query[key] !== undefined && query[key] !== '') {
        params = params.set(key, query[key]);
      }
    });

    return this.http.get(this.apiUrl, { params });
  }

  getIncident(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createIncident(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updateIncident(id: string, data: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }

  deleteIncident(id: string) {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
