(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\r\n  <base href=\"/\">\r\n\r\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeicons/primeicons.css\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/themes/nova-light/theme.css\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/primeng.min.css\" />\r\n\r\n</head>\r\n\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <div id=\"preloader\" class=\"preloader-light\">\r\n    <h1></h1>\r\n    <div id=\"preload-spinner\"></div>\r\n  </div>\r\n    \r\n  <div id=\"page-transitions\">\r\n    <div id=\"header\" class=\"header-logo-left header-dark\">\r\n      <a href=\"#\" class=\"header-logo\"></a>\r\n      <a href=\"#\" class=\"header-icon header-icon-1 hamburger-animated\" data-deploy-menu=\"menu-1\"></a>\r\n    </div>\r\n  \r\n    <div id=\"menu-1\" class=\"menu-wrapper menu-light menu-sidebar-left menu-large\">\r\n      <div class=\"menu-scroll\">\r\n        <div class=\"menu\">\r\n          <em class=\"menu-divider\">Navigation<i class=\"fa fa-bars\"></i></em>\r\n          <a class=\"menu-item close-menu\" href=\"#\" (click)=\"navigate('preferences')\"><i class=\"font-15 fa color-blue-dark fa-cog\"></i><strong>Preferences</strong></a>\r\n          <a class=\"menu-item close-menu\" href=\"#\"><i class=\"font-14 fa color-orange-dark fa-times\"></i><strong>Close</strong></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div id=\"page-content\" class=\"page-content\">\t\r\n      <div id=\"page-content-scroll\"><!--Enables this element to be scrolled --> \t\t\t\r\n        <router-outlet></router-outlet>\r\n      </div>  \r\n    </div>\t\t\r\n    <a href=\"#\" class=\"back-to-top-badge back-to-top-small\"><i class=\"fa fa-angle-up\"></i>Back to Top</a>\r\n  </div>\r\n  \r\n  \r\n  <div class=\"footer footer-dark\">\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/app-context.service */ "./src/app/services/app-context.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(contextService, router) {
        this.contextService = contextService;
        this.router = router;
        if (!this.IsInitialized) {
            this.router.navigateByUrl('/preferences');
        }
    }
    AppComponent.prototype.SaveSettings = function () {
        console.log('Saving preferences');
        this.router.navigateByUrl('/index');
    };
    AppComponent.prototype.IsInitialized = function () {
        return this.contextService.IsInitialized();
    };
    AppComponent.prototype.navigate = function (url) {
        this.router.navigateByUrl(url);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_context_service__WEBPACK_IMPORTED_MODULE_1__["AppContextService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_app_context_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/app-context.service */ "./src/app/services/app-context.service.ts");
/* harmony import */ var _services_savings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/savings.service */ "./src/app/services/savings.service.ts");
/* harmony import */ var _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/preferences/preferences.component */ "./src/app/components/preferences/preferences.component.ts");
/* harmony import */ var _components_savings_list_savings_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/savings-list/savings-list.component */ "./src/app/components/savings-list/savings-list.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'index', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_14__["IndexComponent"] },
    { path: 'preferences', component: _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_12__["PreferencesComponent"] },
    { path: '**', redirectTo: 'index' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_12__["PreferencesComponent"],
                _components_savings_list_savings_list_component__WEBPACK_IMPORTED_MODULE_13__["SavingsListComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_14__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_app_context_service__WEBPACK_IMPORTED_MODULE_10__["AppContextService"],
                _services_savings_service__WEBPACK_IMPORTED_MODULE_11__["SavingsService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/index/index.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-slider {\r\n    height: 263.6px;;\r\n}"

/***/ }),

/***/ "./src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"single-slider owl-carousel owl-has-dots-over bg-black\">\r\n    <div>\r\n      <div class=\"cover-content cover-content-center\">\r\n        <h1 class=\"center-text color-white small-bottom fa-2x\">Meet Appeca</h1>\r\n        <p class=\"center-text color-white opacity-70 no-bottom\">The result of our over 10 years of experience as the only Elite Author on the Mobile Niche.</p>\r\n      </div>\r\n      <div class=\"cover-overlay overlay bg-black opacity-80\"></div>\r\n      <img width=\"700\" class=\"owl-lazy\" src=\"assets/images/empty.png\" data-src=\"assets/images/pictures/10lq.jpg\" data-src=\"assets/images/pictures/10.jpg\">\r\n    </div>\r\n    <div>\r\n      <div class=\"cover-content cover-content-center\">\r\n        <h1 class=\"center-text color-white small-bottom\">Creative & Unique</h1>\r\n        <p class=\"center-text color-white opacity-80 no-bottom\">Infuse your style, create your own elements, bring your ideas to life with Appeca.</p>\r\n      </div>\r\n      <div class=\"cover-overlay overlay bg-black opacity-70\"></div>\r\n      <img width=\"700\" class=\"owl-lazy\" src=\"assets/images/empty.png\" data-src=\"assets/images/pictures/9lq.jpg\" data-src-retina=\"assets/images/pictures/9.jpg\">\r\n    </div>\t\t\t\r\n    <div>\r\n      <div class=\"cover-content cover-content-center\">\r\n        <h1 class=\"center-text color-white small-bottom\">Smart & Flexible</h1>\r\n        <p class=\"center-text color-white opacity-60 no-bottom\">Appeca is built for flexibility, every feature is ultra customizable and easy to edit.</p>\r\n      </div>\r\n      <div class=\"cover-overlay overlay bg-black opacity-80\"></div>\r\n      <img width=\"700\" class=\"owl-lazy\" src=\"assets/images/empty.png\" data-src=\"assets/images/pictures/3lq.jpg\" data-src-retina=\"assets/images/pictures/3.jpg\">\r\n    </div>\r\n\r\n    <div>\r\n      <div class=\"cover-content cover-content-center\">\r\n        <h1 class=\"center-text color-white small-bottom\">Built for You</h1>\r\n        <p class=\"center-text color-white opacity-80 no-bottom\">For over 10 years we've been building products for you, we <i class=\"fa fa-heart color-orange-dark font-12\"></i> our customers.</p>\r\n      </div>\r\n      <div class=\"cover-overlay overlay bg-black opacity-60\"></div>\r\n      <img width=\"700\" class=\"owl-lazy\" src=\"assets/images/empty.png\" data-src=\"assets/images/pictures/6lq.jpg\" data-src-retina=\"assets/images/pictures/6.jpg\">\r\n    </div>\t\t\t\r\n  </div>\t\t\r\n  \r\n  <div class=\"homepage-cta full-top full-bottom\">\r\n    <div class=\"homepage-cta-button\">\r\n      <div class=\"button-center-large\"><a href=\"#\" class=\"button button-full button-blue button-sm button-rounded uppercase ultrabold\">Add Saving</a></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"decoration decoration-margins\"></div>"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app-context.service */ "./src/app/services/app-context.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(appContextService, router) {
        this.appContextService = appContextService;
        this.router = router;
    }
    IndexComponent.prototype.ngOnInit = function () {
        if (!this.appContextService.IsInitialized()) {
            this.router.navigateByUrl('/preferences');
        }
        // @ts-ignore
        $('.single-slider').owlCarousel({ loop: true, margin: 0, nav: true, autoHeight: true, lazyLoad: true, items: 1, autoplay: false, autoplayTimeout: 7500 });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/components/index/index.component.css")],
        }),
        __metadata("design:paramtypes", [_services_app_context_service__WEBPACK_IMPORTED_MODULE_1__["AppContextService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/components/preferences/preferences.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/preferences/preferences.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    text-align: center;\r\n}\r\n\r\n.input-form{\r\n    padding: 30px;\r\n}\r\n\r\nlabel.field-title {\r\n    text-align: left;\r\n}\r\n\r\nselect {\r\n    border: solid 1px rgba(0,0,0,0.1);\r\n}\r\n\r\n.formFieldWrap {\r\n    text-align: left;\r\n}\r\n\r\n.contactForm input {\r\n    border: solid 1px rgba(0,0,0, 0.3)\r\n}\r\n\r\n.contactForm select {\r\n    border: solid 1px rgba(0,0,0, 0.3)\r\n}\r\n\r\n.ui-widget {\r\n    height: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/preferences/preferences.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/preferences/preferences.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-form no-bottom input-form\">\r\n    <h1 class=\"uppercase ultrabold center-text\">Preferences</h1>\r\n    <p class=\"small-text center-text color-blue-dark half-bottom\">Enter your savings goal information</p>\r\n    <form action=\"#\" method=\"post\" class=\"contactForm\" id=\"preferencesForm\">\r\n        <fieldset>\r\n            <div class=\"formValidationError bg-red-dark\" id=\"goalTitleFieldError\" style=\"display: none;\">\r\n                <p class=\"center-text uppercase small-text color-white\">Title is required!</p>\r\n            </div>\r\n            <div class=\"formValidationError bg-red-dark\" id=\"targetFieldError\" style=\"display: none;\">\r\n                <p class=\"center-text uppercase small-text color-white\">Savings target is required!</p>\r\n            </div>\r\n            <div class=\"formValidationError bg-red-dark\" id=\"currencyFieldError\" style=\"display: none;\">\r\n                <p class=\"center-text uppercase small-text color-white\">Currency is required!</p>\r\n            </div>\r\n            <div class=\"formValidationError bg-red-dark\" id=\"targetDateError\" style=\"display: none;\">\r\n                <p class=\"center-text uppercase small-text color-white\">Target Date is required!</p>\r\n            </div>\r\n            <div class=\"formFieldWrap\">\r\n                <label class=\"field-title contactNameField\">Goal Title:<span>(required)</span></label>\r\n                <input type=\"text\" value=\"\" class=\"contactField requiredField fieldHasError\" name=\"title\" [(ngModel)]=\"goalTitle\">\r\n            </div>\r\n            <div class=\"formFieldWrap\">\r\n                <label class=\"field-title contactNameField\">Savings Target:<span>(required)</span></label>\r\n                <input type=\"number\" value=\"\" class=\"contactField requiredField fieldHasError\" name=\"target\" [(ngModel)]=\"goalAmount\">\r\n            </div>\r\n            <div class=\"formFieldWrap\">\r\n                <label class=\"field-title contactNameField\">Currency:<span>(required)</span></label>\r\n                <select class=\"contactField requiredField fieldHasError\" id=\"currency\" name=\"currency\" [(ngModel)]=\"goalCurrency\" required #currency=\"ngModel\">\r\n                    <option *ngFor=\"let currency of currencies\" [value]=\"currency\">{{currency}}</option>\r\n                </select>\r\n            </div>\r\n            \r\n            <div class=\"formFieldWrap\">\r\n                <label class=\"field-title contactNameField\">Target Date:<span>(required)</span></label>\r\n                <input type=\"date\" value=\"\" class=\"contactField requiredField fieldHasError\" [(ngModel)]=\"goalTargetDate\" name=\"targetDate\" />\r\n            </div>\r\n            <br/>\r\n\r\n            <div class=\"formSubmitButtonErrorsWrap contactFormButton\">\r\n                <input type=\"submit\" class=\"buttonWrap button bg-blue-dark button-sm button-rounded uppercase ultrabold contactSubmitButton\" id=\"contactSubmitButton\" value=\"Start Saving\" data-formid=\"preferencesForm\" (click)=\"onSubmit()\">\r\n            </div>\r\n        </fieldset>\r\n    </form>\t\t\t\r\n</div>"

/***/ }),

/***/ "./src/app/components/preferences/preferences.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/preferences/preferences.component.ts ***!
  \*****************************************************************/
/*! exports provided: PreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesComponent", function() { return PreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app-context.service */ "./src/app/services/app-context.service.ts");
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preferences */ "./src/app/components/preferences/preferences.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreferencesComponent = /** @class */ (function () {
    function PreferencesComponent(appContextService, router) {
        this.appContextService = appContextService;
        this.router = router;
        this.currencies = ['CAD', 'USD', 'EUR'];
    }
    PreferencesComponent.prototype.onSubmit = function () {
        var preferences = new _preferences__WEBPACK_IMPORTED_MODULE_2__["Preferences"](this.goalTitle, this.goalAmount, this.goalTargetDate, this.goalCurrency);
        this.appContextService.SetPreferences(preferences);
        this.router.navigate(['indexasd']);
    };
    PreferencesComponent.prototype.getMinTargetDate = function () {
        var today = new Date();
        var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
        return tomorrow;
    };
    PreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preferences',
            template: __webpack_require__(/*! ./preferences.component.html */ "./src/app/components/preferences/preferences.component.html"),
            styles: [__webpack_require__(/*! ./preferences.component.css */ "./src/app/components/preferences/preferences.component.css")],
        }),
        __metadata("design:paramtypes", [_services_app_context_service__WEBPACK_IMPORTED_MODULE_1__["AppContextService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PreferencesComponent);
    return PreferencesComponent;
}());



/***/ }),

