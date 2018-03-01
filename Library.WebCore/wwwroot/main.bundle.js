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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_authorization_auth_module__ = __webpack_require__("../../../../../src/app/components/authorization/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_library_library_module__ = __webpack_require__("../../../../../src/app/components/library/library.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__components_app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_authorization_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_library_library_module__["a" /* LibraryModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__components_app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_authorization_auth_module__ = __webpack_require__("../../../../../src/app/components/authorization/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_library_library_module__ = __webpack_require__("../../../../../src/app/components/library/library.module.ts");



const appRoutes = [
    { path: '', redirectTo: 'library', pathMatch: 'full' },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_1__components_authorization_auth_module__["a" /* AuthModule */] },
    { path: 'library', component: __WEBPACK_IMPORTED_MODULE_2__components_library_library_module__["a" /* LibraryModule */] }
];
const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    canActivate() {
        if (!__WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */].isLoggedIn) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    }
};
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
], AuthGuard);



/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppComponent = class AppComponent {
    constructor(router, cookie) {
        this.router = router;
        this.cookie = cookie;
        __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */].isLoggedIn = this.cookie.get("isLoggedIn") === "true";
        __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */].isAdmin = this.cookie.get("isAdmin") === "true";
        __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */].userName = this.cookie.get("userName");
    }
    ngOnInit() {
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/components/authorization/account.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_root_component__ = __webpack_require__("../../../../../src/app/components/authorization/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/components/authorization/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/components/authorization/register/register.component.ts");




const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'account', component: __WEBPACK_IMPORTED_MODULE_1__root_root_component__["a" /* RootComponent */],
        children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] }
        ]
    }
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;



/***/ }),

/***/ "../../../../../src/app/components/authorization/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_routing__ = __webpack_require__("../../../../../src/app/components/authorization/account.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_root_component__ = __webpack_require__("../../../../../src/app/components/authorization/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/components/authorization/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/components/authorization/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__account_routing__["a" /* routing */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__root_root_component__["a" /* RootComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */]
        ]
    })
], AuthModule);



/***/ }),

/***/ "../../../../../src/app/components/authorization/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #eee;\n}\n\n.form-auth {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n\n.form-auth .form-auth-heading,\n.form-auth .checkbox {\n    margin-bottom: 10px;\n}\n\n.form-auth .checkbox {\n    font-weight: normal;\n}\n\n.form-auth .form-control {\n    position: relative;\n    height: auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n}\n\n.form-auth .form-control:focus {\n        z-index: 2;\n    }\n\n.form-auth input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.form-auth input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorization/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\" style=\"text-align:center\">\r\n    <strong>All set!</strong> Please login with your account\r\n</div>\r\n<form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\" class=\"form-auth\">\r\n    <h2 class=\"form-auth-heading\">Login</h2>\r\n    <div class=\"form-group\">\r\n        <input id=\"email\" type=\"text\" required name=\"email\" [ngModel]=\"loginModel.email\" #email=\"ngModel\" tmFocus validateEmail class=\"form-control\"\r\n               placeholder=\"Email address\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input id=\"password\" type=\"password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\" ngModel>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"f.invalid || isRequesting\">Login</button>\r\n        <a [routerLink]=\"['/account/register']\"> Don`t have account?</a>\r\n    </div>\r\n    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Oops!</strong> {{errors}}\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/authorization/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LoginComponent = class LoginComponent {
    constructor(accountService, router, activatedRoute) {
        this.accountService = accountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.loginModel = { email: '', password: '' };
    }
    ngOnInit() {
        this.accountService.logout();
        __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */].isAdmin = null;
        __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */].isLoggedIn = false;
        this.subscription = this.activatedRoute.queryParams.subscribe((param) => {
            this.brandNew = param['brandNew'];
            this.loginModel.email = param['email'];
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    login({ value, valid }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.accountService.login(value)
                .finally(() => this.isRequesting = false)
                .subscribe(result => {
                if (result) {
                    this.router.navigate(['/library']);
                }
            }, error => this.errors = "Not correct data!");
        }
    }
};
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/authorization/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorization/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
], LoginComponent);



/***/ }),

