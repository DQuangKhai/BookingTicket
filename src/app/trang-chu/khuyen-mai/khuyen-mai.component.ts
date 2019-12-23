import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khuyen-mai',
  templateUrl: './khuyen-mai.component.html',
  styleUrls: ['./khuyen-mai.component.css']
})
export class KhuyenMaiComponent implements OnInit {

  DanhSachKhuyenMai = [
    {TieuDeTinTuc: "Khuyến Mãi 1", HinhAnh: '../../../assets/img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746782357665.jpg'},
    {TieuDeTinTuc: "Khuyến Mãi 2", HinhAnh: '../../../assets/img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746782357665.jpg'},
    {TieuDeTinTuc: "Khuyến Mãi 3", HinhAnh: '../../../assets/img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746782357665.jpg'},

  ]

  constructor() { }

  ngOnInit() {
  }

}
