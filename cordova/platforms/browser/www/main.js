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

module.exports = "body {\r\n    margin: 0 auto;\r\n}\r\n\r\n.main-container {\r\n    display: flex; \r\n    flex-direction: column;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<setup-dialog *ngIf=\"!IsInitialized()\"></setup-dialog>-->\r\n<div class=\"main-container\">\r\n    <summary></summary>\r\n    <graph></graph>\r\n    <savings-list></savings-list>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

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
    function AppComponent(contextService) {
        this.contextService = contextService;
    }
    AppComponent.prototype.IsInitialized = function () {
        return this.contextService.GetContext().IsInitialized();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_context_service__WEBPACK_IMPORTED_MODULE_1__["AppContextService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_datascroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/datascroller */ "./node_modules/primeng/datascroller.js");
/* harmony import */ var primeng_datascroller__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_datascroller__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");
/* harmony import */ var _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/graph/graph.component */ "./src/app/components/graph/graph.component.ts");
/* harmony import */ var _services_app_context_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/app-context.service */ "./src/app/services/app-context.service.ts");
/* harmony import */ var _services_savings_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/savings.service */ "./src/app/services/savings.service.ts");
/* harmony import */ var _components_setup_dialog_setup_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/setup-dialog/setup-dialog.component */ "./src/app/components/setup-dialog/setup-dialog.component.ts");
/* harmony import */ var _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/preferences/preferences.component */ "./src/app/components/preferences/preferences.component.ts");
/* harmony import */ var _components_savings_list_savings_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/savings-list/savings-list.component */ "./src/app/components/savings-list/savings-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_11__["SummaryComponent"],
                _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_12__["GraphComponent"],
                _components_setup_dialog_setup_dialog_component__WEBPACK_IMPORTED_MODULE_15__["SetupDialogComponent"],
                _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_16__["PreferencesComponent"],
                _components_savings_list_savings_list_component__WEBPACK_IMPORTED_MODULE_17__["SavingsListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_3__["ChartModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
                primeng_datascroller__WEBPACK_IMPORTED_MODULE_6__["DataScrollerModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_9__["SlickModule"].forRoot()
            ],
            providers: [
                _services_app_context_service__WEBPACK_IMPORTED_MODULE_13__["AppContextService"],
                _services_savings_service__WEBPACK_IMPORTED_MODULE_14__["SavingsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/graph/graph.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/graph/graph.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/graph/graph.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/graph/graph.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\r\n    <div ngxSlickItem class=\"slide\">\r\n        <p-chart style=\"height: 400px;\" type=\"line\" [data]=\"data\" [options]=\"options\"></p-chart>\r\n    </div>\r\n    <div ngxSlickItem class=\"slide\">\r\n        Graph 2\r\n    </div>\r\n    <div ngxSlickItem class=\"slide\">\r\n        Graph 3\r\n    </div>\r\n</ngx-slick>\r\n\r\n    "

/***/ }),

/***/ "./src/app/components/graph/graph.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/graph/graph.component.ts ***!
  \*****************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
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

var GraphComponent = /** @class */ (function () {
    function GraphComponent() {
        this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
        };
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Money Saved',
                    data: [0, 48, 67, 76, 86, 123, 145],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
        this.options = {
            title: {
                display: true,
                text: 'Money Saved',
                fontSize: 16
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function (value, index, values) {
                                return '$' + value;
                            }
                        }
                    }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 10,
                    bottom: 0
                }
            }
        };
    }
    GraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'graph',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/components/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.css */ "./src/app/components/graph/graph.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/components/preferences/preferences.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/preferences/preferences.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/preferences/preferences.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/preferences/preferences.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form #preferencesForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"target\">Savings Target</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"target\" name=\"target\" [(ngModel)]=\"model.SavingsTarget\" required #target=\"ngModel\">\r\n        </div>\r\n\r\n        <div [hidden]=\"target.valid || target.pristine\" class=\"alert alert-danger\">\r\n            Target is required\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"currency\">Currency</label>\r\n            <select class=\"form-control\" id=\"currency\" name=\"currency\" [(ngModel)]=\"model.Currency\" required #currency=\"ngModel\">\r\n                <option *ngFor=\"let currency of currencies\" [value]=\"currency\">{{currency}}</option>\r\n            </select>\r\n        </div>\r\n        {{currency.class}}\r\n\r\n        <div [hidden]=\"currency.valid || currency.untouched\" class=\"alert alert-danger\">\r\n            Currency is required\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label for=\"targetDate\">Target Date</label><br />\r\n            \r\n            <input type=\"hidden\" [(ngModel)]=\"model.TargetDate\" class=\"form-control\" id=\"targetDate\" name=\"targetDate\" required #targetDate=\"ngModel\" />\r\n            <p-calendar readonlyInput=\"true\" appendTo=\"body\" [(ngModel)]=\"model.TargetDate\" [touchUI]=\"true\" [minDate]=\"getMinTargetDate()\" [showIcon]=\"true\" name=\"calendar\" [defaultDate]=\"getMinTargetDate()\"></p-calendar>\r\n        </div>\r\n\r\n        <div [hidden]=\"targetDate.valid || targetDate.untouched\" class=\"alert alert-danger\">\r\n            Target Date is required\r\n        </div>\r\n    \r\n        <div class=\"center\">\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!preferencesForm.form.valid\" >Let's Go</button>\r\n        </div>\r\n    </form>\r\n</div>"

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
    function PreferencesComponent(appContextService) {
        this.appContextService = appContextService;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currencies = ['CAD', 'USD', 'EUR'];
        this.model = new _services_app_context_service__WEBPACK_IMPORTED_MODULE_1__["AppContext"]();
    }
    PreferencesComponent.prototype.onSubmit = function () {
        this.appContextService.SetContext(this.model);
        this.submitted.emit();
    };
    PreferencesComponent.prototype.getMinTargetDate = function () {
        var today = new Date();
        var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
        return tomorrow;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PreferencesComponent.prototype, "submitted", void 0);
    PreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preferences',
            template: __webpack_require__(/*! ./preferences.component.html */ "./src/app/components/preferences/preferences.component.html"),
            styles: [__webpack_require__(/*! ./preferences.component.css */ "./src/app/components/preferences/preferences.component.css")],
        }),
        __metadata("design:paramtypes", [_services_app_context_service__WEBPACK_IMPORTED_MODULE_1__["AppContextService"]])
    ], PreferencesComponent);
    return PreferencesComponent;
}());