/***/ "../../../../../src/app/components/authorization/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #eee;\n}\n\n.form-auth {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n\n.form-auth .form-auth-heading,\n.form-auth .checkbox {\n    margin-bottom: 10px;\n}\n\n.form-auth .checkbox {\n    font-weight: normal;\n}\n\n.form-auth .form-control {\n    position: relative;\n    height: auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n}\n\n.form-auth .form-control:focus {\n        z-index: 2;\n    }\n\n.form-auth input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.form-auth input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorization/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<form #f=\"ngForm\" novalidate (ngSubmit)=\"register(f)\" class=\"form-auth\">\r\n    <h2 class=\"form-auth-heading\">Registration</h2>\r\n    <div class=\"form-group\">\r\n        <input id=\"name\" type=\"text\" required name=\"name\" class=\"form-control\" placeholder=\"Name\" tmFocus ngModel>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email address\" ngModel #email=\"ngModel\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input id=\"password\" type=\"password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\" ngModel>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input id=\"confirmPassword\" type=\"password\" required name=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm password\" ngModel>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8\"><button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button></div>\r\n            <div class=\"col-sm-4\"><a [routerLink]=\"['/account/login']\" class=\"btn btn-block\">Cancel</a></div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Oops!</strong> {{errors}}\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/authorization/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let RegisterComponent = class RegisterComponent {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.accountService.logout();
        __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */].isAdmin = null;
        __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */].isLoggedIn = false;
    }
    register({ value, valid }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (!valid) {
            return;
        }
        this.accountService.register(value)
            .finally(() => this.isRequesting = false)
            .subscribe(result => {
            if (result) {
                this.router.navigate(['/account/login'], { queryParams: { brandNew: true, email: value.email } });
            }
        }, errors => this.errors = "Entered data not correct!");
    }
};
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/components/authorization/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorization/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
], RegisterComponent);



/***/ }),

/***/ "../../../../../src/app/components/authorization/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/authorization/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RootComponent = class RootComponent {
};
RootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'root',
        template: __webpack_require__("../../../../../src/app/components/authorization/root/root.component.html"),
    })
], RootComponent);



/***/ }),

/***/ "../../../../../src/app/components/library/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Books</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n    <kendo-grid [kendoGridBinding]=\"books\"\r\n                [height]=\"500\"\r\n                [pageable]=\"true\"\r\n                [sortable]=\"true\"\r\n                [navigable]=\"true\"\r\n                [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n                (remove)=\"removeHandler($event)\"\r\n                (dataStateChange)=\"onStateChange($event)\"\r\n                (edit)=\"editHandler($event)\"\r\n                (cancel)=\"cancelHandler($event)\"\r\n                (save)=\"saveHandler($event)\"\r\n                (add)=\"addHandler($event)\">\r\n        <ng-template kendoGridToolbarTemplate *ngIf=\"isAdmin\">\r\n            <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n        </ng-template>\r\n        <kendo-grid-column field=\"name\" title=\"Book Title\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"Book title\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"author\" title=\"Book author\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.author\" kendoGridFocusable name=\"Book author\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"yearOfPublishing\" editor=\"numeric\" title=\"Year of Publishing\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable required min=\"1900\"\r\n                       max=\"2020\" class=\"k-textbox\" name=\"Year\" type=\"number\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"publicationHouses\" editor=\"multiSelectEditor\" title=\"Publication houses\">\r\n            <ng-template kendoGridCellTemplate let-dataItem>\r\n                {{pubHouses(dataItem.id)}}\r\n            </ng-template>\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <kendo-multiselect [data]=\"publicationHouses\" [valueField]=\"'id'\" [textField]=\"'name'\"  [(value)]=\"dataItem.publicationHouses\"></kendo-multiselect>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-command-column title=\"\" width=\"220\" *ngIf=\"isAdmin\">\r\n            <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n                <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n                <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n                <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n                <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_publicationHouse_service__ = __webpack_require__("../../../../../src/app/services/publicationHouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_book_model__ = __webpack_require__("../../../../../src/app/models/book.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let BookComponent = class BookComponent {
    constructor(bookDataService, publicationHouseDataService) {
        this.bookDataService = bookDataService;
        this.publicationHouseDataService = publicationHouseDataService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    ngOnInit() {
        this.load();
        this.isAdmin = __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */].isAdmin;
    }
    load() {
        this.bookDataService.getBooks().subscribe((data) => this.books = data);
        this.publicationHouseDataService.getPublicationHouses().subscribe((data) => this.publicationHouses = data);
    }
    removeHandler({ dataItem }) {
        this.bookDataService.deleteBook(dataItem.id).subscribe(data => this.load());
        ;
    }
    pubHouses(id) {
        if ((id != null) && (this.books.find(x => x.id === id).publicationHouses != null)) {
            return this.books.find(x => x.id === id).publicationHouses.map(function (pubHouse) {
                return pubHouse.name;
            });
            ;
        }
        return new Array();
    }
    onStateChange(state) {
        this.gridState = state;
        this.load();
    }
    addHandler({ sender }) {
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_3__models_book_model__["a" /* Book */]());
    }
    editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    }
    cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
        this.load();
    }
    saveHandler({ sender, rowIndex, dataItem, isNew }) {
        if (isNew) {
            this.bookDataService.createBook(dataItem).subscribe(data => this.load());
        }
        if (!isNew) {
            this.bookDataService.updateBook(dataItem).subscribe(data => this.load());
        }
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }
    closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }
};
BookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: __webpack_require__("../../../../../src/app/components/library/book/book.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookDataService */], __WEBPACK_IMPORTED_MODULE_2__services_publicationHouse_service__["a" /* PublicationHouseDataService */]])
], BookComponent);



