import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.css']
})
export class TinTucComponent implements OnInit {

  loaiTinTuc:string = "DienAnh";

  constructor() { }

  ChonLoaiTin(val){
    this.loaiTinTuc = val;
  }

  ngOnInit() {
  }

}
