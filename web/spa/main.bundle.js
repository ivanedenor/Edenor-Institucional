webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" href=\"#\">Portal de Medifé</a>\n      <form class=\"form-inline\">\n        <button class=\"btn btn-primary my-2 my-sm-0 mr-2\"\n          routerLink=\"/\" type=\"button\">\n            Home\n        </button>\n\n        <button id=\"qsLoginBtn\"\n          class=\"btn btn-primary my-2 my-sm-0\"\n          *ngIf=\"!auth.isAuthenticated()\"\n          (click)=\"auth.login()\" type=\"button\">\n            Log In\n        </button>\n\n        <button id=\"qsLogoutBtn\"\n          class=\"btn btn-primary my-2 my-sm-0\"\n          *ngIf=\"auth.isAuthenticated()\"\n          (click)=\"auth.logout()\" type=\"button\">\n            Log Out\n        </button>\n\t\t\n\t\t        <button id=\"qsProfile\"\n          class=\"btn btn-primary my-2 my-sm-0\"\n          *ngIf=\"auth.isAuthenticated()\"\n          routerLink=\"/profile\"  type=\"button\">\n            Profile\n        </button>\n\n\n      </form>\n  </div>\n</nav>\n\n<main role=\"main\" class=\"container\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ping_ping_component__ = __webpack_require__("./src/app/ping/ping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__callback_callback_component__ = __webpack_require__("./src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_authHttpServiceFactory__ = __webpack_require__("./src/app/providers/authHttpServiceFactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__asociado1_asociado1_component__ = __webpack_require__("./src/app/asociado1/asociado1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__prestador1_prestador1_component__ = __webpack_require__("./src/app/prestador1/prestador1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__ping_ping_component__["a" /* PingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__asociado1_asociado1_component__["a" /* Asociado1Component */],
                __WEBPACK_IMPORTED_MODULE_16__prestador1_prestador1_component__["a" /* Prestador1Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_service__["a" /* AuthService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10_angular2_jwt__["AuthHttp"],
                    useFactory: __WEBPACK_IMPORTED_MODULE_14__providers_authHttpServiceFactory__["a" /* authHttpServiceFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__callback_callback_component__ = __webpack_require__("./src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ping_ping_component__ = __webpack_require__("./src/app/ping/ping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asociado1_asociado1_component__ = __webpack_require__("./src/app/asociado1/asociado1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prestador1_prestador1_component__ = __webpack_require__("./src/app/prestador1/prestador1.component.ts");






var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_1__callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'ping', component: __WEBPACK_IMPORTED_MODULE_3__ping_ping_component__["a" /* PingComponent */] },
    { path: 'asociado1', component: __WEBPACK_IMPORTED_MODULE_4__asociado1_asociado1_component__["a" /* Asociado1Component */] },
    { path: 'prestador1', component: __WEBPACK_IMPORTED_MODULE_5__prestador1_prestador1_component__["a" /* Prestador1Component */] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/asociado1/asociado1.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/asociado1/asociado1.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"\">\r\n  <div class=\"form-group\">\r\n    <label for=\"sel1\">tipo de asociado</label>\r\n    <select class=\"form-control\" id=\"sel1\">\r\n      <option>Titular</option>\r\n      <option>opcion 2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"usr\">DNI o CUIT</label>\r\n    <input type=\"text\" class=\"form-control required\" id=\"doc\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"usr\">Nro. Credencial o Id</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"credencial\">\r\n  </div>\r\n  <button>Validar</button>\r\n  <p>\r\n\r\n  </p>\r\n</form>\n"

/***/ }),

/***/ "./src/app/asociado1/asociado1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asociado1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Asociado1Component = /** @class */ (function () {
    function Asociado1Component() {
    }
    Asociado1Component.prototype.ngOnInit = function () {
    };
    Asociado1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-asociado1',
            template: __webpack_require__("./src/app/asociado1/asociado1.component.html"),
            styles: [__webpack_require__("./src/app/asociado1/asociado1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Asociado1Component);
    return Asociado1Component;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("./src/app/auth/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].clientID,
            domain: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain,
            responseType: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].responseType,
            audience: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].audience,
            redirectUri: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].callbackURL,
            scope: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].scope
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'qgEvpF31I7SEsc2oVpIyR8Nkx3kAbUdE',
    domain: 'gmateospaginar.auth0.com',
    callbackURL: 'https://medifeweb.azurewebsites.net/callback',
    responseType: 'token id_token',
    audience: 'https://pruebas2.medife.com.ar',
    scope: 'openid profile email'
};


/***/ }),

/***/ "./src/app/callback/callback.component.css":
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}"

/***/ }),