/***/ }),

/***/ "../../../../../src/app/components/library/brochure/brochure.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Brochures</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n    <kendo-grid [kendoGridBinding]=\"brochures\"\r\n                [height]=\"500\"\r\n                [pageable]=\"true\"\r\n                [sortable]=\"true\"\r\n                [navigable]=\"true\"\r\n                [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n                (remove)=\"removeHandler($event)\"\r\n                (dataStateChange)=\"onStateChange($event)\"\r\n                (edit)=\"editHandler($event)\"\r\n                (cancel)=\"cancelHandler($event)\"\r\n                (save)=\"saveHandler($event)\"\r\n                (add)=\"addHandler($event)\">\r\n        <ng-template kendoGridToolbarTemplate *ngIf=\"isAdmin\">\r\n            <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n        </ng-template>\r\n        <kendo-grid-column field=\"name\" title=\"Brochure Name\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"BrochureName\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"typeOfCorver\" editor=\"dropdown\" title=\"Cover type\">\r\n            <ng-template kendoGridCellTemplate let-dataItem>\r\n                {{dataItem.typeOfCover}}\r\n            </ng-template>\r\n            <ng-template kendoGridEditTemplate\r\n                         let-dataItem=\"dataItem\">\r\n                <kendo-dropdownlist [data]=\"typeCovers\"\r\n                                    [valuePrimitive]=\"true\"\r\n                                    [(value)]=\"dataItem.typeOfCover\">               \r\n                </kendo-dropdownlist>\r\n                <!--<kendo-popup [anchor]=\"ddl.element\"\r\n                             *ngIf=\"formGroup.get(column.field).invalid && !(isNew && formGroup.get(column.field).untouched)\"\r\n                             popupClass=\"k-widget k-tooltip k-tooltip-validation k-invalid-msg\">\r\n                    <span class=\"k-icon k-i-warning\"></span>\r\n                    Category is required\r\n                </kendo-popup>-->\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"numberOfPages\" editor=\"numeric\" title=\"Pages count\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.numberOfPages\" kendoGridFocusable name=\"Count pages\" required min=\"0\"\r\n                       max=\"999\" type=\"number\" class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-command-column title=\"\" width=\"220\" *ngIf=\"isAdmin\">\r\n            <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n                <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n                <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n                <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n                <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/brochure/brochure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brochure_service__ = __webpack_require__("../../../../../src/app/services/brochure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_brochure_model__ = __webpack_require__("../../../../../src/app/models/brochure.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BrochureComponent = class BrochureComponent {
    constructor(brochureDataService) {
        this.brochureDataService = brochureDataService;
        //public view: Observable<GridDataResult>;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    ngOnInit() {
        this.load();
        this.isAdmin = __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */].isAdmin;
    }
    load() {
        this.brochureDataService.getBrochures().subscribe((data) => this.brochures = data);
        this.brochureDataService.getCoverTypes().subscribe((data) => this.typeCovers = data);
    }
    removeHandler({ dataItem }) {
        this.brochureDataService.deleteBrochure(dataItem.id).subscribe(data => this.load());
        ;
    }
    onStateChange(state) {
        this.gridState = state;
        this.load();
    }
    addHandler({ sender }) {
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__models_brochure_model__["a" /* Brochure */]());
    }
    editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    }
    cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
        this.load();
    }
    saveHandler({ sender, rowIndex, dataItem, isNew }) {
        if (isNew) {
            this.brochureDataService.createBrochure(dataItem).subscribe(data => this.load());
        }
        if (!isNew) {
            this.brochureDataService.updateBrochure(dataItem).subscribe(data => this.load());
        }
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }
    closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }
};
BrochureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: __webpack_require__("../../../../../src/app/components/library/brochure/brochure.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_brochure_service__["a" /* BrochureDataService */]])
], BrochureComponent);



