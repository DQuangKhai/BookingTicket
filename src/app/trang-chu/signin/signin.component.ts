import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { UserGateway } from 'src/app/gateways/user.gateway';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private _userGateway: UserGateway,
    private _userService: UserService
  ) { }

  ngOnInit() {
  }

  signinUserHandler(formSignin: NgForm): void{
    this._userGateway.signIn(formSignin.form.value).subscribe(
        res => {
          console.log(res);
          localStorage.setItem("credentials", JSON.stringify(res));
          this._userService.setCredentails(res);
        },
        err => {
          console.log(err);
          
        }
    )
  }

}
