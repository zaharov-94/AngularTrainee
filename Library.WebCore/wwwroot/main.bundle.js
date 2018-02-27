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

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navmenu_navmenu_component__ = __webpack_require__("../../../../../src/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_magazine_magazine_component__ = __webpack_require__("../../../../../src/app/components/magazine/magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_magazine_service__ = __webpack_require__("../../../../../src/app/services/magazine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_book_book_component__ = __webpack_require__("../../../../../src/app/components/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_publicationHouse_publicationHouse_component__ = __webpack_require__("../../../../../src/app/components/publicationHouse/publicationHouse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_publicationHouse_service__ = __webpack_require__("../../../../../src/app/services/publicationHouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_publication_publication_component__ = __webpack_require__("../../../../../src/app/components/publication/publication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_publication_service__ = __webpack_require__("../../../../../src/app/services/publication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_brochure_brochure_component__ = __webpack_require__("../../../../../src/app/components/brochure/brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_brochure_service__ = __webpack_require__("../../../../../src/app/services/brochure.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// определение маршрутов
var appRoutes = [
    { path: '', redirectTo: 'publication', pathMatch: 'full' },
    { path: 'book', component: __WEBPACK_IMPORTED_MODULE_12__components_book_book_component__["a" /* BookComponent */] },
    { path: 'brochure', component: __WEBPACK_IMPORTED_MODULE_18__components_brochure_brochure_component__["a" /* BrochureComponent */] },
    { path: 'magazine', component: __WEBPACK_IMPORTED_MODULE_10__components_magazine_magazine_component__["a" /* MagazineComponent */] },
    { path: 'publicationhouse', component: __WEBPACK_IMPORTED_MODULE_14__components_publicationHouse_publicationHouse_component__["a" /* PublicationHouseComponent */] },
    { path: 'publication', component: __WEBPACK_IMPORTED_MODULE_16__components_publication_publication_component__["a" /* PublicationComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navmenu_navmenu_component__["a" /* NavMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_magazine_magazine_component__["a" /* MagazineComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_publicationHouse_publicationHouse_component__["a" /* PublicationHouseComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_publication_publication_component__["a" /* PublicationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_brochure_brochure_component__["a" /* BrochureComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__["d" /* DropDownsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_book_service__["a" /* BookDataService */], __WEBPACK_IMPORTED_MODULE_11__services_magazine_service__["a" /* MagazineDataService */], __WEBPACK_IMPORTED_MODULE_15__services_publicationHouse_service__["a" /* PublicationHouseDataService */],
                __WEBPACK_IMPORTED_MODULE_17__services_publication_service__["a" /* PublicationDataService */], __WEBPACK_IMPORTED_MODULE_19__services_brochure_service__["a" /* BrochureDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-sm-3'>\r\n      <nav-menu></nav-menu>\r\n    </div>\r\n    <div class='col-sm-9 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
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
            template: __webpack_require__("../../../../../src/app/components/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Books</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n    <kendo-grid [kendoGridBinding]=\"books\"\r\n                [height]=\"500\"\r\n                [pageable]=\"true\"\r\n                [sortable]=\"true\"\r\n                [navigable]=\"true\"\r\n                [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n                (remove)=\"removeHandler($event)\"\r\n                (dataStateChange)=\"onStateChange($event)\"\r\n                (edit)=\"editHandler($event)\"\r\n                (cancel)=\"cancelHandler($event)\"\r\n                (save)=\"saveHandler($event)\"\r\n                (add)=\"addHandler($event)\">\r\n        <ng-template kendoGridToolbarTemplate>\r\n            <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n        </ng-template>\r\n        <kendo-grid-column field=\"name\" title=\"Book Title\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"Book title\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"author\" title=\"Book author\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.author\" kendoGridFocusable name=\"Book author\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"yearOfPublishing\" editor=\"numeric\" title=\"Year of Publishing\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable required min=\"1900\"\r\n                       max=\"2020\" class=\"k-textbox\" name=\"Year\" type=\"number\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"publicationHouses\" editor=\"multiSelectEditor\" title=\"Publication houses\">\r\n            <ng-template kendoGridCellTemplate let-dataItem>\r\n                {{pubHouses(dataItem.id)}}\r\n            </ng-template>\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <kendo-multiselect [data]=\"publicationHouses\" [valueField]=\"'id'\" [textField]=\"'name'\"  [(value)]=\"dataItem.publicationHouses\"></kendo-multiselect>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-command-column title=\"\" width=\"220\">\r\n            <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n                <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n                <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n                <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n                <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_publicationHouse_service__ = __webpack_require__("../../../../../src/app/services/publicationHouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_book_model__ = __webpack_require__("../../../../../src/app/models/book.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = /** @class */ (function () {
    function BookComponent(bookDataService, publicationHouseDataService) {
        this.bookDataService = bookDataService;
        this.publicationHouseDataService = publicationHouseDataService;
        //public view: Observable<GridDataResult>;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    BookComponent.prototype.ngOnInit = function () {
        this.load();
    };
    BookComponent.prototype.load = function () {
        var _this = this;
        this.bookDataService.getBooks().subscribe(function (data) { return _this.books = data; });
        this.publicationHouseDataService.getPublicationHouses().subscribe(function (data) { return _this.publicationHouses = data; });
    };
    BookComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.bookDataService.deleteBook(dataItem.id).subscribe(function (data) { return _this.load(); });
        ;
    };
    BookComponent.prototype.pubHouses = function (id) {
        if ((id != null) && (this.books.find(function (x) { return x.id === id; }).publicationHouses != null)) {
            return this.books.find(function (x) { return x.id === id; }).publicationHouses.map(function (pubHouse) {
                return pubHouse.name;
            });
            ;
        }
        return new Array();
    };
    BookComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.load();
    };
    BookComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_3__models_book_model__["a" /* Book */]());
    };
    BookComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    };
    BookComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
        this.load();
    };
    BookComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        if (isNew) {
            this.bookDataService.createBook(dataItem).subscribe(function (data) { return _this.load(); });
        }
        if (!isNew) {
            this.bookDataService.updateBook(dataItem).subscribe(function (data) { return _this.load(); });
        }
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    };
    BookComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/book/book.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookDataService */], __WEBPACK_IMPORTED_MODULE_2__services_publicationHouse_service__["a" /* PublicationHouseDataService */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/brochure/brochure.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Brochures</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n    <kendo-grid [kendoGridBinding]=\"brochures\"\r\n                [height]=\"500\"\r\n                [pageable]=\"true\"\r\n                [sortable]=\"true\"\r\n                [navigable]=\"true\"\r\n                [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n                (remove)=\"removeHandler($event)\"\r\n                (dataStateChange)=\"onStateChange($event)\"\r\n                (edit)=\"editHandler($event)\"\r\n                (cancel)=\"cancelHandler($event)\"\r\n                (save)=\"saveHandler($event)\"\r\n                (add)=\"addHandler($event)\">\r\n        <ng-template kendoGridToolbarTemplate>\r\n            <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n        </ng-template>\r\n        <kendo-grid-column field=\"name\" title=\"Brochure Name\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"BrochureName\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"typeOfCorver\" editor=\"dropdown\" title=\"Cover type\">\r\n            <ng-template kendoGridCellTemplate let-dataItem>\r\n                {{dataItem.typeOfCover}}\r\n            </ng-template>\r\n            <ng-template kendoGridEditTemplate\r\n                         let-dataItem=\"dataItem\">\r\n                <kendo-dropdownlist [data]=\"typeCovers\"\r\n                                    [valuePrimitive]=\"true\"\r\n                                    [(value)]=\"dataItem.typeOfCover\">               \r\n                </kendo-dropdownlist>\r\n                <!--<kendo-popup [anchor]=\"ddl.element\"\r\n                             *ngIf=\"formGroup.get(column.field).invalid && !(isNew && formGroup.get(column.field).untouched)\"\r\n                             popupClass=\"k-widget k-tooltip k-tooltip-validation k-invalid-msg\">\r\n                    <span class=\"k-icon k-i-warning\"></span>\r\n                    Category is required\r\n                </kendo-popup>-->\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"numberOfPages\" editor=\"numeric\" title=\"Pages count\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.numberOfPages\" kendoGridFocusable name=\"Count pages\" required min=\"0\"\r\n                       max=\"999\" type=\"number\" class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-command-column title=\"\" width=\"220\">\r\n            <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n                <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n                <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n                <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n                <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/brochure/brochure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brochure_service__ = __webpack_require__("../../../../../src/app/services/brochure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_brochure_model__ = __webpack_require__("../../../../../src/app/models/brochure.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrochureComponent = /** @class */ (function () {
    function BrochureComponent(brochureDataService) {
        this.brochureDataService = brochureDataService;
        //public view: Observable<GridDataResult>;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    BrochureComponent.prototype.ngOnInit = function () {
        this.load();
    };
    BrochureComponent.prototype.load = function () {
        var _this = this;
        this.brochureDataService.getBrochures().subscribe(function (data) { return _this.brochures = data; });
        this.brochureDataService.getCoverTypes().subscribe(function (data) { return _this.typeCovers = data; });
    };
    BrochureComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.brochureDataService.deleteBrochure(dataItem.id).subscribe(function (data) { return _this.load(); });
        ;
    };
    BrochureComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.load();
    };
    BrochureComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__models_brochure_model__["a" /* Brochure */]());
    };
    BrochureComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    };
    BrochureComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
        this.load();
    };
    BrochureComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        if (isNew) {
            this.brochureDataService.createBrochure(dataItem).subscribe(function (data) { return _this.load(); });
        }
        if (!isNew) {
            this.brochureDataService.updateBrochure(dataItem).subscribe(function (data) { return _this.load(); });
        }
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    };
    BrochureComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    };
    BrochureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/brochure/brochure.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_brochure_service__["a" /* BrochureDataService */]])
    ], BrochureComponent);
    return BrochureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/magazine/magazine.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Magazines</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n  <kendo-grid \r\n              [kendoGridBinding]=\"magazines\"\r\n              [height]=\"500\"\r\n              [pageable]=\"true\"\r\n              [sortable]=\"true\"\r\n              [navigable]=\"true\"\r\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n              (remove)=\"removeHandler($event)\"\r\n              (dataStateChange)=\"onStateChange($event)\"\r\n              (edit)=\"editHandler($event)\"\r\n              (cancel)=\"cancelHandler($event)\"\r\n              (save)=\"saveHandler($event)\" \r\n              (add)=\"addHandler($event)\"\r\n              >\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"name\" title=\"Magazine Name\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"MagazineName\" required class=\"k-textbox\"  />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"number\" editor=\"numeric\" title=\"Number\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.number\" kendoGridFocusable name=\"Number\" required min=\"0\" \r\n               max=\"999\"  type=\"number\" class=\"k-textbox\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"yearOfPublishing\" editor=\"numeric\" title=\"Year of Publishing\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable required min=\"1900\"\r\n               max=\"2020\" class=\"k-textbox\" name=\"Year\" type=\"number\"/>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-command-column title=\"\" width=\"220\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n        <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n        <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n        <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/magazine/magazine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magazine_service__ = __webpack_require__("../../../../../src/app/services/magazine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_magazine_model__ = __webpack_require__("../../../../../src/app/models/magazine.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MagazineComponent = /** @class */ (function () {
    function MagazineComponent(magazineDataService) {
        this.magazineDataService = magazineDataService;
        //public view: Observable<GridDataResult>;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    MagazineComponent.prototype.ngOnInit = function () {
        this.load();
    };
    MagazineComponent.prototype.load = function () {
        var _this = this;
        this.magazineDataService.getMagazines().subscribe(function (data) { return _this.magazines = data; });
    };
    MagazineComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.magazineDataService.deleteMagazine(dataItem.id).subscribe(function (data) { return _this.load(); });
        ;
    };
    MagazineComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.load();
    };
    MagazineComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__models_magazine_model__["a" /* Magazine */]());
    };
    MagazineComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    };
    MagazineComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
        this.load();
    };
    MagazineComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        if (isNew) {
            this.magazineDataService.createMagazine(dataItem).subscribe(function (data) { return _this.load(); });
        }
        if (!isNew) {
            this.magazineDataService.updateMagazine(dataItem).subscribe(function (data) { return _this.load(); });
        }
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    };
    MagazineComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    };
    MagazineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/magazine/magazine.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_magazine_service__["a" /* MagazineDataService */]])
    ], MagazineComponent);
    return MagazineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navmenu/navmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/publication']\">Publications</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/book']\">\r\n                        <span class='glyphicon glyphicon-book'></span> Books\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/brochure']\">\r\n                        <span class='glyphicon glyphicon-file'></span> Brochures\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/magazine']\">\r\n                        <span class='glyphicon glyphicon-modal-window'></span> Magazines\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/publicationhouse']\">\r\n                        <span class='glyphicon glyphicon-print'></span> Publication houses\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/publication']\">\r\n                        All publications\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navmenu/navmenu.component.ts":
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
            template: __webpack_require__("../../../../../src/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navmenu/navmenu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/publication/publication.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Publications</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n  <kendo-grid \r\n              [kendoGridBinding]=\"publications\"\r\n              [height]=\"500\"\r\n              [pageable]=\"true\"\r\n              [sortable]=\"true\"\r\n              [navigable]=\"true\"\r\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n              (dataStateChange)=\"onStateChange($event)\"\r\n              >\r\n    <kendo-grid-column field=\"name\" title=\"Publication Name\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"PublicationName\" required class=\"k-textbox\"  />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"type\" title=\"Type publication\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.type\" kendoGridFocusable name=\"Type\" required class=\"k-textbox\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n  </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/publication/publication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_publication_service__ = __webpack_require__("../../../../../src/app/services/publication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationComponent = /** @class */ (function () {
    function PublicationComponent(publicationDataService) {
        this.publicationDataService = publicationDataService;
        //public view: Observable<GridDataResult>;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    PublicationComponent.prototype.ngOnInit = function () {
        this.load();
    };
    PublicationComponent.prototype.load = function () {
        var _this = this;
        this.publicationDataService.getPublications().subscribe(function (data) { return _this.publications = data; });
    };
    PublicationComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.load();
    };
    PublicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/publication/publication.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_publication_service__["a" /* PublicationDataService */]])
    ], PublicationComponent);
    return PublicationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/publicationHouse/publicationHouse.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>PublicationHouses</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n    <kendo-grid [kendoGridBinding]=\"publicationHouses\"\r\n                [height]=\"500\"\r\n                [pageable]=\"true\"\r\n                [sortable]=\"true\"\r\n                [navigable]=\"true\"\r\n                [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n                (remove)=\"removeHandler($event)\"\r\n                (dataStateChange)=\"onStateChange($event)\"\r\n                (edit)=\"editHandler($event)\"\r\n                (cancel)=\"cancelHandler($event)\"\r\n                (save)=\"saveHandler($event)\"\r\n                (add)=\"addHandler($event)\">\r\n        <ng-template kendoGridToolbarTemplate>\r\n            <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n        </ng-template>\r\n        <kendo-grid-column field=\"name\" title=\"PublicationHouse Name\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"PublicationHouseName\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"address\" title=\"PublicationHouse address\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.address\" kendoGridFocusable name=\"PublicationHouse address\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-command-column title=\"\" width=\"220\">\r\n            <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n                <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n                <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n                <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n                <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/publicationHouse/publicationHouse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationHouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_publicationHouse_service__ = __webpack_require__("../../../../../src/app/services/publicationHouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_publicationHouse_model__ = __webpack_require__("../../../../../src/app/models/publicationHouse.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationHouseComponent = /** @class */ (function () {
    function PublicationHouseComponent(publicationHouseDataService) {
        this.publicationHouseDataService = publicationHouseDataService;
        //public view: Observable<GridDataResult>;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    PublicationHouseComponent.prototype.ngOnInit = function () {
        this.load();
    };
    PublicationHouseComponent.prototype.load = function () {
        var _this = this;
        this.publicationHouseDataService.getPublicationHouses().subscribe(function (data) { return _this.publicationHouses = data; });
    };
    PublicationHouseComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.publicationHouseDataService.deletePublicationHouse(dataItem.id).subscribe(function (data) { return _this.load(); });
        ;
    };
    PublicationHouseComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.load();
    };
    PublicationHouseComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__models_publicationHouse_model__["a" /* PublicationHouse */]());
    };
    PublicationHouseComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    };
    PublicationHouseComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
        this.load();
    };
    PublicationHouseComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        if (isNew) {
            this.publicationHouseDataService.createPublicationHouse(dataItem).subscribe(function (data) { return _this.load(); });
        }
        if (!isNew) {
            this.publicationHouseDataService.updatePublicationHouse(dataItem).subscribe(function (data) { return _this.load(); });
        }
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    };
    PublicationHouseComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    };
    PublicationHouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/publicationHouse/publicationHouse.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_publicationHouse_service__["a" /* PublicationHouseDataService */]])
    ], PublicationHouseComponent);
    return PublicationHouseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "../../../../../src/app/models/brochure.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brochure; });
