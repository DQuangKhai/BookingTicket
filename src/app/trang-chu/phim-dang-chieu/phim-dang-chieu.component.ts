import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit {

  DanhSachPhimDangChieu = [
    {TenPhim: "Giáng Sinh Đen", HinhAnh:'../../../assets/img/giang-sinh-den-black-christmas-c18-15762070063478_215x318.jpg'},
    {TenPhim: "Giáng Sinh Năm Ấy", HinhAnh:'../../../assets/img/giang-sinh-nam-ay-last-christmas-c13-15718054490893_215x318.jpg'},
    {TenPhim: "Khủng Long Ăn Chay", HinhAnh:'../../../assets/img/khung-long-an-chay-my-tyrano-together-forever-15756181280351_215x318.jpg'},
    {TenPhim: "Mắc Biếc", HinhAnh:'../../../assets/img/mat-biec-15749107627211_215x318.jpg'},
    {TenPhim: "Chị Chị Em Em", HinhAnh:'../../../assets/img/phim-dang-chieu.jpg'},
    {TenPhim: "Bạn Âm 2: Nhật Ký Quỷ Ám - Danur 2: Maddah", HinhAnh:'../../../assets/img/ban-am-2-nhat-ky-quy-am-danur-2-maddah-15760348108622_215x318.jpg'}
  ]

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
