import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MovieDetailGateway{
    constructor(private _http:HttpClient){}

    public fetchMovieDetail(ma){
        return this._http.get(
            `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${ma}`
        )
    }
}