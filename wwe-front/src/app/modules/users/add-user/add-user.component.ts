import { Component } from '@angular/core';
import { UserSchema } from '../user.module';
import { ApiService } from 'src/app/services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  // property
  user:UserSchema={}

  constructor(private api:ApiService,private router:Router){}

  // add button
  addUser(){
    const {id,name,email}=this.user

    if(!id||!name||!email){
      alert('please fill the form correctly')
    }else{
      // alert('save button clicked')
      this.api.addUser(this.user).subscribe({
        next:(res:any)=>{
          alert('New User SuccessFully Added')
          this.router.navigateByUrl("/users")
        },
        error:(err:any)=>
        {
          alert('can not perform action now,please try after some time')
        }
      })

    }
  }
  // cancel button
  cancel(){
    this.user={}
  }
}
