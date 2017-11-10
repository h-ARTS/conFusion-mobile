webpackJsonp([7],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_leader_leader__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, leaderservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders().subscribe(function (leaders) { return _this.leaders = leaders; }, function (errMsg) { return _this.errMsg = errMsg; });
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header color="primary">\n      Our History\n    </ion-card-header>\n    <ion-card-content>\n        Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.\n        <br>\n        The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world\'s best cuisines in a pan.\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf="leaders">\n    <ion-card-header color="primary">\n      Corporate Leadership\n    </ion-card-header>\n    <ion-list>\n      <ion-item *ngFor="let leader of leaders">\n        <ion-avatar item-start>\n          <img src="{{BaseURL + leader.image}}" />\n        </ion-avatar>\n        <h2>{{ leader.name }}</h2>\n        <h3>{{ leader.designation }}</h3>\n        <p text-wrap>{{ leader.description }}</p>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <div [hidden]="leaders || errMsg">\n    <ion-spinner></ion-spinner>\n    <h4>Loading... Please wait.</h4>\n  </div>\n  <div *ngIf="errMsg">\n    {{ errMsg }}\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/about/about.html"*/,
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('BaseURL')),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_leader_leader__["a" /* LeaderProvider */], Object])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = (function () {
    function CommentPage(navCtrl, navParams, viewCtrl, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.comment = this.fb.group({
            author: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rating: 5,
            comment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            date: new Date().toISOString()
        });
    }
    CommentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage.prototype.onSubmit = function () {
        console.log(this.comment.value);
        this.viewCtrl.dismiss(this.comment.value);
    };
    return CommentPage;
}());
CommentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comment',template:/*ion-inline-start:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/comment/comment.html"*/'<!--\n  Generated template for the CommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Comment</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="comment" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>Your Name</ion-label>\n      <ion-input type="text" formControlName="author"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Your Rating</ion-label>\n      <ion-range min="1" max="5" step="1" pin="true" snaps="true" color="primary" formControlName="rating">\n        <ion-icon small range-left name="sad"></ion-icon>\n        <ion-icon range-right name="happy"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Your comment</ion-label>\n      <ion-textarea formControlName="comment" rows="12"></ion-textarea>\n    </ion-item>\n    <button ion-button color="primary" [disabled]="!comment.valid">Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/comment/comment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], CommentPage);

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header color="primary">\n      Location Information\n    </ion-card-header>\n    <ion-card-content>\n      <address ion-text>\n        121, Clear Water Bay Road<br>\n        Clear Water Bay, Kowloon<br>\n        HONG KONG<br>\n        <ion-icon name="call"></ion-icon>: +852 1234 5678<br>\n        <ion-icon name="print"></ion-icon>: +852 8765 4321<br>\n        <ion-icon name="mail"></ion-icon>: confusion@food.net<br>\n      </address>\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear left>\n          <ion-icon name="call"></ion-icon> Call\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear right>\n          <ion-icon name="mail"></ion-icon> Mail\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/contact/contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comment_comment__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * Generated class for the DishdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DishdetailPage = (function () {
    function DishdetailPage(navCtrl, navParams, favoriteservice, toastCtrl, axSheetCtrl, modalCtrl, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteservice = favoriteservice;
        this.toastCtrl = toastCtrl;
        this.axSheetCtrl = axSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.BaseURL = BaseURL;
        this.dish = navParams.get('dish');
        this.favorite = favoriteservice.isFavorite(this.dish.id);
        this.numcomments = this.dish.comments.length;
        var total = 0;
        this.dish.comments.forEach(function (comment) { return total += comment.rating; });
        this.avgstars = (total / this.numcomments).toFixed(2);
    }
    DishdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DishdetailPage');
    };
    DishdetailPage.prototype.openActionSheet = function () {
        var _this = this;
        var actionSheet = this.axSheetCtrl.create({
            title: 'More',
            buttons: [
                {
                    text: 'Add to Favorites',
                    handler: function () {
                        _this.addToFavorites();
                    }
                },
                {
                    text: 'Add a Comment',
                    handler: function () {
                        _this.openComment();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Canceled...');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DishdetailPage.prototype.addToFavorites = function () {
        this.favorite = this.favoriteservice.addFavorite(this.dish.id);
        this.toastCtrl.create({
            message: 'Dish ' + this.dish.id + ' added to Favorites successfully',
            position: 'middle',
            duration: 3000
        }).present();
    };
    DishdetailPage.prototype.openComment = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__comment_comment__["a" /* CommentPage */]);
        modal.present();
        modal.onDidDismiss(function (comment) {
            if (comment !== undefined) {
                _this.dish.comments.push(comment);
            }
        });
    };
    return DishdetailPage;
}());
DishdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dishdetail',template:/*ion-inline-start:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/dishdetail/dishdetail.html"*/'<!--\n  Generated template for the DishdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ dish.name }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openActionSheet()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="dish">\n    <img src="{{BaseURL + dish.image}}" />\n    <ion-card-content>\n      <ion-card-title>\n        {{ dish.name | uppercase }}\n      </ion-card-title>\n      <p>{{ dish.description }}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="star"></ion-icon>\n          <div>{{ avgstars }} stars</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{ numcomments }} Comments</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <div [hidden]="dish || errMsg">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMsg">\n    <h2>Error</h2>\n    <h4>{{errMsg}}</h4>\n  </div>\n\n  <ion-list *ngIf="dish">\n    <ion-list-header>\n      Comments\n    </ion-list-header>\n    <ion-item *ngFor="let comment of dish.comments" text-wrap>\n      <h4> {{comment.comment}} </h4>\n      <p> {{comment.rating}} Stars</p>\n      <p>\n        <span> -- {{comment.author}} {{comment.date | date }} </span>\n      </p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab bottom right [hidden]="favorite">\n    <button ion-fab (click)="addToFavorites()">\n      <ion-icon name="heart-outline"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-fab bottom right *ngIf="favorite">\n    <button ion-fab>\n      <ion-icon name="heart"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/dishdetail/dishdetail.html"*/,
    }),
    __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('BaseURL')),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__["a" /* FavoriteProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], Object])
], DishdetailPage);

//# sourceMappingURL=dishdetail.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams, favservice, toastCtrl, loadCtrl, alertCtrl, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favservice = favservice;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.BaseURL = BaseURL;
    }
    FavoritesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.favservice.getFavorites()
            .subscribe(function (favs) { return _this.favorites = favs; }, function (errMsg) { return _this.errMsg = errMsg; });
    };
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.deleteFavorite = function (item, id) {
        var _this = this;
        console.log('delete', id);
        var alert = this.alertCtrl.create({
            title: 'Confirm Title',
            message: 'Do you want to delete this favorite dish?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Delete cancelled');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        var loading = _this.loadCtrl.create({
                            content: 'Deleting...'
                        });
                        var toast = _this.toastCtrl.create({
                            message: 'Dish ' + id + ' deleted successfully',
                            duration: 3000
                        });
                        loading.present();
                        _this.favservice.deleteFavorite(id)
                            .subscribe(function (favs) {
                            _this.favorites = favs;
                            loading.dismiss();
                            toast.present();
                        }, function (errMsg) {
                            _this.errMsg = errMsg;
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        alert.present();
        item.close();
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Favorites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="favorites">\n    <ion-list>\n      <ion-item-sliding *ngFor="let favorite of favorites" #item>\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="{{BaseURL + favorite.image}}" />\n        </ion-thumbnail>\n        <h3>{{ favorite.name }}</h3>\n        <p>{{ favorite.description }}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteFavorite(item, favorite.id)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n  <div [hidden]="favorites || errMsg">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMsg">\n    <h2>Error</h2>\n    <h4>{{ errMsg }}</h4>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/favorites/favorites.html"*/,
    }),
    __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('BaseURL')),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__["a" /* FavoriteProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], Object])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, dishservice, favsservice, toastCtrl, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dishservice = dishservice;
        this.favsservice = favsservice;
        this.toastCtrl = toastCtrl;
        this.BaseURL = BaseURL;
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmsg) { return _this.errMsg = errmsg; });
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.dishSelected = function (event, dish) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail__["a" /* DishdetailPage */], {
            dish: dish
        });
    };
    MenuPage.prototype.addToFavorites = function (dish) {
        console.log('Adding to Favorites', dish.id);
        this.favsservice.addFavorite(dish.id);
        this.toastCtrl.create({
            message: 'Dish ' + dish.id + ' added to Favorites successfully',
            duration: 3000
        }).present();
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n  <div *ngIf="dishes">\n    <ion-card *ngFor="let dish of dishes" (click)="dishSelected($event, dish)" (pan)="addToFavorites(dish)">\n      <img src="{{BaseURL + dish.image}}" />\n      <div class="card-title">{{ dish.name }}</div>\n      <div class="card-subtitle">{{ dish.description }}</div>\n    </ion-card>\n  </div>\n  <div [hidden]="dishes || errMsg">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMsg">\n    <h2>Error</h2>\n    <h4>{{ errMsg }}</h4>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/menu/menu.html"*/,
    }),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('BaseURL')),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__["a" /* DishProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], Object])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservationPage = (function () {
    function ReservationPage(navCtrl, navParams, viewCtrl, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.reservation = this.fb.group({
            guests: 3,
            smoking: false,
            dateTime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    ReservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationPage');
    };
    ReservationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReservationPage.prototype.onSubmit = function () {
        console.log(this.reservation.value);
        this.viewCtrl.dismiss();
    };
    return ReservationPage;
}());
ReservationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reservation',template:/*ion-inline-start:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/reservation/reservation.html"*/'<!--\n  Generated template for the ReservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Reserve Table</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <form [formGroup]="reservation" (ngSubmit)="onSubmit()">\n   <ion-item>\n     <ion-label>No. of Guests</ion-label>\n     <ion-select formControlName="guests">\n       <ion-option value="1">1</ion-option>\n       <ion-option value="2">2</ion-option>\n       <ion-option value="3">3</ion-option>\n       <ion-option value="4">4</ion-option>\n       <ion-option value="5">5</ion-option>\n       <ion-option value="6">6</ion-option>\n     </ion-select>\n   </ion-item>\n   <ion-item>\n     <ion-label>Smoking?</ion-label>\n     <ion-toggle formControlName="smoking" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date and Time</ion-label>\n     <ion-datetime displayFormat="MMM DD, YYYY hh:mm A" pickerFormat="MMM DD, YYYY hh:mm A" formControlName="dateTime"></ion-datetime>\n   </ion-item>\n   <button ion-button type="submit" [disabled]="!reservation.valid">Reserve</button>\n </form>\n</ion-content>\n'/*ion-inline-end:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/reservation/reservation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], ReservationPage);

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		289,
		6
	],
	"../pages/comment/comment.module": [
		290,
		5
	],
	"../pages/contact/contact.module": [
		291,
		4
	],
	"../pages/dishdetail/dishdetail.module": [
		292,
		3
	],
	"../pages/favorites/favorites.module": [
		293,
		2
	],
	"../pages/menu/menu.module": [
		294,
		1
	],
	"../pages/reservation/reservation.module": [
		295,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_promotion_promotion__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_leader_leader__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomePage = (function () {
    function HomePage(navCtrl, dishservice, leaderservice, promotionservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.dishservice = dishservice;
        this.leaderservice = leaderservice;
        this.promotionservice = promotionservice;
        this.BaseURL = BaseURL;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish().subscribe(function (dish) { return _this.dish = dish; }, function (errMsg) { return _this.dishErrMsg = errMsg; });
        this.promotionservice.getFeaturedPromotion().subscribe(function (promo) { return _this.promotion = promo; }, function (errMsg) { return _this.promoErrMsg = errMsg; });
        this.leaderservice.getFeaturedLeader().subscribe(function (leader) { return _this.leader = leader; }, function (errMsg) { return _this.leaderErrMsg = errMsg; });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf="dish">\n    <img src="{{BaseURL + dish.image}}">\n    <ion-card-content>\n      <ion-card-title>\n        {{ dish.name | uppercase }}\n      </ion-card-title>\n      <p>\n        {{ dish.description }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div [hidden]="dish || dishErrMsg">\n    <ion-spinner></ion-spinner>\n    <h4>Loading... Please wait</h4> \n  </div>\n  <div *ngIf="dishErrMsg">\n    <h2>Error</h2>\n    {{ dishErrMsg }}\n  </div>\n\n  <ion-card *ngIf="promotion">\n    <img src="{{BaseURL + promotion.image}}">\n    <ion-card-content>\n      <ion-card-title>\n        {{ promotion.name | uppercase }}\n      </ion-card-title>\n      <p>\n        {{ promotion.description }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div [hidden]="promotion || promoErrMsg">\n    <ion-spinner></ion-spinner>\n    <h4>Loading... Please wait</h4> \n  </div>\n  <div *ngIf="promoErrMsg">\n    <h2>Error</h2>\n    {{ promoErrMsg }}\n  </div>\n\n  <ion-card *ngIf="leader">\n    <img src="{{BaseURL + leader.image}}">\n    <ion-card-content>\n      <ion-card-title>\n        {{ leader.name | uppercase }}\n      </ion-card-title>\n      <p>\n        {{ leader.description }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div [hidden]="leader || leaderErrMsg">\n    <ion-spinner></ion-spinner>\n    <h4>Loading... Please wait</h4> \n  </div>\n  <div *ngIf="leaderErrMsg">\n    <h2>Error</h2>\n    {{ leaderErrMsg }}\n  </div>\n\n  <ion-fab right bottom>\n    <button ion-fab color="accent"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab class="btn-mail"><ion-icon name="mail"></ion-icon></button>\n      <button ion-fab class="btn-google-plus"><ion-icon name="logo-googleplus"></ion-icon></button>\n      <button ion-fab class="btn-youtube"><ion-icon name="logo-youtube"></ion-icon></button>\n      <button ion-fab class="btn-twitter"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab class="btn-facebook"><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab class="btn-linkedin"><ion-icon name="logo-linkedin"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/pages/home/home.html"*/
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('BaseURL')),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__["a" /* DishProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_leader_leader__["a" /* LeaderProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_promotion_promotion__["a" /* PromotionProvider */], Object])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_baseurl__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PromotionProvider = (function () {
    function PromotionProvider(http, processHTTPMsgProvider) {
        this.http = http;
        this.processHTTPMsgProvider = processHTTPMsgProvider;
    }
    PromotionProvider.prototype.getPromotions = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'promotions')
            .map(function (res) { return _this.processHTTPMsgProvider.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgProvider.handleError(error); });
    };
    PromotionProvider.prototype.getPromotion = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'promotions/' + id)
            .map(function (res) { return _this.processHTTPMsgProvider.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgProvider.handleError(error); });
    };
    PromotionProvider.prototype.getFeaturedPromotion = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'promotions?featured=true')
            .map(function (res) { return _this.processHTTPMsgProvider.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgProvider.handleError(error); });
    };
    return PromotionProvider;
}());
PromotionProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
], PromotionProvider);

