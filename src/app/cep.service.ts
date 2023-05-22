import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICep } from './cep';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }
  getCep(nCep:string): Observable<ICep[]> {
    return this.http.get<ICep[]>(`http://viacep.com.br/ws/${nCep}/json/`);
}
}