/***/ "./src/app/components/preferences/preferences.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/preferences/preferences.ts ***!
  \*******************************************************/
/*! exports provided: Preferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preferences", function() { return Preferences; });
var Preferences = /** @class */ (function () {
    function Preferences(GoalTitle, SavingsTarget, TargetDate, Currency) {
        if (GoalTitle === void 0) { GoalTitle = null; }
        if (SavingsTarget === void 0) { SavingsTarget = null; }
        if (TargetDate === void 0) { TargetDate = null; }
        if (Currency === void 0) { Currency = null; }
        this.GoalTitle = GoalTitle;
        this.SavingsTarget = SavingsTarget;
        this.TargetDate = TargetDate;
        this.Currency = Currency;
    }
    return Preferences;
}());



/***/ }),

/***/ "./src/app/components/savings-list/savings-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/savings-list/savings-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saving-number {\r\n    color: #009900\r\n}\r\n\r\n.search-list {\r\n    height: 100%;\r\n}\r\n\r\n.list-container {\r\n    overflow-y: scroll;\r\n    max-height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/components/savings-list/savings-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/savings-list/savings-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-container\">\r\n    <div *ngFor=\"let i of displayedItems\">\r\n        <div class=\"col-xs-6\">{{ i?.Name }}</div>\r\n        <div class=\"col-xs-4\">{{ i?.Category }}</div>\r\n        <div class=\"col-xs-2 saving-number\">${{ i?.Amount }}</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/savings-list/savings-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/savings-list/savings-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SavingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsListComponent", function() { return SavingsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_savings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/savings.service */ "./src/app/services/savings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavingsListComponent = /** @class */ (function () {
    function SavingsListComponent(savingsService) {
        this.savingsService = savingsService;
        this.displayedItems = [];
        this.initialLoad = 15;
        this.throttle = 200;
        this.scrollDistance = 2;
    }
    SavingsListComponent.prototype.ngOnInit = function () {
        this.savings = this.savingsService.GetSavings();
        this.appendItems(0, this.initialLoad);
    };
    SavingsListComponent.prototype.appendItems = function (startIndex, endIndex) {
        for (var i = startIndex; i < endIndex || i < this.savings.length; ++i) {
            this.displayedItems.push(this.savings[i]);
        }
    };
    //infinite scroll attempt not working
    SavingsListComponent.prototype.onScrollDown = function () {
        console.log('scrolled down!!');
        // add another 20 items
        var start = this.displayedItems.length;
        this.appendItems(start, start + 15);
    };
    SavingsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'savings-list',
            template: __webpack_require__(/*! ./savings-list.component.html */ "./src/app/components/savings-list/savings-list.component.html"),
            styles: [__webpack_require__(/*! ./savings-list.component.css */ "./src/app/components/savings-list/savings-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_savings_service__WEBPACK_IMPORTED_MODULE_1__["SavingsService"]])
    ], SavingsListComponent);
    return SavingsListComponent;
}());



