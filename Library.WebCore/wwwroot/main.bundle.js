webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-sm-3'>\r\n      <nav-menu></nav-menu>\r\n    </div>\r\n    <div class='col-sm-9 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_list_book_list_component__ = __webpack_require__("../../../../../src/app/book/list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_form_book_form_component__ = __webpack_require__("../../../../../src/app/book/form/book-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_create_book_create_component__ = __webpack_require__("../../../../../src/app/book/create/book-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__book_edit_book_edit_component__ = __webpack_require__("../../../../../src/app/book/edit/book-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__book_data_service__ = __webpack_require__("../../../../../src/app/book/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navmenu_navmenu_component__ = __webpack_require__("../../../../../src/app/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__kendo_kendo_component__ = __webpack_require__("../../../../../src/app/kendo/kendo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// определение маршрутов
var appRoutes = [
    { path: '', redirectTo: 'book', pathMatch: 'full' },
    { path: 'book', component: __WEBPACK_IMPORTED_MODULE_9__book_list_book_list_component__["a" /* BookListComponent */] },
    { path: 'book/create', component: __WEBPACK_IMPORTED_MODULE_11__book_create_book_create_component__["a" /* BookCreateComponent */] },
    { path: 'book/edit/:id', component: __WEBPACK_IMPORTED_MODULE_12__book_edit_book_edit_component__["a" /* BookEditComponent */] },
    { path: 'kendo', component: __WEBPACK_IMPORTED_MODULE_15__kendo_kendo_component__["a" /* KendoComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navmenu_navmenu_component__["a" /* NavMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__book_edit_book_edit_component__["a" /* BookEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__book_form_book_form_component__["a" /* BookFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__kendo_kendo_component__["a" /* KendoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__["a" /* GridModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_13__book_data_service__["a" /* BookDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import RxJs required methods


var AppService = /** @class */ (function () {
    // Resolve HTTP using the constructor
    function AppService(_http) {
        this._http = _http;
        this.greetUrl = 'api/Hello';
    }
    AppService.prototype.sayHello = function () {
        return this._http.get(this.greetUrl).map(function (response) {
            return response.text();
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/book/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, name, author, yearOfPublishing) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.yearOfPublishing = yearOfPublishing;
    }
    return Book;
}());



/***/ }),

/***/ "../../../../../src/app/book/create/book-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Добавление книги</h2>\r\n    <book-form [(book)]=\"book\"></book-form>\r\n    <div class=\"form-group\">\r\n        <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-success\" />\r\n        <a routerLink=\"/book\" class=\"btn btn-warning\">Отмена</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/book/create/book-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/book/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__("../../../../../src/app/book/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.book = new __WEBPACK_IMPORTED_MODULE_3__book__["a" /* Book */](); // добавляемый объект
    }
    BookCreateComponent.prototype.save = function () {
        var _this = this;
        this.dataService.createBook(this.book).subscribe(function (data) { return _this.router.navigateByUrl("/book"); });
    };
    BookCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/book/create/book-create.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* BookDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookDataService = /** @class */ (function () {
    function BookDataService(http) {
        this.http = http;
        this.url = "/api/books";
    }
    BookDataService.prototype.getBooks = function () {
        return this.http.get(this.url);
    };
    BookDataService.prototype.getBook = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    BookDataService.prototype.createBook = function (book) {
        return this.http.post(this.url, book);
    };
    BookDataService.prototype.updateBook = function (book) {
        return this.http.put(this.url + '/' + book.id, book);
    };
    BookDataService.prototype.deleteBook = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    BookDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookDataService);
    return BookDataService;
}());



/***/ }),

/***/ "../../../../../src/app/book/edit/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\r\n    <h2>Изменение данных о книге</h2>\r\n    <book-form [(book)]=\"book\"></book-form>\r\n    <div class=\"form-group\">\r\n        <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-success\" />\r\n    </div>\r\n</div>\r\n<a routerLink=\"/book\" class=\"nav-link\">Назад к списку</a>"

/***/ }),

