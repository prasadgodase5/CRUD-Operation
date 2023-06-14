import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudservicesService {

  constructor( private http:HttpClient) { }

getD(){
  return this.http.get("http://localhost:3000/posts");
}

postD(data:any){
  return this.http.post("http://localhost:3000/posts",data);
}

deleteD(id:any){
return this.http.delete(`http://localhost:3000/posts/${id}`)
}

updateD(id:any,body:any){
  return this.http.put(`http://localhost:3000/posts/${id}`,body)
}


}
