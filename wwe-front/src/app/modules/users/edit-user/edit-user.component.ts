import { Component, OnInit } from '@angular/core';
import { UserSchema } from '../user.module';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  // property (last creation)
  user:UserSchema={}

  constructor(private route:ActivatedRoute, private api:ApiService, private editroute:Router){}

  ngOnInit(): void {
    this.existingUser(this.user.id)
  }

  existingUser(id:any){
    this.route.params.subscribe((res:any)=>{
      console.log(res);  
      const{id}=res
      console.log(id);
      this.api.getExisting(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.user=res
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
      
    })
  }
// edit
  edit(){
    this.api.updateUser(this.user.id,this.user).subscribe({
      next:(res:any)=>{
        // console.log(res);
        alert('update successfully')
        this.editroute.navigateByUrl("/users")
        
      },
      error:(err:any)=>{
        // console.log(err);
        alert('can not perform operation now')
        
      }
    })

  }

  cancel(userId:any){
    this.existingUser(userId)
  }


}