//# sourceMappingURL=promotion.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_baseurl__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dishdetail_dishdetail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favorites_favorites__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reservation_reservation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_dish_dish__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_leader_leader__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_promotion_promotion__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_favorite_favorite__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_reservation_reservation__["a" /* ReservationPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__["a" /* CommentPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dishdetail/dishdetail.module#DishdetailPageModule', name: 'DishdetailPage', segment: 'dishdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reservation/reservation.module#ReservationPageModule', name: 'ReservationPage', segment: 'reservation', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_reservation_reservation__["a" /* ReservationPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__["a" /* CommentPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_dish_dish__["a" /* DishProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_leader_leader__["a" /* LeaderProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_promotion_promotion__["a" /* PromotionProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
            { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_4__shared_baseurl__["a" /* baseURL */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_favorite_favorite__["a" /* FavoriteProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_reservation_reservation__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
            { title: 'Menu', component: __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */], icon: 'list-box' },
            { title: 'My Favorites', component: __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites__["a" /* FavoritesPage */], icon: 'heart' },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */], icon: 'contact' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openReserve = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_reservation_reservation__["a" /* ReservationPage */]);
        modal.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/app/app.html"*/'<ion-split-pane>\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar color="primary-dark">\n        <ion-title>Ristorante Con Fusion</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content class="background-pale">\n      <ion-list>\n        <ion-list-header color="primary-light" text-wrap>\n          <ion-thumbnail item-left>\n            <img src="../assets/images/logo.png" />\n          </ion-thumbnail>\n          <h3>Ristorante Con Fusion</h3>\n        </ion-list-header>\n        <button color="primary-pale" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon [name]="p.icon" item-left></ion-icon>\n          {{p.title}}\n        </button>\n        <button color="primary-pale" menuClose ion-item (click)="openReserve()">\n          <ion-icon name="restaurant" item-left></ion-icon>\n          Reserve Table\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/hananmufti/Desktop/coursera/ionic-cordova/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'http://localhost:3000/';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProcessHttpmsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProcessHttpmsgProvider = (function () {
    function ProcessHttpmsgProvider(http) {
        this.http = http;
        console.log('Hello ProcessHttpmsgProvider Provider');
    }
    ProcessHttpmsgProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProcessHttpmsgProvider.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json();
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ProcessHttpmsgProvider;
}());
ProcessHttpmsgProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], ProcessHttpmsgProvider);