var Brochure = /** @class */ (function () {
    function Brochure() {
    }
    return Brochure;
}());



/***/ }),

/***/ "../../../../../src/app/models/magazine.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Magazine; });
var Magazine = /** @class */ (function () {
    function Magazine() {
    }
    return Magazine;
}());



/***/ }),

/***/ "../../../../../src/app/models/publicationHouse.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationHouse; });
var PublicationHouse = /** @class */ (function () {
    function PublicationHouse() {
    }
    return PublicationHouse;
}());



/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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

/***/ "../../../../../src/app/services/brochure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureDataService; });
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

//import { Observable } from 'rxjs/Observable';

var BrochureDataService = /** @class */ (function () {
    function BrochureDataService(http) {
        this.http = http;
        this.url = "/api/brochures";
    }
    BrochureDataService.prototype.getBrochures = function () {
        return this.http.get(this.url);
    };
    BrochureDataService.prototype.getBrochure = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    BrochureDataService.prototype.getCoverTypes = function () {
        return this.http.get("/api/covertypes");
    };
    BrochureDataService.prototype.createBrochure = function (brochure) {
        return this.http.post(this.url, brochure);
    };
    BrochureDataService.prototype.updateBrochure = function (brochure) {
        return this.http.put(this.url + '/' + brochure.id, brochure);
    };
    BrochureDataService.prototype.deleteBrochure = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    BrochureDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BrochureDataService);
    return BrochureDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/magazine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineDataService; });
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