/***/ "./src/app/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__("./src/app/callback/callback.component.html"),
            styles: [__webpack_require__("./src/app/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default profile-area\" *ngIf=\"estaRegistrado()\">\r\n  <div class=\"panel-heading\">\r\n    <h3>Bienvenido a tu portal de Medifé</h3>\r\n    <h3 class=\"\">Nos renovamos para vos</h3>\r\n  </div>\r\n  <div class=\"panel-body row\">\r\n    <div class=\" col-xs-12 col-md-4\">\r\n      <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\r\n    </div>\r\n      <div class=\" col-xs-12 col-md-8\">\r\n        <p class=\"\">Por favor segui estos pasos para poder disfrutar de esta nueva experiencia</p>\r\n        <button class=\"\" (click)=\"soyPrestador()\">Soy Prestador</button>\r\n        <button class=\"\" (click)=\"soyAsociado()\">Soy Asociado</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.esperandoPerfil = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.auth.isAuthenticated()) {
                if (_this.auth.userProfile) {
                    _this.profile = _this.auth.userProfile;
                }
                else {
                    _this.auth.getProfile(function (err, profile) {
                        _this.profile = profile;
                    });
                }
            }
            else {
                _this.auth.login();
            }
        }, 0);
    };
    HomeComponent.prototype.estaRegistrado = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            if (this.profile && (this.profile.email === 'g1mateos@yahoo.com.ar' || this.profile.nickname === "mateos.gustavo")) {
                return true;
            }
            else if (!this.profile && !this.esperandoPerfil) {
                this.esperandoPerfil = true;
                this.auth.getProfile(function (err, profile) {
                    _this.profile = profile;
                });
            }
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.soyPrestador = function () {
        this.router.navigate(['prestador1']);
    };
    HomeComponent.prototype.soyAsociado = function () {
        this.router.navigate(['asociado1']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ping/ping.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/ping/ping.component.html":
/***/ (function(module, exports) {

module.exports = "<a  (click)=\"securedPing()\">securedPing</a> \n\n<h4 >\n \n  respuesta: {{message}}\n</h4>\n"

/***/ }),

/***/ "./src/app/ping/ping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// src/app/ping/ping.component.ts


var PingComponent = /** @class */ (function () {
    function PingComponent(http) {
        this.http = http;
        this.API_URL = 'http://localhost';
    }
    PingComponent.prototype.securedPing = function () {
        var _this = this;
        this.message = '';
        var state = "" + localStorage.getItem('state');
        this.http
            .get(this.API_URL + "/medife/ping_seguro?code=xx&state=" + state, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + localStorage.getItem('access_token'))
        })
            .subscribe(function (data) { return _this.message = data.message; }, function (error) { return _this.message = error; });
    };
    PingComponent.prototype.securedScopedPing = function () {
        var _this = this;
        this.message = '';
        this.http
            .get(this.API_URL + "/medife-private-scoped", {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + localStorage.getItem('access_token'))
        })
            .subscribe(function (data) { return _this.message = data.message; }, function (error) { return _this.message = error; });
    };
    PingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ping',
            template: __webpack_require__("./src/app/ping/ping.component.html"),
            styles: [__webpack_require__("./src/app/ping/ping.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PingComponent);
    return PingComponent;
}());



/***/ }),

/***/ "./src/app/prestador1/prestador1.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prestador1/prestador1.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"nickname\">lombardidr@gmail.com</h3>\r\n<h4 class=\"nickname\">Doctor Victor Lombardi</h4>\r\n<p>Ingrese el código validador que le enviamos</p>\r\n<form class=\"form-inline\">\r\n\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control col-md-2\" id=\"digito1\" size=\"1\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control col-md-2\" id=\"digito2\" size=\"1\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control col-md-2\" id=\"digito3\" size=\"1\">\r\n  </div>\r\n  <br />\r\n  <button>Validar</button>\r\n\r\n</form>\r\n<p>No recibiste el código en 10 segundos. Solicitalo nuevamente</p>\r\n"

/***/ }),

/***/ "./src/app/prestador1/prestador1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prestador1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Prestador1Component = /** @class */ (function () {
    function Prestador1Component(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    Prestador1Component.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            if (this.auth.userProfile) {
                this.profile = this.auth.userProfile;
            }
            else {
                this.auth.getProfile(function (err, profile) {
                    _this.profile = profile;
                });
            }
        }
    };
    Prestador1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prestador1',
            template: __webpack_require__("./src/app/prestador1/prestador1.component.html"),
            styles: [__webpack_require__("./src/app/prestador1/prestador1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], Prestador1Component);
    return Prestador1Component;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- src/app/profile/profile.component.html -->\r\n\r\n<div class=\"panel panel-default profile-area\">\r\n  <div class=\"panel-heading\">\r\n    <h3>Profile</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\r\n    <div>\r\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\r\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\r\n    </div>\r\n    <pre class=\"full-profile\">{{ profile | json }}</pre>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
// src/app/profile/profile.component.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/providers/authHttpServiceFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authHttpServiceFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);

function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthConfig"]({
        tokenGetter: (function () { return localStorage.getItem('access_token'); })
    }), http, options);
}
;


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map