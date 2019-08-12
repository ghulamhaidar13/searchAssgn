import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(
    private http : HttpClient
  ) { }

  getAllProfileData(searchString : String):Observable<any>{
    return this.http.get('https://api.github.com/search/users?q=' + searchString);
  }
  getReposDetailsForSingleUser(name : String): Observable<any>{
    return this.http.get('https://api.github.com/users/'+ name + '/repos')
  }
}