/***/ "../../../../../src/app/book/edit/book-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/book/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(dataService, router, activeRoute) {
        this.dataService = dataService;
        this.router = router;
        this.loaded = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    BookEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id)
            this.dataService.getBook(this.id)
                .subscribe(function (data) {
                _this.book = data;
                if (_this.book != null)
                    _this.loaded = true;
            });
    };
    BookEditComponent.prototype.save = function () {
        var _this = this;
        this.dataService.updateBook(this.book).subscribe(function (data) { return _this.router.navigateByUrl("/book"); });
    };
    BookEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/book/edit/book-edit.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* BookDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book/form/book-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n    <label>Название</label>\r\n    <input type=\"text\" [(ngModel)]=\"book.name\" class=\"form-control\" />\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Автор</label>\r\n    <input type=\"text\" [(ngModel)]=\"book.author\" class=\"form-control\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Год</label>\r\n  <input type=\"text\" [(ngModel)]=\"book.yearOfPublishing\" class=\"form-control\" />\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book/form/book-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book__ = __webpack_require__("../../../../../src/app/book/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookFormComponent = /** @class */ (function () {
    function BookFormComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */])
    ], BookFormComponent.prototype, "book", void 0);
    BookFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "book-form",
            template: __webpack_require__("../../../../../src/app/book/form/book-form.component.html")
        })
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book/list/book-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>List of books</h2>\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <td>Название</td>\r\n            <td>Автор</td>\r\n            <td>Год</td>\r\n            <td></td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let p of books\">\r\n            <td>{{p?.name}}</td>\r\n            <td>{{p?.author}}</td>\r\n            <td>{{p?.yearOfPublishing}}</td>\r\n            <td>\r\n                <a [routerLink]=\"['edit', p.id]\" class=\"btn btn-sm btn-primary\">Изменить</a>\r\n                <button (click)=\"delete(p.id)\" class=\"btn btn-sm btn-danger\">Удалить</button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<br />\r\n<div>\r\n    <a routerLink=\"create\" class=\"btn btn-sm btn-success\">Добавить</a>\r\n</div>\r\n<div id=\"grid\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book/list/book-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/book/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = /** @class */ (function () {
    function BookListComponent(dataService) {
        this.dataService = dataService;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    BookListComponent.prototype.load = function () {
        var _this = this;
        this.dataService.getBooks().subscribe(function (data) { return _this.books = data; });
    };
    BookListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dataService.deleteBook(id).subscribe(function (data) { return _this.load(); });
    };
    BookListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/book/list/book-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* BookDataService */]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kendo/kendo.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate #myForm=\"ngForm\">\r\n  <kendo-grid [kendoGridTemplateEditing]=\"createNewProduct\"\r\n              [kendoGridBinding]=\"products\"\r\n              [height]=\"500\"\r\n              [pageSize]=\"10\"\r\n              [pageable]=\"true\"\r\n              [sortable]=\"true\"\r\n              [navigable]=\"true\"\r\n              >\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand type=\"button\">Add new</button>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"ProductName\" title=\"Product Name\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.ProductName\" kendoGridFocusable name=\"ProductName\" class=\"k-textbox\" required />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"UnitPrice\" editor=\"numeric\" title=\"Price\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.UnitPrice\" kendoGridFocusable name=\"UnitPrice\" class=\"k-textbox\" type=\"number\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"Discontinued\" editor=\"boolean\" title=\"Discontinued\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.Discontinued\" kendoGridFocusable name=\"Discontinued\" type=\"checkbox\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"UnitsInStock\" editor=\"numeric\" title=\"Units In Stock\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.UnitsInStock\"\r\n               kendoGridFocusable\r\n               name=\"UnitsInStock\"\r\n               required\r\n               min=\"0\"\r\n               max=\"999\"\r\n               class=\"k-textbox\"\r\n               type=\"number\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-command-column title=\"command\" width=\"220\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\r\n        <button kendoGridRemoveCommand type=\"button\">Remove</button>\r\n        <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n        <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/kendo/kendo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KendoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products__ = __webpack_require__("../../../../../src/app/kendo/products.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__("../../../../../src/app/kendo/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KendoComponent = /** @class */ (function () {
    function KendoComponent() {
        this.products = __WEBPACK_IMPORTED_MODULE_1__products__["a" /* products */];
    }
    KendoComponent.prototype.createNewProduct = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__model__["a" /* Product */]();
    };
    KendoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/kendo/kendo.component.html")
        })
    ], KendoComponent);
    return KendoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kendo/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.ProductName = '';
        this.Discontinued = false;
        this.UnitPrice = 0;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/kendo/products.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sampleProducts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return products; });
var sampleProducts = [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 8, 20)
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 7, 12)
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 8, 26)
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 7, 17)
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        },
        "FirstOrderedOn": new Date(1996, 7, 22)
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 11, 1)
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        },
        "FirstOrderedOn": new Date(1997, 1, 21)
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        },
        "FirstOrderedOn": new Date(1996, 8, 5)
    }
];
var products = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0000,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 2,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0000,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0000,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.3500,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0000,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0000,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0000,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0000,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 10,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0000,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 11,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0000,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 12,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0000,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 13,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0000,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 14,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.2500,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 15,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5000,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 16,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.4500,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 17,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0000,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 18,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5000,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 19,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2000,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 20,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0000,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 21,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0000,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 22,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0000,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 23,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0000,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 24,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5000,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 25,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0000,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 26,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.2300,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 27,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9000,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 28,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 29,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.7900,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 30,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.8900,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 31,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5000,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 32,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0000,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 33,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5000,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 34,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0000,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 35,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0000,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 36,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0000,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 37,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0000,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 38,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 39,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0000,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 40,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4000,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 41,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.6500,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 42,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 43,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 44,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.4500,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 45,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5000,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 46,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0000,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 47,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5000,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 48,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.7500,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 49,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0000,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 50,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.2500,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 51,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0000,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 52,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0000,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 53,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8000,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 54,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.4500,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 55,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0000,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 56,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0000,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 57,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5000,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 58,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.2500,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 59,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0000,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 60,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0000,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 61,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5000,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 62,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 63,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9000,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 64,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.2500,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 65,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.0500,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 66,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0000,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 67,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0000,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 68,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5000,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 69,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 70,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0000,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 71,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 72,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8000,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 73,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0000,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 74,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0000,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 75,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.7500,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 76,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0000,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 77,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0000,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }];


/***/ }),

/***/ "../../../../../src/app/navmenu/navmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">SideNav</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/product']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Product\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/book']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Book\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/kendo']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Kendo\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-menu',
            template: __webpack_require__("../../../../../src/app/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navmenu/navmenu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map