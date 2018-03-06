webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/authorization/auth.module": [
		"../../../../../src/app/components/authorization/auth.module.ts"
	],
	"./components/library/library.module": [
		"../../../../../src/app/components/library/library.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_authorization_auth_module__ = __webpack_require__("../../../../../src/app/components/authorization/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_library_library_module__ = __webpack_require__("../../../../../src/app/components/library/library.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__components_app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_7__components_authorization_auth_module__["AuthModule"],
            __WEBPACK_IMPORTED_MODULE_8__components_library_library_module__["LibraryModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_account_service__["a" /* AccountService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");

const appRoutes = [
    { path: '', redirectTo: 'library', pathMatch: 'full' },
    { path: 'account', loadChildren: './components/authorization/auth.module#AuthModule' },
    { path: 'library', loadChildren: './components/library/library.module#LibraryModule' }
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
    constructor(accountService, router, activatedRoute) {
        this.accountService = accountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    canActivate() {
        if (!this.accountService.isAuthenticated()) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    }
};
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
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
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["authHttpServiceFactory"] = authHttpServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_routing__ = __webpack_require__("../../../../../src/app/components/authorization/account.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__root_root_component__ = __webpack_require__("../../../../../src/app/components/authorization/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/components/authorization/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/components/authorization/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"](), http, options);
}
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__account_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__root_root_component__["a" /* RootComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_account_service__["a" /* AccountService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
            }
        ]
    })
], AuthModule);



/***/ }),

/***/ "../../../../../src/app/components/authorization/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #eee;\n}\n\n.form-auth {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n\n.form-auth .form-auth-heading,\n.form-auth .checkbox {\n    margin-bottom: 10px;\n}\n\n.form-auth .checkbox {\n    font-weight: normal;\n}\n\n.form-auth .form-control {\n    position: relative;\n    height: auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n}\n\n.form-auth .form-control:focus {\n        z-index: 2;\n    }\n\n.form-auth input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.form-auth input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorization/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\" style=\"text-align:center\">\r\n    <strong>All set!</strong> Please login with your account\r\n</div>\r\n<form #f=\"ngForm\" (ngSubmit)=\"login($event)\" class=\"form-auth\">\r\n    <h2 class=\"form-auth-heading\">Login</h2>\r\n    <div class=\"form-group\">\r\n        <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"loginViewModel.email\" class=\"form-control\"\r\n               placeholder=\"Email address\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input id=\"password\" type=\"password\" required name=\"password\" [(ngModel)]=\"loginViewModel.password\" class=\"form-control\"\r\n               placeholder=\"Password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [(disabled)]=\"isRequesting\">Login  <span class='glyphicon glyphicon-log-in'></span></button>\r\n        <a [routerLink]=\"['/account/register']\"> Don`t have account?</a>\r\n    </div>\r\n    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Oops!</strong> {{errors}}\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/authorization/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_postLoginViewModel__ = __webpack_require__("../../../../../src/app/models/postLoginViewModel.ts");
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
    constructor(router, http, titleService, authService) {
        this.router = router;
        this.http = http;
        this.titleService = titleService;
        this.authService = authService;
        this.error = '';
    }
    ngOnInit() {
        this.loginViewModel = new __WEBPACK_IMPORTED_MODULE_5__models_postLoginViewModel__["a" /* PostLoginViewModel */]();
    }
    login(event) {
        event.preventDefault();
        let body = 'username=' + this.loginViewModel.email + '&password=' + this.loginViewModel.password + '&grant_type=password';
        this.authService.getToken(body).subscribe(response => {
            this.authService.login(response.json());
            this.router.navigate(['']);
            this.titleService.setTitle('Home');
        }, error => {
            this.error = 'Username or password is incorrect';
        });
    }
};
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/authorization/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorization/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */],
        __WEBPACK_IMPORTED_MODULE_0__services_account_service__["a" /* AccountService */]])
], LoginComponent);



/***/ }),

