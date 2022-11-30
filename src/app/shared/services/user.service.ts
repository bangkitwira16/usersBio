import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSrc = new BehaviorSubject<any>([]);
  users = this.usersSrc.asObservable();
  userKey = 'users'
  constructor() {}

  addUser(payload: any) {
    let users = JSON.parse(localStorage.getItem(this.userKey) || '[]');
    
    users.push(payload);
    localStorage.setItem(this.userKey, JSON.stringify(users));
  }

  getUsers() {
    let users = JSON.parse(localStorage.getItem(this.userKey) || '[]');
    return users;
  }

  updateUser(payload: any, index: number) {
    let users = this.getUsers()
    users[index] = payload
    localStorage.setItem(this.userKey, JSON.stringify(users))
  }

  deleteUser(index: number) {
    let users: [] = this.getUsers()
    const filteredUsers = users.filter((user, idx) => index !== idx)
    localStorage.setItem(this.userKey, JSON.stringify(filteredUsers))
  }
}
