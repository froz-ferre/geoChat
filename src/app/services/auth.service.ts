import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 

export interface IUser {
    email: string;
    nickname: string;
    $key: string;
}

@Injectable()
export class AuthService {

  public user: IUser = null;

  constructor(
    private af: AngularFireDatabase
  ) { }

  loginAsUser(user: IUser) {
    const users = this.af.list('users');
    return users.push(user)
           .then((u) => {
             this.user = {
               email: user.email,
               nickname: user.nickname,
               $key: u.$key
             };
             this.saveUser(this.user.$key);
           })
  }

  loadUser() : Promise<IUser> {
    let userKey = window.localStorage.getItem('user');
    if (!userKey) {
      return Promise.resolve(null);
    }
    return this.af.object('user/${userKey}')
           .take(1)
           .toPromise()
           .then((user) => {
             console.log(user);
             this.user = user;
           })
  }

  saveUser(userKey: string) {
    window.localStorage.setItem('user', userKey);
  }

}