/***/ "../../../../../src/app/components/authorization/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #eee;\r\n}\r\n\r\n.form-auth {\r\n    max-width: 400px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-auth .form-auth-heading,\r\n.form-auth .checkbox {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-auth .checkbox {\r\n    font-weight: normal;\r\n}\r\n\r\n.form-auth .form-control {\r\n    position: relative;\r\n    height: auto;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n}\r\n\r\n.form-auth .form-control:focus {\r\n        z-index: 2;\r\n    }\r\n\r\n.form-auth input[type=\"email\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-auth input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorization/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"show\">\r\n    <form #registerForm=\"ngForm\" class=\"form-auth\">\r\n        <h2 class=\"form-auth-heading\">Registration</h2>\r\n        <br />\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n        <div class=\"form-group\">\r\n            <input id=\"name\" type=\"text\" required name=\"name\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"registerViewModel.name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email address\" [(ngModel)]=\"registerViewModel.email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"registerViewModel.password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" required name=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm password\"  validateEqual=\"password\" [(ngModel)]=\"registerViewModel.confirmPassword\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\"><button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"isRequesting\" (click)=\"register(registerForm)\">Sign Up</button></div>\r\n                <div class=\"col-sm-4\"><a [routerLink]=\"['/account/login']\" class=\"btn btn-block\">Cancel</a></div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div> \r\n"

/***/ }),

/***/ "../../../../../src/app/components/authorization/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_postRegisterViewModel__ = __webpack_require__("../../../../../src/app/models/postRegisterViewModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
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
    constructor(router, http, authService) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.error = '';
        this.show = false;
    }
    ngOnInit() {
        this.registerViewModel = new __WEBPACK_IMPORTED_MODULE_3__models_postRegisterViewModel__["a" /* PostRegisterViewModel */]();
        this.show = true;
    }
    register(form) {
        if (form.valid && (this.registerViewModel.confirmPassword === this.registerViewModel.password)) {
            this.authService.registration(this.registerViewModel).subscribe(response => {
                if (response.status == 200) {
                    this.router.navigate(['/account/login']);
                }
            }, error => {
                this.error = error._body;
            });
            form.reset();
        }
        if (this.registerViewModel.confirmPassword != this.registerViewModel.password) {
            this.error = "Form not valid";
        }
    }
};
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'register',
        styles: [__webpack_require__("../../../../../src/app/components/authorization/register/register.component.css")],
        template: __webpack_require__("../../../../../src/app/components/authorization/register/register.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_0__services_account_service__["a" /* AccountService */]])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'root',
        template: __webpack_require__("../../../../../src/app/components/authorization/root/root.component.html"),
    })
], RootComponent);



/***/ }),

/***/ "../../../../../src/app/components/library/author/author.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Authors</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n    <kendo-grid [kendoGridBinding]=\"authors\"\r\n                [height]=\"500\"\r\n                [pageable]=\"true\"\r\n                [sortable]=\"true\"\r\n                [navigable]=\"true\"\r\n                [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n                (remove)=\"removeHandler($event)\"\r\n                (dataStateChange)=\"onStateChange($event)\"\r\n                (edit)=\"editHandler($event)\"\r\n                (cancel)=\"cancelHandler($event)\"\r\n                (save)=\"saveHandler($event)\"\r\n                (add)=\"addHandler($event)\">\r\n        <ng-template kendoGridToolbarTemplate *ngIf=\"isAdmin\">\r\n            <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n        </ng-template>\r\n        <kendo-grid-column field=\"firstName\" title=\"First name\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.firstName\" kendoGridFocusable name=\"First name\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"lastName\" title=\"Last name\">\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                <input [(ngModel)]=\"dataItem.lastName\" kendoGridFocusable name=\"Last name\" required class=\"k-textbox\" />\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-command-column title=\"\" width=\"220\" *ngIf=\"isAdmin\">\r\n            <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n                <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n                <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n                <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n                <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/author/author.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_authorViewModel_postAuthorViewItem__ = __webpack_require__("../../../../../src/app/models/authorViewModel/postAuthorViewItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_author_service__ = __webpack_require__("../../../../../src/app/services/author.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AuthorComponent = class AuthorComponent {
    constructor(authorDataService, accountService) {
        this.authorDataService = authorDataService;
        this.accountService = accountService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    ngOnInit() {
        this.load();
        this.isAdmin = this.accountService.isAdmin();
    }
    load() {
        this.authorDataService.getAuthors().subscribe((data) => this.authors = data.authors);
    }
    removeHandler({ dataItem }) {
        this.authorDataService.deleteAuthor(dataItem.id).subscribe(data => this.load());
        ;
    }
    onStateChange(state) {
        this.gridState = state;
        this.load();
    }
    addHandler({ sender }) {
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__models_authorViewModel_postAuthorViewItem__["a" /* PostAuthorViewItem */]());
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
            this.authorDataService.createAuthor(dataItem).subscribe(data => this.load());
        }
        if (!isNew) {
            this.authorDataService.updateAuthor(dataItem).subscribe(data => this.load());
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
AuthorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/library/author/author.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_author_service__["a" /* AuthorDataService */], __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
], AuthorComponent);



