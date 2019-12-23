import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dien-anh',
  templateUrl: './dien-anh.component.html',
  styleUrls: ['./dien-anh.component.css']
})
export class DienAnhComponent implements OnInit {

  DanhSachDienAnh = [
    {TieuDeTinTuc:"Marvel mua lại DC", HinhAnh:'../../../assets/img/dien-anh.jpg'},
    {TieuDeTinTuc:"Marvel mua lại DC", HinhAnh:'../../../assets/img/dien-anh.jpg'},
    {TieuDeTinTuc:"Marvel mua lại DC", HinhAnh:'../../../assets/img/dien-anh.jpg'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