/***/ }),

/***/ "./src/app/services/app-context.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/app-context.service.ts ***!
  \*************************************************/
/*! exports provided: AppContextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextService", function() { return AppContextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_preferences_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/preferences/preferences */ "./src/app/components/preferences/preferences.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppContextService = /** @class */ (function () {
    function AppContextService() {
        this.preferences = new _components_preferences_preferences__WEBPACK_IMPORTED_MODULE_1__["Preferences"]();
    }
    AppContextService.prototype.GetPreferences = function () {
        return this.preferences;
    };
    AppContextService.prototype.SetPreferences = function (preferences) {
        this.preferences = preferences;
    };
    AppContextService.prototype.IsInitialized = function () {
        return this.preferences.Currency != null &&
            this.preferences.SavingsTarget != null &&
            this.preferences.TargetDate != null &&
            this.preferences.GoalTitle != null;
    };
    AppContextService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], AppContextService);
    return AppContextService;
}());



/***/ }),

/***/ "./src/app/services/savings.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/savings.service.ts ***!
  \*********************************************/
/*! exports provided: SavingsService, Saving */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsService", function() { return SavingsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Saving", function() { return Saving; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
var SavingsService = /** @class */ (function () {
    function SavingsService( /*private sqlite: SQLite*/) {
    }
    SavingsService.prototype.ngOnInit = function () {
        /*this.sqlite.create({
            name: 'littlepiggy.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS SavingsSettings(rowid INTEGER PRIMARY KEY,
                target INT, currency TEXT, targetDate DATE )')
            .then(res => console.log('Executed SQL'))
            .catch(e => console.log(e));
        })*/
    };
    SavingsService.prototype.GetSavings = function () {
        var savings = [
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date())
        ];
        return savings;
    };
    SavingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SavingsService);
    return SavingsService;
}());

var Saving = /** @class */ (function () {
    function Saving(Name, Category, Amount, Date) {
        this.Name = Name;
        this.Category = Category;
        this.Amount = Amount;
        this.Date = Date;
    }
    return Saving;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\daily-change\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map