/***/ }),

/***/ "../../../../../src/app/components/library/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Books</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n    <kendo-grid [kendoGridBinding]=\"books\"\r\n                [height]=\"500\"\r\n                [pageable]=\"true\"\r\n                [sortable]=\"true\"\r\n                [navigable]=\"true\"\r\n                [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n                (remove)=\"removeHandler($event)\"\r\n                (dataStateChange)=\"onStateChange($event)\"\r\n                (edit)=\"editHandler($event)\"\r\n                (cancel)=\"cancelHandler($event)\"\r\n                (save)=\"saveHandler($event)\"\r\n                (add)=\"addHandler($event)\">\r\n        <ng-template kendoGridToolbarTemplate *ngIf=\"isAdmin\">\r\n            <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n        </ng-template>\r\n        <kendo-grid-column field=\"name\" title=\"Book Title\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"authors\" title=\"Authors\">\r\n            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n                {{getAuthors(dataItem.id)}}\r\n            </ng-template>\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n                <kendo-multiselect [data]=\"authors\" [valueField]=\"'id'\" [textField]=\"'lastName'\" [formControl]=\"formGroup.get('authors')\"></kendo-multiselect>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"dateOfPublishing\" title=\"Date of publishing\">\r\n            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n                {{dataItem.dateOfPublishing|date:'yyyy-MM-dd'}}\r\n            </ng-template>\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n                <kendo-datepicker [format]=\"'yyyy-MM-dd'\" [formControl]=\"formGroup.get('dateOfPublishing')\">\r\n                </kendo-datepicker>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"publicationHouses\" title=\"Publication houses\">\r\n            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n                {{getPublicationHouses(dataItem.id)}}\r\n            </ng-template>\r\n            <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n                <kendo-multiselect [data]=\"publicationHouses\" [valueField]=\"'id'\" [textField]=\"'name'\" [formControl]=\"formGroup.get('publicationHouses')\"></kendo-multiselect>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n        <kendo-grid-command-column title=\"\" width=\"220\" *ngIf=\"isAdmin\">\r\n            <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n                <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n                <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n                <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n                <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_publicationHouse_service__ = __webpack_require__("../../../../../src/app/services/publicationHouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_author_service__ = __webpack_require__("../../../../../src/app/services/author.service.ts");
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
    constructor(bookDataService, publicationHouseDataService, accountService, authorDataService) {
        this.bookDataService = bookDataService;
        this.publicationHouseDataService = publicationHouseDataService;
        this.accountService = accountService;
        this.authorDataService = authorDataService;
        this.isAdmin = this.accountService.isAdmin();
        this.LoggedIn = this.accountService.isAuthenticated();
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
        this.bookDataService.getBooks().subscribe((books) => this.books = books.books);
        this.publicationHouseDataService.getPublicationHouses().subscribe((data) => this.publicationHouses = data.publicationHouses);
        this.authorDataService.getAuthors().subscribe((data) => this.authors = data.authors);
    }
    removeHandler({ dataItem }) {
        this.bookDataService.deleteBook(dataItem.id).subscribe(data => this.load());
        ;
    }
    getPublicationHouses(id) {
        if ((id != null) && (this.books.find(x => x.id === id).publicationHouses != null)) {
            return this.books.find(x => x.id === id).publicationHouses.map(function (PublicationHouse) {
                return PublicationHouse.name;
            });
            ;
        }
        return new Array();
    }
    getAuthors(id) {
        if ((id != null) && (this.books.find(x => x.id === id).authors != null)) {
            return this.books.find(x => x.id === id).authors.map(function (author) {
                return author.firstName + " " + author.lastName;
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
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: 0, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'authors': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'dateOfPublishing': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](new Date(Date.now()), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'publicationHouses': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        sender.addRow(this.formGroup);
    }
    editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: dataItem.id, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dataItem.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'authors': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dataItem.authors, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'dateOfPublishing': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](new Date(dataItem.dateOfPublishing), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'publicationHouses': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dataItem.publicationHouses, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    }
    cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
        this.load();
    }
    saveHandler({ sender, rowIndex, formGroup, isNew }) {
        var book = formGroup.getRawValue();
        var oldDate = new Date(book.dateOfPublishing);
        book.dateOfPublishing = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate(), 2, 0, 0);
        if (isNew) {
            this.bookDataService.createBook(book).subscribe(data => this.load());
        }
        if (!isNew) {
            this.bookDataService.updateBook(book).subscribe(data => this.load());
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/library/book/book.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookDataService */], __WEBPACK_IMPORTED_MODULE_4__services_publicationHouse_service__["a" /* PublicationHouseDataService */], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */],
        __WEBPACK_IMPORTED_MODULE_5__services_author_service__["a" /* AuthorDataService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_brochureViewModel_postBrochureViewItem__ = __webpack_require__("../../../../../src/app/models/brochureViewModel/postBrochureViewItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_brochure_service__ = __webpack_require__("../../../../../src/app/services/brochure.service.ts");
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
    constructor(brochureDataService, accountService) {
        this.brochureDataService = brochureDataService;
        this.accountService = accountService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    ngOnInit() {
        this.load();
        this.isAdmin = this.accountService.isAdmin();
    }
    load() {
        this.brochureDataService.getBrochures().subscribe((data) => this.brochures = data.brochures);
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
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__models_brochureViewModel_postBrochureViewItem__["a" /* PostBrochureViewItem */]());
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/library/brochure/brochure.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_brochure_service__["a" /* BrochureDataService */], __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
], BrochureComponent);



