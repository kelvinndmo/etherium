import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getBlocks(): Observable<any> {
    return this.http.get<any>(`${this.url}latest10blocks`);
  }

  getOneBlock(hash): Observable<any> {
    return this.http.get<any>(`${this.url}block/${hash}`);
  }

  getTransactionsFromLatestBlock(): Observable<any> {
    return this.http.get<any>(`${this.url}transacations`);
  }
}
