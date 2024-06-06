import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambresService {

  constructor(private _http: HttpClient) {}

  addChambre(data: any): Observable<any> {
    return this._http.post('https://localhost:7129/api/Chambre', data);
  }

  updateChambre(id: number, data: any): Observable<any> {
    return this._http.put(`https://localhost:7129/api/Chambre/${id}`, data);
  }

  getChambreList(): Observable<any> {
    return this._http.get('https://localhost:7129/api/Chambre');
  }

  deleteChambre(id: number): Observable<any> {
    return this._http.delete(`https://localhost:7129/api/Chambre/${id}`);
  }
}
