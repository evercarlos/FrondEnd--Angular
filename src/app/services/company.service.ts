import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Company } from "../interfaces/company";


@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(
        private _httpClient: HttpClient
    ){}

    findAll():Observable<Company[]> {
        return this._httpClient.get<Company[]>(`http://localhost:8081/api/v1/company`);
    }
    
    save(model:any): Observable<any> {
        return this._httpClient.post<any>('http://localhost:8081/api/v1/company', model);
    }

    find(id:number): Observable<any> {
        return this._httpClient.get<any>(`http://localhost:8081/api/v1/company/${id}`);
    }

    update(model:any): Observable<any> {
        return this._httpClient.put<any>('http://localhost:8081/api/v1/company', model);
    }

    delete(id:number): Observable<any> {
        return this._httpClient.delete<any>(`http://localhost:8081/api/v1/company/${id}`);
    }
}