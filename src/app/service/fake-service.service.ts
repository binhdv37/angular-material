import { Injectable } from '@angular/core';
import {Permission, PermissionInfo} from '../model/permission.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceService {
  data: PermissionInfo;

  constructor(private http: HttpClient) {
    this.http.get<PermissionInfo>('url').subscribe(x => this.data = x);
  }

  public getData(){
      return this.data;
  }

}