/***/ }),

/***/ "../../../../../src/app/components/library/library.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es2015/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es2015/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dateinputs__ = __webpack_require__("../../../../@progress/kendo-angular-dateinputs/dist/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__library_routing__ = __webpack_require__("../../../../../src/app/components/library/library.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__root_root_component__ = __webpack_require__("../../../../../src/app/components/library/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navigation_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/navigation/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navigation_navmenu_navmenu_component__ = __webpack_require__("../../../../../src/app/components/navigation/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__book_book_component__ = __webpack_require__("../../../../../src/app/components/library/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__brochure_brochure_component__ = __webpack_require__("../../../../../src/app/components/library/brochure/brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__magazine_magazine_component__ = __webpack_require__("../../../../../src/app/components/library/magazine/magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__publication_publication_component__ = __webpack_require__("../../../../../src/app/components/library/publication/publication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__publicationHouse_publicationHouse_component__ = __webpack_require__("../../../../../src/app/components/library/publicationHouse/publicationHouse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_brochure_service__ = __webpack_require__("../../../../../src/app/services/brochure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_magazine_service__ = __webpack_require__("../../../../../src/app/services/magazine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_publication_service__ = __webpack_require__("../../../../../src/app/services/publication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_publicationHouse_service__ = __webpack_require__("../../../../../src/app/services/publicationHouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























let LibraryModule = class LibraryModule {
};
LibraryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_8__library_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__["a" /* GridModule */],
            __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__["d" /* DropDownsModule */],
            __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__["c" /* DropDownListModule */],
            __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__root_root_component__["a" /* RootComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navigation_sidebar_sidebar_component__["a" /* SidebarMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__navigation_navmenu_navmenu_component__["a" /* NavMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_13__brochure_brochure_component__["a" /* BrochureComponent */],
            __WEBPACK_IMPORTED_MODULE_14__magazine_magazine_component__["a" /* MagazineComponent */],
            __WEBPACK_IMPORTED_MODULE_15__publication_publication_component__["a" /* PublicationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__publicationHouse_publicationHouse_component__["a" /* PublicationHouseComponent */]
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_17__services_book_service__["a" /* BookDataService */],
            __WEBPACK_IMPORTED_MODULE_18__services_brochure_service__["a" /* BrochureDataService */],
            __WEBPACK_IMPORTED_MODULE_19__services_magazine_service__["a" /* MagazineDataService */],
            __WEBPACK_IMPORTED_MODULE_20__services_publication_service__["a" /* PublicationDataService */],
            __WEBPACK_IMPORTED_MODULE_21__services_publicationHouse_service__["a" /* PublicationHouseDataService */],
            __WEBPACK_IMPORTED_MODULE_22__services_account_service__["a" /* AccountService */]
        ]
    })
], LibraryModule);



/***/ }),

