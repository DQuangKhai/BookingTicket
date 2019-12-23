import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.css']
})
export class DanhSachGheComponent implements OnInit {

  DanhSachGhe = [
    {SoGhe:1, TenGhe: "số 1", Gia:100, TrangThai:false},
    {SoGhe:2, TenGhe: "số 2", Gia:100, TrangThai:false},
    {SoGhe:3, TenGhe: "số 3", Gia:100, TrangThai:false},
    {SoGhe:4, TenGhe: "số 4", Gia:100, TrangThai:true},
    {SoGhe:5, TenGhe: "số 5", Gia:100, TrangThai:false},
    {SoGhe:6, TenGhe: "số 6", Gia:100, TrangThai:false},
    {SoGhe:7, TenGhe: "số 7", Gia:100, TrangThai:true},
    {SoGhe:8, TenGhe: "số 8", Gia:100, TrangThai:false},
    {SoGhe:9, TenGhe: "số 9", Gia:100, TrangThai:false},
    {SoGhe:10, TenGhe: "số 10", Gia:100, TrangThai:false},
    {SoGhe:11, TenGhe: "số 11", Gia:100, TrangThai:true},
    {SoGhe:12, TenGhe: "số 12", Gia:100, TrangThai:false},
    {SoGhe:13, TenGhe: "số 13", Gia:100, TrangThai:false},
    {SoGhe:14, TenGhe: "số 14", Gia:100, TrangThai:true},
    {SoGhe:15, TenGhe: "số 15", Gia:100, TrangThai:false},
    {SoGhe:16, TenGhe: "số 16", Gia:100, TrangThai:false},
    {SoGhe:17, TenGhe: "số 17", Gia:100, TrangThai:false},
    {SoGhe:18, TenGhe: "số 18", Gia:100, TrangThai:true},
    {SoGhe:19, TenGhe: "số 19", Gia:100, TrangThai:false},
    {SoGhe:20, TenGhe: "số 20", Gia:100, TrangThai:false},
    {SoGhe:21, TenGhe: "số 21", Gia:100, TrangThai:false},
    {SoGhe:22, TenGhe: "số 22", Gia:100, TrangThai:true},
    {SoGhe:23, TenGhe: "số 23", Gia:100, TrangThai:false},
    {SoGhe:24, TenGhe: "số 24", Gia:100, TrangThai:false},
  ]

  soGheDaDat: number = 0;
  soGheConLai: number = 0;
  DanhSachGheDangDat = [];
  

  constructor() { }

  ngOnInit() {
    for(let ghe of this.DanhSachGhe ){
      if(!ghe.TrangThai){
        this.soGheConLai++;
      }
    }
  }

  DatGheParent(status, ghe){
    if(status){
      this.soGheDaDat++;
      this.soGheConLai--;
      this.DanhSachGheDangDat.push(ghe)
    }
    else{
      this.soGheDaDat--;
      this.soGheConLai++;
      for(let index in this.DanhSachGheDangDat){
        if(this.DanhSachGheDangDat[index].SoGhe === ghe.SoGhe){
          this.DanhSachGheDangDat.splice(parseInt(index), 1)
        }
      }
    }
  }

  ThemGhe(gheDuocThem){
    this.DanhSachGhe.push(gheDuocThem);
  }

}
