import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

//*******N-3 Basant- 19thJan2020 WITH JWT (+Interceptor)  ************
public login(username:string,password:string) {
  let jwtURL ='http://localhost:8081/authenticate';
return this.http.post<any>(jwtURL,{username,password},{responseType:'text' as 'json'});
}

getStudentsList(): Observable<any> {
  let url ="http://localhost:8081/rest/api/school/";

  return this.http.get(url);
}


 

 
  //********* N-1 WITHOUT JWT  (NOT USED NOW)************
  public login1_notused(username:string,password:string){
    let str= username+":"+password;
    let authString = 'Basic ' + btoa(str);
    let url ='http://localhost:8080/login';
    const headers= new HttpHeaders({Authorization:authString});
    console.log("str11= "+str +" headers ="+headers);
   //M-1 ##### Without Interceptor ##########
    //return this.http.get(url,{headers,responseType:'text' as 'json'});
   //M-1A  (Will not WORK as 'txt' not 'JSON')
   //return this.http.get(url,{headers});
   //M-2 ###### Using INTERCEPTOR ######
     return this.http.get(url,{headers,responseType:'text' as 'json'})
    .pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('basicAuth', authString);
          return userData;
        }
      )
    );
  }
  

 
  // M-2 (With Interceptor... NO username and PAssword (If Logged in!!))
  public getUsers(){
    let url ="http://localhost:8081/allUsers";
    return this.http.get(url);
  }

  
   

//TODO :Use Later
logOut() {
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('basicAuth');
  
}

  //TODO :Use Later
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }


}
