import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.css']
})
export class PhimSapChieuComponent implements OnInit, AfterViewInit {

  DanhSachPhimSapChieu = [
    {TenPhim: "Rambo: Hồi Kết Đẫm Máu", HinhAnh:'../../../assets/img/rambo-hoi-ket-dam-mau-rambo-last-blood-c18-15755193669811_215x318.jpg'},
    {TenPhim: "Hài Đỏ Và Bảy Chú Lùn", HinhAnh:'../../../assets/img/hai-do-va-bay-chu-lun-red-shoes-and-the-seven-dwarfs-15756176377840_215x318.jpg'},
    {TenPhim: "Chồng Cũ, Tình Mới", HinhAnh:'../../../assets/img/chong-cu-tinh-moi-love-again-15753475413923_215x318.jpg'},
    {TenPhim: "Cuộc Giải Cứu Hang Tham Laung - The Cave", HinhAnh:'../../../assets/img/cuoc-giai-cuu-hang-tham-laung-the-cave-15748412700513_215x318.jpg'},
    {TenPhim: "Điệp Viên Ẩn Danh", HinhAnh:'../../../assets/img/diep-vien-an-danh-spies-in-disguise-15747409440171_215x318.jpg'},
    {TenPhim: "Trò Chơi Kỹ Ảo - Jumanji", HinhAnh:'../../../assets/img/phim-sap-chieu.jpg'},
  ];

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
  }

}
