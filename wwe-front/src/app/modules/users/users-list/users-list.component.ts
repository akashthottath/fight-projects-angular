import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserSchema } from '../user.module';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  // property
  
  allusers:UserSchema[]=[]
  
  

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getUserList()
  }
// get all userrs
  getUserList(){
    this.api.getAllUsers().subscribe({
      next:(res:any)=>{
        console.log(res);  
        this.allusers=res     
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  // delete
  deleteUser(id:any){
    this.api.deleteUser(id).subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.getUserList()
        alert('user deleted successfully')

        
      },
      error:(err:any)=>{
        // console.log('err');
        alert('deletetion failed,User Exist')
        
      }
    })
  }

}
