import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from './../../providers/dish/dish';
import { Promotion } from './../../shared/promotion';
import { PromotionProvider } from './../../providers/promotion/promotion';
import { Leader } from './../../shared/leader';
import { LeaderProvider } from './../../providers/leader/leader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMsg: string;
  promoErrMsg: string;
  leaderErrMsg: string;

  constructor(public navCtrl: NavController,
              private dishservice: DishProvider,
              private leaderservice: LeaderProvider,
              private promotionservice: PromotionProvider,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, errMsg => this.dishErrMsg = errMsg);

    this.promotionservice.getFeaturedPromotion().subscribe(promo => this.promotion = promo, errMsg => this.promoErrMsg = errMsg);

    this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader, errMsg => this.leaderErrMsg = errMsg);
  }

}