/***/ }),

/***/ "./src/app/components/savings-list/savings-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/savings-list/savings-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saving-item {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.saving-number {\r\n    color: #009900\r\n}"

/***/ }),

/***/ "./src/app/components/savings-list/savings-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/savings-list/savings-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dataScroller [value]=\"savings\" [rows]=\"15\" [inline]=\"true\" scrollHeight=\"500px\">\r\n        <ng-template let-saving pTemplate=\"item\">\r\n                <div class=\"ui-g saving-item row\">\r\n                    <div class=\"col-xs-6\">\r\n                        {{saving.Name}}\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        {{saving.Category}}\r\n                    </div>\r\n                    <div class=\"saving-number col-xs-2\">\r\n                        ${{saving.Amount}}\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n</p-dataScroller>"

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
    }
    SavingsListComponent.prototype.ngOnInit = function () {
        this.savings = this.savingsService.GetSavings();
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

/***/ "./src/app/components/setup-dialog/setup-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/setup-dialog/setup-dialog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-body {\r\n    height: 100%\r\n}\r\n\r\n.header {\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/setup-dialog/setup-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/setup-dialog/setup-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog [(visible)]=\"display\" [modal]=\"true\" [closable]=\"false\" [responsive]=\"true\" [width]=\"GetDialogWidth()\" [height]=\"GetDialogHeight()\">\r\n    <p-header class=\"header\">\r\n        Enter Savings Target\r\n    </p-header>\r\n    <preferences (submitted)=\"display=false\"></preferences>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/components/setup-dialog/setup-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/setup-dialog/setup-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: SetupDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupDialogComponent", function() { return SetupDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SetupDialogComponent = /** @class */ (function () {
    function SetupDialogComponent() {
        this.display = true;
    }
    SetupDialogComponent.prototype.GetDialogWidth = function () {
        return window.screen.width;
    };
    SetupDialogComponent.prototype.GetDialogHeight = function () {
        return window.screen.height;
    };
    SetupDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'setup-dialog',
            template: __webpack_require__(/*! ./setup-dialog.component.html */ "./src/app/components/setup-dialog/setup-dialog.component.html"),
            styles: [__webpack_require__(/*! ./setup-dialog.component.css */ "./src/app/components/setup-dialog/setup-dialog.component.css")],
        })
    ], SetupDialogComponent);
    return SetupDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/summary/summary.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/summary/summary.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".summary-element {\r\n    height: 100%;\r\n    border-top: 1px solid #888888;\r\n    border-left: 1px solid #888888;\r\n    border-bottom: 1px solid #888888;\r\n    min-height: 80px;\r\n    text-align: center;\r\n    padding: 3px;\r\n}\r\n\r\n.summary-element-last {\r\n    border-right: 1px solid #888888;  \r\n}\r\n\r\n.summary-container {\r\n}\r\n\r\n.numeric-positive {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    color: rgb(0, 128, 0)\r\n}\r\n\r\n.numeric-neutral {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.numeric-negative {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    color: rgb(128, 0, 0)\r\n}\r\n\r\n.label {\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    color: #000000;\r\n}\r\n\r\n.icon-small {\r\n    height:25px;\r\n    width: 25px;\r\n}\r\n\r\n.subrow {\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/summary/summary.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/summary/summary.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"summary-container\">\r\n    <div class=\"col-xs-3 summary-element\">\r\n        <div class=\"row\"><span class=\"numeric-positive\">$212</span></div>\r\n        <div class=\"row\"><span class=\"label\">Per&nbsp;Month</span></div>\r\n    </div>\r\n    <div class=\"col-xs-3 summary-element\">\r\n            <div class=\"row\"><span class=\"numeric-positive\">45%</span></div>\r\n    </div>\r\n    <div class=\"col-xs-3 summary-element\">\r\n            <div class=\"row\"><span class=\"numeric-positive\">2 Months</span></div>\r\n            <div class=\"row\"><span class=\"label\">To Target</span></div>\r\n    </div>\r\n    <div class=\"col-xs-3 summary-element summary-element-last\">\r\n            <div style=\"margin-top: 15px;\">\r\n                <span class=\"numeric-negative\">12%&nbsp;</span>\r\n                <img src=\"../../assets/down-arrow-red.png\" class=\"icon-small\">\r\n            </div>\r\n    </div>   \r\n</div>"

