import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';


@Component({
  selector: 'app-edit-dsghe',
  templateUrl: './edit-dsghe.component.html',
  styleUrls: ['./edit-dsghe.component.css']
})
export class EditDSGheComponent implements OnInit {

  // @ViewChild(DanhSachGheComponent) DSgheCom;
  // @ViewChild("title") titleHeading:ElementRef;

  constructor() { }

  themGheParent(...thamso: any[]){
    let gheDuocThem = {
      TenGhe: thamso[0],
      SoGhe: thamso[1],
      Gia: thamso[2],
      TrangThai: null 
    }
    if(thamso[3] == "false"){
      gheDuocThem.TrangThai = false;
    }else if(thamso[3] == "true"){
      gheDuocThem.TrangThai = true;
    }

    // this.DSgheCom.ThemGhe(gheDuocThem);
    // this.titleHeading.nativeElement.innerHTML = "Đã thêm ghế!"
  }

  ngOnInit() {
  }

}
