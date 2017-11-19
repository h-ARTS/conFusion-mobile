import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { FavoriteProvider } from './../../providers/favorite/favorite';
import { CommentPage } from './../comment/comment';
import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the DishdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
  dish: Dish;
  errMsg: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public favoriteservice: FavoriteProvider,
              private toastCtrl: ToastController,
              private axSheetCtrl: ActionSheetController,
              private modalCtrl: ModalController,
              private socialShare: SocialSharing,
              @Inject('BaseURL') public BaseURL, ) {
    this.dish = navParams.get('dish');
    this.favorite = favoriteservice.isFavorite(this.dish.id);
    this.numcomments = this.dish.comments.length;
    let total = 0;
    this.dish.comments.forEach(comment => total += comment.rating );
    this.avgstars = (total/this.numcomments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  openActionSheet() {
    let actionSheet = this.axSheetCtrl.create({
      title: 'More',
      buttons: [
        {
          text: 'Add to Favorites',
          handler: () => {
            this.addToFavorites();
          }
        },
        {
          text: 'Add a Comment',
          handler: () => {
            this.openComment()
          }
        },
        {
          text: 'Share via Facebook',
          handler: () => {
            this.socialShare.shareViaFacebook(
              this.dish.name + ' -- ' + this.dish.description,
              this.BaseURL + this.dish.image,
              ''
            ).then(() => console.log('Posted successfully to facebook!'))
            .catch(() => console.error('Failed to post to Facebook!'));
          }
        },
        {
          text: 'Share via Twitter',
          handler: () => {
            this.socialShare.shareViaTwitter(
              this.dish.name + ' -- ' + this.dish.description,
              this.BaseURL + this.dish.image,
              ''
            ).then(() => console.log('Posted successfully to Twitter!'))
            .catch(() => console.error('Failed to post to Twitter!'));
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Canceled...');
          }
        }
      ]
    })
    actionSheet.present();
  }

  addToFavorites() {
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    this.toastCtrl.create({
      message: 'Dish ' + this.dish.id + ' added to Favorites successfully',
      position: 'middle',
      duration: 3000
    }).present();
  }

  openComment () {
    let modal = this.modalCtrl.create(CommentPage);
    modal.present();
    modal.onDidDismiss(comment => {
      if (comment !== undefined) {
        this.dish.comments.push(comment)
      }
    })
  }

}