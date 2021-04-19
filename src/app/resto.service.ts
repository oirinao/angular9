import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = 'http://localhost:3000/restaurants'
  rootUrl = 'http://localhost:3000/'

  userList: any = []
  userExists: boolean = false

  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }
  saveRestaurant(data: any) {
    //console.warn("service", data);
    return this.http.post(this.url, data)
  }
  deleteResto(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }
  registerUser(data: any) {
    return this.http.post(this.rootUrl + "users", data)
  }
  findUser(username: string, password: string) {
    return new Promise(resolve => this.http.get(this.rootUrl + "users").subscribe((data) => {
      this.userList = data;
      for (let i = 0; i < this.userList.length; i++) {
        if (this.userList[i].email == username && this.userList[i].password == password) {
          this.userExists = true;
          break;
        }
      }

      resolve(this.userExists);
    }))

  }
  isLoggedIn(){
    return localStorage.getItem('resto-user') ? true : false;
  }
  loginUser(username: string, password: string) {
    this.userExists = false;
    localStorage.setItem("resto-user", "token_test");
  }
  logOut(){
    localStorage.removeItem('resto-user');
  }
}

