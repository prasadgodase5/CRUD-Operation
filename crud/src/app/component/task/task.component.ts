import { Component } from '@angular/core';
import{FormControl,Validators,FormBuilder, FormGroup} from '@angular/forms'
import { CrudservicesService } from 'src/app/crudservices.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  loginform!:FormGroup


  constructor(private fb:FormBuilder ,  private http:CrudservicesService){

    this.loginform=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      seat:['',Validators.required],
      state:['',Validators.required],
    })

  }

  get name(){
    return this.loginform.controls['name'];
  }
  get email(){
    return this.loginform.controls['email'];
  }
  get seat(){
    return this.loginform.controls['seat'];
  }
  get state(){
    return this.loginform.controls['state'];
  }

ngOnInit(){
  this.getdata();
}

i:any;

getdata(){
  this.http.getD().subscribe(res =>{
    this.i=res;

    
  })
}

postdata(){
  this.http.postD(this.loginform.value).subscribe(res =>{
    this.getdata();
    location.reload();
  })
}

update:any;
editdata(item:any,id:any){
this.name.setValue(item.name)
this.email.setValue(item.email)
this.seat.setValue(item.seat)
this.state.setValue(item.state)
this.update=id;
}


updatedata(){
  let body=this.loginform.value;
  this.http.updateD(this.update,body).subscribe(res =>{
    this.getdata();
  })
}

deletedata(id:any){
  this.http.deleteD(id).subscribe(res =>{
    this.getdata();

  })
}

}