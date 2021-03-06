import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MovieGateway{
    constructor(private _http:HttpClient){}

    public fetchMovieList(){
        return this._http.get(
            "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        )
    }
}