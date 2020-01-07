import { Component, OnInit } from '@angular/core';
import { UserGateway } from 'src/app/gateways/user.gateway';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _userGateway: UserGateway) { }

  ngOnInit() {
  }

  signupUserHandler(formSignup: NgForm){
    const newUser = {...formSignup.form.value, maNhom: 'GP01', maLoaiNguoiDung: 'KhachHang'};
    this._userGateway.signUp(newUser).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
