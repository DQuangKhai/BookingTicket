import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.css']
})
export class LoaiPhimComponent implements OnInit {

  dangChieuStatus: boolean = true;

  constructor() { }


  HienPhimDangChieu(){
    this.dangChieuStatus = true;
  }

  HienPhimSapChieu(){
    this.dangChieuStatus = false;
  }

  ngOnInit() {
  }

}