/***/ }),

/***/ "../../../../../src/app/components/library/library.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es2015/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es2015/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dateinputs__ = __webpack_require__("../../../../@progress/kendo-angular-dateinputs/dist/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__library_routing__ = __webpack_require__("../../../../../src/app/components/library/library.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__root_root_component__ = __webpack_require__("../../../../../src/app/components/library/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/navigation/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navigation_navmenu_navmenu_component__ = __webpack_require__("../../../../../src/app/components/navigation/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__author_author_component__ = __webpack_require__("../../../../../src/app/components/library/author/author.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__book_book_component__ = __webpack_require__("../../../../../src/app/components/library/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__brochure_brochure_component__ = __webpack_require__("../../../../../src/app/components/library/brochure/brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__magazine_magazine_component__ = __webpack_require__("../../../../../src/app/components/library/magazine/magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__publication_publication_component__ = __webpack_require__("../../../../../src/app/components/library/publication/publication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__publicationHouse_publicationHouse_component__ = __webpack_require__("../../../../../src/app/components/library/publicationHouse/publicationHouse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_author_service__ = __webpack_require__("../../../../../src/app/services/author.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_brochure_service__ = __webpack_require__("../../../../../src/app/services/brochure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_magazine_service__ = __webpack_require__("../../../../../src/app/services/magazine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_publication_service__ = __webpack_require__("../../../../../src/app/services/publication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_publicationHouse_service__ = __webpack_require__("../../../../../src/app/services/publicationHouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























let LibraryModule = class LibraryModule {
};
LibraryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_7__library_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["a" /* GridModule */],
            __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__["d" /* DropDownsModule */],
            __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__["c" /* DropDownListModule */],
            __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__root_root_component__["a" /* RootComponent */],
            __WEBPACK_IMPORTED_MODULE_9__navigation_sidebar_sidebar_component__["a" /* SidebarMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navigation_navmenu_navmenu_component__["a" /* NavMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__author_author_component__["a" /* AuthorComponent */],
            __WEBPACK_IMPORTED_MODULE_12__book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_13__brochure_brochure_component__["a" /* BrochureComponent */],
            __WEBPACK_IMPORTED_MODULE_14__magazine_magazine_component__["a" /* MagazineComponent */],
            __WEBPACK_IMPORTED_MODULE_15__publication_publication_component__["a" /* PublicationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__publicationHouse_publicationHouse_component__["a" /* PublicationHouseComponent */]
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_17__services_author_service__["a" /* AuthorDataService */],
            __WEBPACK_IMPORTED_MODULE_18__services_book_service__["a" /* BookDataService */],
            __WEBPACK_IMPORTED_MODULE_19__services_brochure_service__["a" /* BrochureDataService */],
            __WEBPACK_IMPORTED_MODULE_20__services_magazine_service__["a" /* MagazineDataService */],
            __WEBPACK_IMPORTED_MODULE_21__services_publication_service__["a" /* PublicationDataService */],
            __WEBPACK_IMPORTED_MODULE_22__services_publicationHouse_service__["a" /* PublicationHouseDataService */],
            __WEBPACK_IMPORTED_MODULE_23__services_account_service__["a" /* AccountService */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__author_author_component__ = __webpack_require__("../../../../../src/app/components/library/author/author.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_book_component__ = __webpack_require__("../../../../../src/app/components/library/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brochure_brochure_component__ = __webpack_require__("../../../../../src/app/components/library/brochure/brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__magazine_magazine_component__ = __webpack_require__("../../../../../src/app/components/library/magazine/magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__publication_publication_component__ = __webpack_require__("../../../../../src/app/components/library/publication/publication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__publicationHouse_publicationHouse_component__ = __webpack_require__("../../../../../src/app/components/library/publicationHouse/publicationHouse.component.ts");









const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild([
    {
        path: 'library', component: __WEBPACK_IMPORTED_MODULE_2__root_root_component__["a" /* RootComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'publication', pathMatch: 'full' },
            { path: 'author', component: __WEBPACK_IMPORTED_MODULE_3__author_author_component__["a" /* AuthorComponent */] },
            { path: 'book', component: __WEBPACK_IMPORTED_MODULE_4__book_book_component__["a" /* BookComponent */] },
            { path: 'brochure', component: __WEBPACK_IMPORTED_MODULE_5__brochure_brochure_component__["a" /* BrochureComponent */] },
            { path: 'magazine', component: __WEBPACK_IMPORTED_MODULE_6__magazine_magazine_component__["a" /* MagazineComponent */] },
            { path: 'publication', component: __WEBPACK_IMPORTED_MODULE_7__publication_publication_component__["a" /* PublicationComponent */] },
            { path: 'publicationhouse', component: __WEBPACK_IMPORTED_MODULE_8__publicationHouse_publicationHouse_component__["a" /* PublicationHouseComponent */] }
        ]
    }
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;



/***/ }),

/***/ "../../../../../src/app/components/library/magazine/magazine.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Magazines</h2>\r\n<form novalidate #myForm=\"ngForm\">\r\n\r\n  <kendo-grid \r\n              [kendoGridBinding]=\"magazines\"\r\n              [height]=\"500\"\r\n              [pageable]=\"true\"\r\n              [sortable]=\"true\"\r\n              [navigable]=\"true\"\r\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n              (remove)=\"removeHandler($event)\"\r\n              (dataStateChange)=\"onStateChange($event)\"\r\n              (edit)=\"editHandler($event)\"\r\n              (cancel)=\"cancelHandler($event)\"\r\n              (save)=\"saveHandler($event)\" \r\n              (add)=\"addHandler($event)\"\r\n              >\r\n    <ng-template kendoGridToolbarTemplate *ngIf=\"isAdmin\">\r\n      <button kendoGridAddCommand type=\"button\" [primary]=\"true\">Add new</button>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"name\" title=\"Book Title\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"number\" editor=\"numeric\" title=\"Number\">\r\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n            <input [formControl]=\"formGroup.get('number')\" kendoGridFocusable name=\"number\" class=\"k-textbox\" type=\"number\" />\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"dateOfPublishing\" title=\"Date of publishing\">\r\n        <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n            {{dataItem.dateOfPublishing|date:'yyyy-MM-dd'}}\r\n        </ng-template>\r\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\" let-column=\"column\" let-formGroup=\"formGroup\">\r\n            <kendo-datepicker [format]=\"'yyyy-MM-dd'\" [formControl]=\"formGroup.get('dateOfPublishing')\">\r\n            </kendo-datepicker>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-command-column title=\"\" width=\"220\" *ngIf=\"isAdmin\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\" [primary]=\"true\">Edit</button>\r\n        <button kendoGridRemoveCommand type=\"button\" [primary]=\"true\">Remove</button>\r\n        <button kendoGridSaveCommand type=\"button\" [disabled]=\"myForm.invalid\" [primary]=\"true\">{{ isNew ? 'Add' : 'Update' }}</button>\r\n        <button kendoGridCancelCommand type=\"button\" [primary]=\"true\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/magazine/magazine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_magazine_service__ = __webpack_require__("../../../../../src/app/services/magazine.service.ts");
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
    constructor(magazineDataService, accountService) {
        this.magazineDataService = magazineDataService;
        this.accountService = accountService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    ngOnInit() {
        this.load();
        this.isAdmin = this.accountService.isAdmin();
    }
    load() {
        this.magazineDataService.getMagazines().subscribe((data) => this.magazines = data.magazines);
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
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: 0, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'dateOfPublishing': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](new Date(2000, 1, 1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        sender.addRow(this.formGroup);
    }
    editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: dataItem.id, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dataItem.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dataItem.number, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'dateOfPublishing': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](new Date(dataItem.dateOfPublishing), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    }
    cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
        this.load();
    }
    saveHandler({ sender, rowIndex, formGroup, isNew }) {
        var magazine = formGroup.getRawValue();
        var oldDate = new Date(magazine.dateOfPublishing);
        magazine.dateOfPublishing = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate(), 2, 0, 0);
        if (isNew) {
            this.magazineDataService.createMagazine(magazine).subscribe(data => this.load());
        }
        if (!isNew) {
            this.magazineDataService.updateMagazine(magazine).subscribe(data => this.load());
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/library/magazine/magazine.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_magazine_service__["a" /* MagazineDataService */], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
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
        this.publicationDataService.getPublications().subscribe((data) => this.publications = data.publications);
    }
    onStateChange(state) {
        this.gridState = state;
        this.load();
    }
};
PublicationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_publicationHouseViewModel_postPublicationHouseViewItem__ = __webpack_require__("../../../../../src/app/models/publicationHouseViewModel/postPublicationHouseViewItem.ts");
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
    constructor(publicationHouseDataService, accountService) {
        this.publicationHouseDataService = publicationHouseDataService;
        this.accountService = accountService;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
    }
    ngOnInit() {
        this.load();
        this.isAdmin = this.accountService.isAdmin();
    }
    load() {
        this.publicationHouseDataService.getPublicationHouses().subscribe((data) => this.publicationHouses = data.publicationHouses);
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
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__models_publicationHouseViewModel_postPublicationHouseViewItem__["a" /* PostPublicationHouseViewItem */]());
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/library/publicationHouse/publicationHouse.component.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_publicationHouse_service__["a" /* PublicationHouseDataService */], __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */]])
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
    constructor(accountService) {
        this.accountService = accountService;
    }
    ngOnInit() {
        this.isAdmin = this.accountService.isAdmin();
    }
};
RootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'root',
        template: __webpack_require__("../../../../../src/app/components/library/root/root.component.html"),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
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

module.exports = "<nav class=\"navbar navbar-inverse navbar-top\">\r\n    <div class=\"container-fluid\">\r\n        <ul class='nav navbar-nav'>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['book']\">\r\n                    <span class='glyphicon glyphicon-book'></span> Books\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['brochure']\">\r\n                    <span class='glyphicon glyphicon-file'></span> Brochures\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['magazine']\">\r\n                    <span class='glyphicon glyphicon-modal-window'></span> Magazines\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['author']\">\r\n                    <span class='glyphicon glyphicon-user'></span> Authors\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['publicationhouse']\">\r\n                    <span class='glyphicon glyphicon-print'></span> Publication houses\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['publication']\">\r\n                    All publications\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"navbar-header navbar-right\">\r\n                <p class=\"navbar-brand\">Hello, {{userName}}</p>\r\n                <a class='navbar-brand' [routerLink]=\"['/account/login']\">\r\n                    <span class='glyphicon glyphicon-log-out'></span> LogOut\r\n                </a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

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
    constructor(accountService) {
        this.accountService = accountService;
    }
    ngOnInit() {
        this.userName = this.accountService.getUserName();
    }
};
NavMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nav-menu',
        template: __webpack_require__("../../../../../src/app/components/navigation/navmenu/navmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navmenu/navmenu.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
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

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-7 col-md-7\"><p class=\"navbar-brand\">Hello, {{userName}}</p></div>\r\n                <div class=\"col-lg-5 col-md-5\">\r\n                    <a class='navbar-brand' [routerLink]=\"['/account/login']\">\r\n                        <span class='glyphicon glyphicon-log-out'></span> LogOut\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['book']\">\r\n                        <span class='glyphicon glyphicon-book'></span> Books\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['brochure']\">\r\n                        <span class='glyphicon glyphicon-file'></span> Brochures\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['magazine']\">\r\n                        <span class='glyphicon glyphicon-modal-window'></span> Magazines\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['author']\">\r\n                        <span class='glyphicon glyphicon-user'></span> Authors\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['publicationhouse']\">\r\n                        <span class='glyphicon glyphicon-print'></span> Publication houses\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['publication']\">\r\n                        All publications\r\n                    </a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
    constructor(accountService) {
        this.accountService = accountService;
    }
    ngOnInit() {
        this.userName = this.accountService.getUserName();
    }
};
SidebarMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'side-menu',
        template: __webpack_require__("../../../../../src/app/components/navigation/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
], SidebarMenuComponent);



/***/ }),