//# sourceMappingURL=process-httpmsg.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dish_dish__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FavoriteProvider = (function () {
    function FavoriteProvider(http, dishservice) {
        this.http = http;
        this.dishservice = dishservice;
        console.log('Hello FavoriteProvider Provider');
        this.favorites = [];
    }
    FavoriteProvider.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
        }
        return true;
    };
    FavoriteProvider.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteProvider.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); });
    };
    FavoriteProvider.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            return this.getFavorites();
        }
        else {
            console.log('Deleting non-existant favorite', id);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Deleting non-existant favorite' + id);
        }
    };
    return FavoriteProvider;
}());
FavoriteProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__dish_dish__["a" /* DishProvider */]])
], FavoriteProvider);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_baseurl__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DishProvider = (function () {
    function DishProvider(http, processHTTPMsgProvider) {
        this.http = http;
        this.processHTTPMsgProvider = processHTTPMsgProvider;
    }
    DishProvider.prototype.getDishes = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'dishes')
            .map(function (res) { return _this.processHTTPMsgProvider.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgProvider.handleError(error); });
    };
    DishProvider.prototype.getDish = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'dishes/' + id)
            .map(function (res) { return _this.processHTTPMsgProvider.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgProvider.handleError(error); });
    };
    DishProvider.prototype.getFeaturedDish = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'dishes?featured=true')
            .map(function (res) { return _this.processHTTPMsgProvider.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgProvider.handleError(error); });
    };
    return DishProvider;
}());
DishProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
], DishProvider);

//# sourceMappingURL=dish.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_baseurl__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LeaderProvider = (function () {
    function LeaderProvider(http, processHTTPMsgProvider) {
        this.http = http;
        this.processHTTPMsgProvider = processHTTPMsgProvider;
    }
    LeaderProvider.prototype.getLeaders = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'leaders')
            .map(function (res) { return _this.processHTTPMsgProvider.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgProvider.handleError(error); });
    };
    LeaderProvider.prototype.getLeader = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'leaders/' + id)
            .map(function (res) { return _this.processHTTPMsgProvider.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgProvider.handleError(error); });
    };
    LeaderProvider.prototype.getFeaturedLeader = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'leaders?featured=true')
            .map(function (res) { return _this.processHTTPMsgProvider.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgProvider.handleError(error); });
    };
    return LeaderProvider;
}());
LeaderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
], LeaderProvider);

//# sourceMappingURL=leader.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map