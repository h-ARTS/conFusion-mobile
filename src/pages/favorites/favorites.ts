import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { FavoriteProvider } from './../../providers/favorite/favorite';
import { Dish } from './../../shared/dish';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {

  favorites: Dish[];
  errMsg: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private favservice: FavoriteProvider,
              private toastCtrl: ToastController,
              private loadCtrl: LoadingController,
              private alertCtrl: AlertController,
              @Inject('BaseURL') public BaseURL) {
  }

  ngOnInit() {
    this.favservice.getFavorites()
      .subscribe(favs => this.favorites = favs, errMsg => this.errMsg = errMsg);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  deleteFavorite(item: ItemSliding, id: number) {
    console.log('delete', id);
    let alert = this.alertCtrl.create({
      title: 'Confirm Title',
      message: 'Do you want to delete this favorite dish?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled')
          }
        },
        {
          text: 'Delete',
          handler: () => {
            let loading = this.loadCtrl.create({
              content: 'Deleting...'
            });
        
            let toast = this.toastCtrl.create({
              message: 'Dish ' + id + ' deleted successfully',
              duration: 3000
            });
        
            loading.present();
        
            this.favservice.deleteFavorite(id)
              .subscribe(favs => {
              this.favorites = favs;
              loading.dismiss();
              toast.present();
            } , errMsg => {
              this.errMsg = errMsg;
              loading.dismiss();
            });
          }
        }
      ]
    });
    
    alert.present();
    item.close();
  }

}