/***/ "../../../../../src/app/models/authorViewModel/postAuthorViewItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PostAuthorViewItem {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PostAuthorViewItem;



/***/ }),

/***/ "../../../../../src/app/models/brochureViewModel/postBrochureViewItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PostBrochureViewItem {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PostBrochureViewItem;



/***/ }),

/***/ "../../../../../src/app/models/postLoginViewModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PostLoginViewModel {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PostLoginViewModel;



/***/ }),

/***/ "../../../../../src/app/models/postRegisterViewModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PostRegisterViewModel {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PostRegisterViewModel;



/***/ }),

/***/ "../../../../../src/app/models/publicationHouseViewModel/postPublicationHouseViewItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PostPublicationHouseViewItem {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PostPublicationHouseViewItem;



/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AccountService = class AccountService {
    constructor(router, titleService, http) {
        this.router = router;
        this.titleService = titleService;
        this.http = http;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["JwtHelper"]();
    }
    // for requesting secure data using json
    authJsonHeaders() {
        let header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        header.append('Authorization', 'Bearer ' + sessionStorage.getItem('bearer_token'));
        return header;
    }
    // for requesting secure data from a form post
    authFormHeaders() {
        let header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Accept', 'application/json');
        header.append('Authorization', 'Bearer ' + sessionStorage.getItem('bearer_token'));
        return header;
    }
    // for requesting unsecured data using json
    jsonHeaders() {
        let header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    }
    // for requesting unsecured data using form post
    contentHeaders() {
        let header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Accept', 'application/json');
        return header;
    }
    // After a successful login, save token data into session storage
    // note: use "localStorage" for persistent, browser-wide logins; "sessionStorage" for per-session storage.
    login(tokens) {
        let access_token = tokens.access_token;
        let expires_in = tokens.expires_in;
        sessionStorage.setItem('access_token', access_token);
        sessionStorage.setItem('bearer_token', access_token);
        // TODO: implement meaningful refresh, handle expiry 
        sessionStorage.setItem('expires_in', expires_in.toString());
        //this.cookie.get("userName");
    }
    // called when logging out user; clears tokens from browser
    logout() {
        //localStorage.removeItem('access_token');
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('bearer_token');
        sessionStorage.removeItem('expires_in');
        this.router.navigate(['']);
        this.titleService.setTitle('Home');
    }
    // simple check of logged in status: if there is a token, we're (probably) logged in.
    // ideally we check status and check token has not expired (server will back us up, if this not done, but it could be cleaner)
    isAuthenticated() {
        return !!sessionStorage.getItem('bearer_token');
    }
    useJwtHelper() {
        var token = sessionStorage.getItem('bearer_token');
        //this.jwtHelper.getTokenExpirationDate(token),
        //this.jwtHelper.isTokenExpired(token)       
        return this.jwtHelper.decodeToken(token);
    }
    isAdmin() {
        return this.useJwtHelper().role == 'Admin' ? true : false;
    }
    getUserName() {
        return this.useJwtHelper().name;
    }
    getUserId() {
        return this.useJwtHelper().sub;
    }
    getToken(body) {
        return this.http.post('/connect/token', body, { headers: this.contentHeaders() });
    }
    registration(registerModel) {
        return this.http.post('/api/account/register', JSON.stringify(registerModel), { headers: this.jsonHeaders() });
    }
};
AccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
], AccountService);