/***/ }),

/***/ "./src/app/components/summary/summary.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/summary/summary.component.ts ***!
  \*********************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryComponent = /** @class */ (function () {
    function SummaryComponent() {
    }
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/components/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/components/summary/summary.component.css")]
        })
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/services/app-context.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/app-context.service.ts ***!
  \*************************************************/
/*! exports provided: AppContextService, AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextService", function() { return AppContextService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
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

var AppContextService = /** @class */ (function () {
    function AppContextService() {
        this.appContext = new AppContext();
    }
    AppContextService.prototype.GetContext = function () {
        return this.appContext;
    };
    AppContextService.prototype.SetContext = function (appContext) {
        this.appContext = appContext;
    };
    AppContextService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], AppContextService);
    return AppContextService;
}());

var AppContext = /** @class */ (function () {
    function AppContext(SavingsTarget, TargetDate, Currency) {
        if (SavingsTarget === void 0) { SavingsTarget = null; }
        if (TargetDate === void 0) { TargetDate = null; }
        if (Currency === void 0) { Currency = null; }
        this.SavingsTarget = SavingsTarget;
        this.TargetDate = TargetDate;
        this.Currency = Currency;
    }
    AppContext.prototype.IsInitialized = function () {
        return this.Currency != null && this.SavingsTarget != null && this.TargetDate != null;
    };
    return AppContext;
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

var SavingsService = /** @class */ (function () {
    function SavingsService() {
    }
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
        })
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

module.exports = __webpack_require__(/*! C:\git\little-piggy\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map