/***/ "../../../../../src/app/components/library/library.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_root_component__ = __webpack_require__("../../../../../src/app/components/library/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_book_component__ = __webpack_require__("../../../../../src/app/components/library/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brochure_brochure_component__ = __webpack_require__("../../../../../src/app/components/library/brochure/brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__magazine_magazine_component__ = __webpack_require__("../../../../../src/app/components/library/magazine/magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__publication_publication_component__ = __webpack_require__("../../../../../src/app/components/library/publication/publication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__publicationHouse_publicationHouse_component__ = __webpack_require__("../../../../../src/app/components/library/publicationHouse/publicationHouse.component.ts");








const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'library', component: __WEBPACK_IMPORTED_MODULE_2__root_root_component__["a" /* RootComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'publication', pathMatch: 'full' },
            { path: 'book', component: __WEBPACK_IMPORTED_MODULE_3__book_book_component__["a" /* BookComponent */] },
            { path: 'brochure', component: __WEBPACK_IMPORTED_MODULE_4__brochure_brochure_component__["a" /* BrochureComponent */] },
            { path: 'magazine', component: __WEBPACK_IMPORTED_MODULE_5__magazine_magazine_component__["a" /* MagazineComponent */] },
            { path: 'publication', component: __WEBPACK_IMPORTED_MODULE_6__publication_publication_component__["a" /* PublicationComponent */] },
            { path: 'publicationhouse', component: __WEBPACK_IMPORTED_MODULE_7__publicationHouse_publicationHouse_component__["a" /* PublicationHouseComponent */] }
        ]
    }
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;



/***/ }),

/***/ "../../../../../src/app/components/library/magazine/magazine.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Magazines</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n  <kendo-grid \r\n              [kendoGridBinding]=\"magazines\"\r\n              [height]=\"500\"\r\n              [pageable]=\"true\"\r\n              [sortable]=\"true\"\r\n              [navigable]=\"true\"\r\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n              (remove)=\"removeHandler($event)\"\r\n              (dataStateChange)=\"onStateChange($event)\"\r\n              (edit)=\"editHandler($event)\"\r\n              (cancel)=\"cancelHandler($event)\"\r\n              (save)=\"saveHandler($event)\" \r\n              (add)=\"addHandler($event)\"\r\n              >\r\n    <ng-template kendoGridToolbarTemplate *ngIf=\"isAdmin\">\r\n      <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"name\" title=\"Magazine Name\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"MagazineName\" required class=\"k-textbox\"  />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"number\" editor=\"numeric\" title=\"Number\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.number\" kendoGridFocusable name=\"Number\" required min=\"0\" \r\n               max=\"999\"  type=\"number\" class=\"k-textbox\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"yearOfPublishing\" editor=\"numeric\" title=\"Year of Publishing\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable required min=\"1900\"\r\n               max=\"2020\" class=\"k-textbox\" name=\"Year\" type=\"number\"/>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-command-column title=\"\" width=\"220\" *ngIf=\"isAdmin\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n        <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n        <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n        <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/magazine/magazine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magazine_service__ = __webpack_require__("../../../../../src/app/services/magazine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_magazine_model__ = __webpack_require__("../../../../../src/app/models/magazine.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let MagazineComponent = class MagazineComponent {
    constructor(magazineDataService) {
        this.magazineDataService = magazineDataService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    ngOnInit() {
        this.load();
        this.isAdmin = __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */].isAdmin;
    }
    load() {
        this.magazineDataService.getMagazines().subscribe((data) => this.magazines = data);
    }
    removeHandler({ dataItem }) {
        this.magazineDataService.deleteMagazine(dataItem.id).subscribe(data => this.load());
        ;
    }
    onStateChange(state) {
        this.gridState = state;
        this.load();
    }
    addHandler({ sender }) {
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__models_magazine_model__["a" /* Magazine */]());
    }
    editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    }
    cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
        this.load();
    }
    saveHandler({ sender, rowIndex, dataItem, isNew }) {
        if (isNew) {
            this.magazineDataService.createMagazine(dataItem).subscribe(data => this.load());
        }
        if (!isNew) {
            this.magazineDataService.updateMagazine(dataItem).subscribe(data => this.load());
        }
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }
    closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }
};
MagazineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: __webpack_require__("../../../../../src/app/components/library/magazine/magazine.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_magazine_service__["a" /* MagazineDataService */]])
], MagazineComponent);



/***/ }),

