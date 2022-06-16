import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel = new User()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitHandler(){
    //console.log(data)
    console.log(this.userModel)
    this.authService.register(this.userModel).subscribe(response => {
      console.log(response)
    })
  }

}
