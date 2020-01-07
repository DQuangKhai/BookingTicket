import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserGateway{
    constructor(private _http:HttpClient){}
    
    signUp(user: any): Observable<any>{
        return this._http.post(
            "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            user
        );
    }

    signIn(user: any): Observable<any>{
        return this._http.post(
            "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            user
        );
    }
   
}