/***/ "../../../../../src/app/components/library/publication/publication.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Publications</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n  <kendo-grid \r\n              [kendoGridBinding]=\"publications\"\r\n              [height]=\"500\"\r\n              [pageable]=\"true\"\r\n              [sortable]=\"true\"\r\n              [navigable]=\"true\"\r\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n              (dataStateChange)=\"onStateChange($event)\"\r\n              >\r\n    <kendo-grid-column field=\"name\" title=\"Publication Name\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"PublicationName\" required class=\"k-textbox\"  />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"type\" title=\"Type publication\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.type\" kendoGridFocusable name=\"Type\" required class=\"k-textbox\" />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n  </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/publication/publication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
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


let PublicationComponent = class PublicationComponent {
    constructor(publicationDataService) {
        this.publicationDataService = publicationDataService;
        //public view: Observable<GridDataResult>;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.publicationDataService.getPublications().subscribe((data) => this.publications = data);
    }
    onStateChange(state) {
        this.gridState = state;
        this.load();
    }
};
PublicationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: __webpack_require__("../../../../../src/app/components/library/publication/publication.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_publication_service__["a" /* PublicationDataService */]])
], PublicationComponent);



/***/ }),

/***/ "../../../../../src/app/components/library/publicationHouse/publicationHouse.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>PublicationHouses</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n    <kendo-grid [kendoGridBinding]=\"publicationHouses\"\r\n                [height]=\"500\"\r\n                [pageable]=\"true\"\r\n                [sortable]=\"true\"\r\n                [navigable]=\"true\"\r\n                [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n                (remove)=\"removeHandler($event)\"\r\n                (dataStateChange)=\"onStateChange($event)\"\r\n                (edit)=\"editHandler($event)\"\r\n                (cancel)=\"cancelHandler($event)\"\r\n                (save)=\"saveHandler($event)\"\r\n                (add)=\"addHandler($event)\">\r\n        <ng-template kendoGridToolbarTemplate *ngIf=\"isAdmin\">\r\n            <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n        </ng-template>\r\n        <kendo-grid-column field=\"name\" title=\"PublicationHouse Name\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"PublicationHouseName\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"address\" title=\"PublicationHouse address\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.address\" kendoGridFocusable name=\"PublicationHouse address\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-command-column title=\"\" width=\"220\" *ngIf=\"isAdmin\">\r\n            <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n                <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n                <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n                <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n                <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/publicationHouse/publicationHouse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationHouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_publicationHouse_service__ = __webpack_require__("../../../../../src/app/services/publicationHouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_publicationHouse_model__ = __webpack_require__("../../../../../src/app/models/publicationHouse.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PublicationHouseComponent = class PublicationHouseComponent {
    constructor(publicationHouseDataService) {
        this.publicationHouseDataService = publicationHouseDataService;
        //public view: Observable<GridDataResult>;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    ngOnInit() {
        this.load();
        this.isAdmin = __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */].isAdmin;
    }
    load() {
        this.publicationHouseDataService.getPublicationHouses().subscribe((data) => this.publicationHouses = data);
    }
    removeHandler({ dataItem }) {
        this.publicationHouseDataService.deletePublicationHouse(dataItem.id).subscribe(data => this.load());
        ;
    }
    onStateChange(state) {
        this.gridState = state;
        this.load();
    }
    addHandler({ sender }) {
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__models_publicationHouse_model__["a" /* PublicationHouse */]());
    }
    editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    }
    cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
        this.load();
    }
    saveHandler({ sender, rowIndex, dataItem, isNew }) {
        if (isNew) {
            this.publicationHouseDataService.createPublicationHouse(dataItem).subscribe(data => this.load());
        }
        if (!isNew) {
            this.publicationHouseDataService.updatePublicationHouse(dataItem).subscribe(data => this.load());
        }
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }
    closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }
};
PublicationHouseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: __webpack_require__("../../../../../src/app/components/library/publicationHouse/publicationHouse.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_publicationHouse_service__["a" /* PublicationHouseDataService */]])
], PublicationHouseComponent);



/***/ }),

/***/ "../../../../../src/app/components/library/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isAdmin\">\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <side-menu></side-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class='container-fluid' *ngIf=\"isAdmin\">\r\n    <div class=\"row\">\r\n        <nav-menu></nav-menu>\r\n    </div>\r\n    <div class='row'>\r\n        <div class='col-sm-1 body-content'></div>\r\n        <div class='col-sm-10 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class='col-sm-1 body-content'></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let RootComponent = class RootComponent {
    constructor() { }
    ngOnInit() {
        this.isAdmin = __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */].isAdmin;
    }
};
RootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'root',
        template: __webpack_require__("../../../../../src/app/components/library/root/root.component.html"),
    }),
    __metadata("design:paramtypes", [])
], RootComponent);



