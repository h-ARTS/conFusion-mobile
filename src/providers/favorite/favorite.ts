import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../dish/dish';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  favorites: Array<any>;

  constructor(public http: Http, 
              private dishservice: DishProvider,
              private storage: Storage,
              private localNotifications: LocalNotifications) {
    console.log('Hello FavoriteProvider Provider');

    storage.get('favorites').then(fav => {
      if (fav) {
        this.favorites = fav
      } else {
        this.favorites = [];
        console.log('fav not defined!')
      }
    });
  }

  addFavorite(id: number): boolean {
    if (!this.isFavorite(id)) {
      this.favorites.push(id);
      this.storage.set('favorites', this.favorites);

      this.localNotifications.schedule({
        id: id,
        text: 'Dish ' + id + 'added as a favorite successfuly!'
      })
    }
    return true;
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(el => el === id);
  }
  
  getFavorites(): Observable<Dish[]> {
    return this.dishservice.getDishes()
      .map(dishes => dishes.filter(dish => this.favorites.some(el => el === dish.id)));
  }

  deleteFavorite(id: number): Observable<Dish[]> {
    let index = this.favorites.indexOf(id);
    if (index >= 0) {
      this.favorites.splice(index, 1);
      this.storage.set('favorites', this.favorites);
      console.log('deleted ' + index)
      return this.getFavorites();
    } else {
      console.log('Deleting non-existant favorite', id);
      return Observable.throw('Deleting non-existant favorite' + id);
    }
  }

}