/***/ }),

/***/ "../../../../../src/app/services/author.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
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



let AuthorDataService = class AuthorDataService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = "/api/authors";
    }
    getAuthors() {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
    getAuthor(id) {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
    createAuthor(author) {
        return this.http.post(this.url, author, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    updateAuthor(author) {
        return this.http.put(this.url + '/' + author.id, author, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    deleteAuthor(id) {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
};
AuthorDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
], AuthorDataService);



/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/catch.js");
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
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = "/api/books";
    }
    getBooks() {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((books) => { return books.json(); });
    }
    getBook(id) {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
    createBook(book) {
        return this.http.post(this.url, book, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    updateBook(book) {
        return this.http.put(this.url + '/' + book.id, book, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    deleteBook(id) {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
};
BookDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
], BookDataService);



/***/ }),

/***/ "../../../../../src/app/services/brochure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
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



let BrochureDataService = class BrochureDataService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = "/api/brochures";
    }
    getBrochures() {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
    getBrochure(id) {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
    getCoverTypes() {
        return this.http.get("/api/covertypes", { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
    createBrochure(brochure) {
        return this.http.post(this.url, brochure, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    updateBrochure(brochure) {
        return this.http.put(this.url + '/' + brochure.id, brochure, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    deleteBrochure(id) {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
};
BrochureDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
], BrochureDataService);



/***/ }),

/***/ "../../../../../src/app/services/magazine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
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



let MagazineDataService = class MagazineDataService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = "/api/magazines";
    }
    getMagazines() {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() })
            .map((data) => { return data.json(); });
    }
    getMagazine(id) {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
    createMagazine(magazine) {
        return this.http.post(this.url, magazine, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    updateMagazine(magazine) {
        return this.http.put(this.url + '/' + magazine.id, magazine, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    deleteMagazine(id) {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
};
MagazineDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
], MagazineDataService);



/***/ }),

/***/ "../../../../../src/app/services/publication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
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



let PublicationDataService = class PublicationDataService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = "/api/publications";
    }
    getPublications() {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
};
PublicationDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
], PublicationDataService);



/***/ }),

/***/ "../../../../../src/app/services/publicationHouse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationHouseDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
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
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = "/api/publicationHouses";
    }
    getPublicationHouses() {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
    getPublicationHouse(id) {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return data.json(); });
    }
    createPublicationHouse(publicationHouse) {
        return this.http.post(this.url, publicationHouse, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    updatePublicationHouse(publicationHouse) {
        return this.http.put(this.url + '/' + publicationHouse.id, publicationHouse, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
    deletePublicationHouse(id) {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json());
    }
};
PublicationHouseDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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