/***/ }),

/***/ "../../../../../src/app/components/navigation/navmenu/navmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-inverse .navbar-nav > li > a {\r\n    color: #9d9d9d;\r\n}\r\n.navbar-inverse .navbar-nav > li.link-active > a {\r\n    color: #4b75d6;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-top\">\r\n    <div class=\"container-fluid\">\r\n        <ul class='nav navbar-nav'>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['book']\">\r\n                    <span class='glyphicon glyphicon-book'></span> Books\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['brochure']\">\r\n                    <span class='glyphicon glyphicon-file'></span> Brochures\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['magazine']\">\r\n                    <span class='glyphicon glyphicon-modal-window'></span> Magazines\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['publicationhouse']\">\r\n                    <span class='glyphicon glyphicon-print'></span> Publication houses\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['publication']\">\r\n                    All publications\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"navbar-header navbar-right\">\r\n                <p class=\"navbar-brand\">Hello, {{userName}}</p>\r\n                <a class='navbar-brand' [routerLink]=\"['/account/login']\">\r\n                    <span class='glyphicon glyphicon-log-out'></span> LogOut\r\n                </a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NavMenuComponent = class NavMenuComponent {
    constructor() { }
    ngOnInit() {
        this.userName = __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */].userName;
    }
};
NavMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'nav-menu',
        template: __webpack_require__("../../../../../src/app/components/navigation/navmenu/navmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navmenu/navmenu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavMenuComponent);



/***/ }),

/***/ "../../../../../src/app/components/navigation/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-7 col-md-7\"><p class=\"navbar-brand\">Hello, {{userName}}</p></div>\r\n                <div class=\"col-lg-5 col-md-5\">\r\n                    <a class='navbar-brand' [routerLink]=\"['/account/login']\">\r\n                        <span class='glyphicon glyphicon-log-out'></span> LogOut\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['book']\">\r\n                        <span class='glyphicon glyphicon-book'></span> Books\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['brochure']\">\r\n                        <span class='glyphicon glyphicon-file'></span> Brochures\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['magazine']\">\r\n                        <span class='glyphicon glyphicon-modal-window'></span> Magazines\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['publicationhouse']\">\r\n                        <span class='glyphicon glyphicon-print'></span> Publication houses\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['publication']\">\r\n                        All publications\r\n                    </a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SidebarMenuComponent = class SidebarMenuComponent {
    constructor() { }
    ngOnInit() {
        this.userName = __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */].userName;
    }
};
SidebarMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'side-menu',
        template: __webpack_require__("../../../../../src/app/components/navigation/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarMenuComponent);



/***/ }),

/***/ "../../../../../src/app/models/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Book {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Book;



/***/ }),

/***/ "../../../../../src/app/models/brochure.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Brochure {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Brochure;



/***/ }),

/***/ "../../../../../src/app/models/magazine.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Magazine {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Magazine;



/***/ }),

/***/ "../../../../../src/app/models/publicationHouse.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PublicationHouse {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PublicationHouse;



/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm2015/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AccountService = AccountService_1 = class AccountService extends __WEBPACK_IMPORTED_MODULE_4__error_service__["a" /* ErrorService */] {
    constructor(http, cookie) {
        super();
        this.http = http;
        this.cookie = cookie;
    }
    login(data) {
        return this.http.post('api/auth/login', data)
            .map(res => {
            AccountService_1.isLoggedIn = true;
            AccountService_1.isAdmin = res;
            AccountService_1.userName = data.email;
            this.cookie.deleteAll();
            this.cookie.set("isLoggedIn", String(AccountService_1.isLoggedIn), 100, "path");
            this.cookie.set("isAdmin", String(AccountService_1.isAdmin), 100, "path");
            this.cookie.set("userName", String(AccountService_1.userName), 100, "path");
            return true;
        })
            .catch(this.handleError);
    }
    register(data) {
        return this.http.post('api/auth/register', data)
            .map(x => x)
            .catch(this.handleError);
    }
    logout() {
        this.http.get('api/auth/logout').subscribe();
        AccountService_1.isAdmin = null;
        AccountService_1.isLoggedIn = false;
        this.cookie.deleteAll();
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */]();
    }
};
AccountService.isLoggedIn = false;
AccountService.isAdmin = null;
AccountService.userName = null;
AccountService = AccountService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
], AccountService);

