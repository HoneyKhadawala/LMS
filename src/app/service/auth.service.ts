import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  login(data: any) {
    this.http.post("https://reqres.in/api/login", data).subscribe((result: any) => {
      localStorage.setItem('token', result.token);
      this.route.navigate(['category']);
    })
  }

  postCategory(data:any)
  {
    return this.http.post<any>("http://localhost:3000/post",data).pipe(
      map(res=>{
        return res;
      })
    )
  }

  getCategory()
  {
    return this.http.get<any>("http://localhost:3000/post").pipe(
      map(res=>{
        return res;
      })
    )
  }

  putCategory(data:any, id:number)
  {
    return this.http.put<any>("http://localhost:3000/post/"+id,data).pipe(
      map(res=>{
        return res;
      })
    )
  }

  deleteCategory(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/post/"+id).pipe(
      map(res=>{
        return res;
      })
    )
  }
}
