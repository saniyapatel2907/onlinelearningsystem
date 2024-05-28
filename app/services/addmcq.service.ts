import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addmcq } from '../models/addmcq';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddmcqService {
  private baseUrl:string="http://localhost:8081/online_learning_system/question"
  constructor(private http:HttpClient) { }
 newAddmcq(A:Addmcq):Observable<Addmcq>
 {
   return this.http.post<Addmcq>(`${this.baseUrl}`,A);
 }
 getAll():Observable<Addmcq[]>
 {
   return this.http.get<Addmcq[]>(`${this.baseUrl}`);

 }
 getAllLang(lang:any):Observable<Addmcq[]>
 {
   return this.http.get<Addmcq[]>(`${this.baseUrl}/`+lang);

 }
}
