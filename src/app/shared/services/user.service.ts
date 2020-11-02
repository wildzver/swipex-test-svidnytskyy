import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient
  ) {
  }

  getUsersPage(page): Observable<any> {
    const params = new HttpParams()
      .append('page', page);
    return this.http.get(this.userUrl, {params, observe: 'response'});
  }
}