var MagazineDataService = /** @class */ (function () {
    function MagazineDataService(http) {
        this.http = http;
        this.url = "/api/magazines";
    }
    MagazineDataService.prototype.getMagazines = function () {
        return this.http.get(this.url);
    };
    MagazineDataService.prototype.getMagazine = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    MagazineDataService.prototype.createMagazine = function (magazine) {
        return this.http.post(this.url, magazine);
    };
    MagazineDataService.prototype.updateMagazine = function (magazine) {
        return this.http.put(this.url + '/' + magazine.id, magazine);
    };
    MagazineDataService.prototype.deleteMagazine = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    MagazineDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MagazineDataService);
    return MagazineDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/publication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationDataService; });
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


var PublicationDataService = /** @class */ (function () {
    function PublicationDataService(http) {
        this.http = http;
        this.url = "/api/publications";
    }
    PublicationDataService.prototype.getPublications = function () {
        return this.http.get(this.url);
    };
    PublicationDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PublicationDataService);
    return PublicationDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/publicationHouse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationHouseDataService; });
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


var PublicationHouseDataService = /** @class */ (function () {
    function PublicationHouseDataService(http) {
        this.http = http;
        this.url = "/api/publicationHouses";
    }
    PublicationHouseDataService.prototype.getPublicationHouses = function () {
        return this.http.get(this.url);
    };
    PublicationHouseDataService.prototype.getPublicationHouse = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    PublicationHouseDataService.prototype.createPublicationHouse = function (publicationHouse) {
        return this.http.post(this.url, publicationHouse);
    };
    PublicationHouseDataService.prototype.updatePublicationHouse = function (publicationHouse) {
        return this.http.put(this.url + '/' + publicationHouse.id, publicationHouse);
    };
    PublicationHouseDataService.prototype.deletePublicationHouse = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    PublicationHouseDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PublicationHouseDataService);
    return PublicationHouseDataService;
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