var AccountService_1;


/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BookDataService = class BookDataService {
    constructor(http) {
        this.http = http;
        this.url = "/api/books";
    }
    getBooks() {
        return this.http.get(this.url).map((data) => { return data; });
    }
    getBook(id) {
        return this.http.get(this.url + '/' + id).map((data) => { return data; });
    }
    createBook(book) {
        return this.http.post(this.url, book).map(data => data);
    }
    updateBook(book) {
        return this.http.put(this.url + '/' + book.id, book).map(data => data);
    }
    deleteBook(id) {
        return this.http.delete(this.url + '/' + id).map(data => data);
    }
};
BookDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], BookDataService);



/***/ }),

/***/ "../../../../../src/app/services/brochure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BrochureDataService = class BrochureDataService {
    constructor(http) {
        this.http = http;
        this.url = "/api/brochures";
    }
    getBrochures() {
        return this.http.get(this.url).map((data) => { return data; });
    }
    getBrochure(id) {
        return this.http.get(this.url + '/' + id).map((data) => { return data; });
    }
    getCoverTypes() {
        return this.http.get("/api/covertypes").map((data) => { return data; });
    }
    createBrochure(brochure) {
        return this.http.post(this.url, brochure).map(data => data);
    }
    updateBrochure(brochure) {
        return this.http.put(this.url + '/' + brochure.id, brochure).map(data => data);
    }
    deleteBrochure(id) {
        return this.http.delete(this.url + '/' + id).map(data => data);
    }
};
BrochureDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], BrochureDataService);



/***/ }),

/***/ "../../../../../src/app/services/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm2015/Rx.js");

class ErrorService {
    constructor() { }
    handleError(error) {
        var applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].throw(modelStateErrors || 'Server error');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ErrorService;



/***/ }),

/***/ "../../../../../src/app/services/magazine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MagazineDataService = class MagazineDataService {
    constructor(http) {
        this.http = http;
        this.url = "/api/magazines";
    }
    getMagazines() {
        return this.http.get(this.url).map((data) => { return data; });
    }
    getMagazine(id) {
        return this.http.get(this.url + '/' + id).map((data) => { return data; });
    }
    createMagazine(magazine) {
        return this.http.post(this.url, magazine).map(data => data);
    }
    updateMagazine(magazine) {
        return this.http.put(this.url + '/' + magazine.id, magazine).map(data => data);
    }
    deleteMagazine(id) {
        return this.http.delete(this.url + '/' + id).map(data => data);
    }
};
MagazineDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], MagazineDataService);



/***/ }),

/***/ "../../../../../src/app/services/publication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PublicationDataService = class PublicationDataService {
    constructor(http) {
        this.http = http;
        this.url = "/api/publications";
    }
    getPublications() {
        return this.http.get(this.url).map((data) => { return data; });
    }
};
PublicationDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], PublicationDataService);



/***/ }),

/***/ "../../../../../src/app/services/publicationHouse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationHouseDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PublicationHouseDataService = class PublicationHouseDataService {
    constructor(http) {
        this.http = http;
        this.url = "/api/publicationHouses";
    }
    getPublicationHouses() {
        return this.http.get(this.url).map((data) => { return data; });
    }
    getPublicationHouse(id) {
        return this.http.get(this.url + '/' + id).map((data) => { return data; });
    }
    createPublicationHouse(publicationHouse) {
        return this.http.post(this.url, publicationHouse).map(data => data);
    }
    updatePublicationHouse(publicationHouse) {
        return this.http.put(this.url + '/' + publicationHouse.id, publicationHouse).map(data => data);
    }
    deletePublicationHouse(id) {
        return this.http.delete(this.url + '/' + id).map(data => data);
    }
};
PublicationHouseDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], PublicationHouseDataService);



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map