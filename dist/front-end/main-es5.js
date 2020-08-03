function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./auth.config.ts":
  /*!************************!*\
    !*** ./auth.config.ts ***!
    \************************/

  /*! exports provided: default */

  /***/
  function authConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = {
      audience: 'https://bsfp-volunteer-test.herokuapp.com/api',
      domain: 'snowy-pond-4495.us.auth0.com',
      client_id: 'jfGPTHVGqOK5lcd0k6vKCK8lnjdRkd4O',
      redirect_uri: "".concat(window.location.origin, "/callback")
    };
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/shop/shop.component */
    "./src/app/components/shop/shop.component.ts");
    /* harmony import */


    var _components_family_family_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/family/family.component */
    "./src/app/components/family/family.component.ts");
    /* harmony import */


    var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/callback/callback.component */
    "./src/app/components/callback/callback.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_family_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/family.guard */
    "./src/app/guards/family.guard.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _guards_no_family_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guards/no-family.guard */
    "./src/app/guards/no-family.guard.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/interceptor.service */
    "./src/app/services/interceptor.service.ts");

    var routes = [{
      path: 'callback',
      component: _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_5__["CallbackComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
      path: 'family',
      component: _components_family_family_component__WEBPACK_IMPORTED_MODULE_4__["FamilyComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_no_family_guard__WEBPACK_IMPORTED_MODULE_9__["NoFamilyGuard"]]
    }, {
      path: 'shop',
      component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_family_guard__WEBPACK_IMPORTED_MODULE_7__["FamilyGuard"]]
    }, {
      path: 'order',
      component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_family_guard__WEBPACK_IMPORTED_MODULE_7__["FamilyGuard"]]
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["InterceptorService"],
        multi: true
      }],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["InterceptorService"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'Modern Pantry';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.localAuthSetup();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/shop/shop.component */
    "./src/app/components/shop/shop.component.ts");
    /* harmony import */


    var _components_family_family_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/family/family.component */
    "./src/app/components/family/family.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_submit_modal_submit_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/submit-modal/submit-modal.component */
    "./src/app/components/submit-modal/submit-modal.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/callback/callback.component */
    "./src/app/components/callback/callback.component.ts");
    /* harmony import */


    var _components_questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/questions-modal/questions-modal.component */
    "./src/app/components/questions-modal/questions-modal.component.ts");
    /* harmony import */


    var _components_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/update-modal/update-modal.component */
    "./src/app/components/update-modal/update-modal.component.ts");
    /* harmony import */


    var _components_intro_modal_intro_modal_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/intro-modal/intro-modal.component */
    "./src/app/components/intro-modal/intro-modal.component.ts");
    /* harmony import */


    var _components_type_type_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/type/type.component */
    "./src/app/components/type/type.component.ts");
    /* harmony import */


    var _components_limited_type_limited_type_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/limited-type/limited-type.component */
    "./src/app/components/limited-type/limited-type.component.ts");
    /* harmony import */


    var _components_base_product_base_product_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/base-product/base-product.component */
    "./src/app/components/base-product/base-product.component.ts");
    /* harmony import */


    var _components_limited_product_limited_product_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/limited-product/limited-product.component */
    "./src/app/components/limited-product/limited-product.component.ts");
    /* harmony import */


    var _components_type_limited_product_type_limited_product_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/type-limited-product/type-limited-product.component */
    "./src/app/components/type-limited-product/type-limited-product.component.ts");
    /* harmony import */


    var _components_sub_type_product_sub_type_product_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/sub-type-product/sub-type-product.component */
    "./src/app/components/sub-type-product/sub-type-product.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_25__["ClickOutsideModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"], _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_27__["ShopComponent"], _components_family_family_component__WEBPACK_IMPORTED_MODULE_28__["FamilyComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"], _components_submit_modal_submit_modal_component__WEBPACK_IMPORTED_MODULE_30__["SubmitModalComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_31__["NavbarComponent"], _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_32__["CallbackComponent"], _components_questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_33__["QuestionsModalComponent"], _components_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_34__["UpdateModalComponent"], _components_intro_modal_intro_modal_component__WEBPACK_IMPORTED_MODULE_35__["IntroModalComponent"], _components_type_type_component__WEBPACK_IMPORTED_MODULE_36__["TypeComponent"], _components_limited_type_limited_type_component__WEBPACK_IMPORTED_MODULE_37__["LimitedTypeComponent"], _components_base_product_base_product_component__WEBPACK_IMPORTED_MODULE_38__["BaseProductComponent"], _components_limited_product_limited_product_component__WEBPACK_IMPORTED_MODULE_39__["LimitedProductComponent"], _components_type_limited_product_type_limited_product_component__WEBPACK_IMPORTED_MODULE_40__["TypeLimitedProductComponent"], _components_sub_type_product_sub_type_product_component__WEBPACK_IMPORTED_MODULE_41__["SubTypeProductComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_25__["ClickOutsideModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"], _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_27__["ShopComponent"], _components_family_family_component__WEBPACK_IMPORTED_MODULE_28__["FamilyComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"], _components_submit_modal_submit_modal_component__WEBPACK_IMPORTED_MODULE_30__["SubmitModalComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_31__["NavbarComponent"], _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_32__["CallbackComponent"], _components_questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_33__["QuestionsModalComponent"], _components_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_34__["UpdateModalComponent"], _components_intro_modal_intro_modal_component__WEBPACK_IMPORTED_MODULE_35__["IntroModalComponent"], _components_type_type_component__WEBPACK_IMPORTED_MODULE_36__["TypeComponent"], _components_limited_type_limited_type_component__WEBPACK_IMPORTED_MODULE_37__["LimitedTypeComponent"], _components_base_product_base_product_component__WEBPACK_IMPORTED_MODULE_38__["BaseProductComponent"], _components_limited_product_limited_product_component__WEBPACK_IMPORTED_MODULE_39__["LimitedProductComponent"], _components_type_limited_product_type_limited_product_component__WEBPACK_IMPORTED_MODULE_40__["TypeLimitedProductComponent"], _components_sub_type_product_sub_type_product_component__WEBPACK_IMPORTED_MODULE_41__["SubTypeProductComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_25__["ClickOutsideModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]],
          entryComponents: [_components_intro_modal_intro_modal_component__WEBPACK_IMPORTED_MODULE_35__["IntroModalComponent"], _components_submit_modal_submit_modal_component__WEBPACK_IMPORTED_MODULE_30__["SubmitModalComponent"], _components_questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_33__["QuestionsModalComponent"], _components_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_34__["UpdateModalComponent"]],
          providers: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/base-product/base-product.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/base-product/base-product.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BaseProductComponent */

  /***/
  function srcAppComponentsBaseProductBaseProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseProductComponent", function () {
      return BaseProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_models_type_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/type.model */
    "./src/app/models/type.model.ts");
    /* harmony import */


    var src_app_models_family_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/family.model */
    "./src/app/models/family.model.ts");
    /* harmony import */


    var src_app_models_type_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/type-product.model */
    "./src/app/models/type-product.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BaseProductComponent =
    /*#__PURE__*/
    function () {
      function BaseProductComponent(cartService) {
        _classCallCheck(this, BaseProductComponent);

        this.cartService = cartService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
      }

      _createClass(BaseProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addOneToCart",
        value: function addOneToCart() {
          this.getProductInCart().amount++;
          this.cartService.updateCart(this.cart);
        }
      }, {
        key: "addProductToCart",
        value: function addProductToCart() {
          var _this = this;

          if (this.isTypeInCart()) {
            this.getTypeInCart().products.push({
              productId: this.product._id,
              productName: this.product.productName,
              amount: 1
            });
          } else {
            if (this.type.typeLimits && !this.type.typeLimits.enableTypeTracking) {
              this.typeAmountReceived = this.type.typeLimits.typeSizeAmount.find(function (typeSizeAmount) {
                return typeSizeAmount.minFamSize <= _this.family.familySize && _this.family.familySize <= typeSizeAmount.maxFamSize;
              }).maxAmount;
              this.cart.push({
                typeId: this.type._id,
                typeName: this.type.typeName,
                typeAmountReceived: this.typeAmountReceived,
                products: [{
                  productId: this.product._id,
                  productName: this.product.productName,
                  amount: 1
                }]
              });
            } else {
              this.cart.push({
                typeId: this.type._id,
                typeName: this.type.typeName,
                products: [{
                  productId: this.product._id,
                  productName: this.product.productName,
                  amount: 1
                }]
              });
            }
          }

          this.cartService.updateCart(this.cart);
          this.inCart = this.isProductInCart();
        }
      }, {
        key: "getAmountInCart",
        value: function getAmountInCart() {
          if (this.isProductInCart()) {
            return this.getProductInCart().amount;
          } else {
            return 0;
          }
        }
      }, {
        key: "getProductInCart",
        value: function getProductInCart() {
          var _this2 = this;

          return this.getTypeInCart().products.find(function (product) {
            return product.productId === _this2.product._id;
          });
        }
      }, {
        key: "getTypeInCart",
        value: function getTypeInCart() {
          var _this3 = this;

          return this.cart.find(function (cartItemByType) {
            return cartItemByType.typeId === _this3.type._id;
          });
        }
      }, {
        key: "isProductInCart",
        value: function isProductInCart() {
          if (this.isTypeInCart()) {
            return this.getProductInCart() ? true : false;
          } else {
            return false;
          }
        }
      }, {
        key: "isTypeInCart",
        value: function isTypeInCart() {
          return this.getTypeInCart() ? true : false;
        }
      }, {
        key: "removeProductFromCart",
        value: function removeProductFromCart() {
          var _this4 = this;

          this.getTypeInCart().products = this.getTypeInCart().products.filter(function (product) {
            return product.productId !== _this4.product._id;
          });

          if (!this.getTypeInCart().products.length) {
            this.cart = this.cart.filter(function (cartItemByType) {
              return cartItemByType.typeId !== _this4.type._id;
            });
          }

          this.inCart = this.isProductInCart();
          this.cartService.updateCart(this.cart);
        }
      }, {
        key: "subtractOneFromCart",
        value: function subtractOneFromCart() {
          this.getProductInCart().amount--;
          this.cartService.updateCart(this.cart);
        }
      }]);

      return BaseProductComponent;
    }();

    BaseProductComponent.ɵfac = function BaseProductComponent_Factory(t) {
      return new (t || BaseProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    BaseProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BaseProductComponent,
      selectors: [["app-base-product"]],
      inputs: {
        cart: "cart",
        family: "family",
        product: "product",
        type: "type"
      },
      decls: 0,
      vars: 0,
      template: function BaseProductComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzZS1wcm9kdWN0L2Jhc2UtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-base-product',
          templateUrl: './base-product.component.html',
          styleUrls: ['./base-product.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, {
        cart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        family: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/callback/callback.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/callback/callback.component.ts ***!
    \***********************************************************/

  /*! exports provided: CallbackComponent */

  /***/
  function srcAppComponentsCallbackCallbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallbackComponent", function () {
      return CallbackComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var CallbackComponent =
    /*#__PURE__*/
    function () {
      function CallbackComponent(authService) {
        _classCallCheck(this, CallbackComponent);

        this.authService = authService;
      }

      _createClass(CallbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.handleAuthCallback();
        }
      }]);

      return CallbackComponent;
    }();

    CallbackComponent.ɵfac = function CallbackComponent_Factory(t) {
      return new (t || CallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    CallbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CallbackComponent,
      selectors: [["app-callback"]],
      decls: 1,
      vars: 0,
      template: function CallbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      },
      directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]],
      styles: [".mat-spinner[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: visible;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxsYmFjay9jYWxsYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0VBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXNwaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-callback',
          templateUrl: './callback.component.html',
          styleUrls: ['./callback.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/family.service */
    "./src/app/services/family.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_models_order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/order.model */
    "./src/app/models/order.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../update-modal/update-modal.component */
    "./src/app/components/update-modal/update-modal.component.ts");
    /* harmony import */


    var src_app_services_pick_up_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/pick-up-date.service */
    "./src/app/services/pick-up-date.service.ts");
    /* harmony import */


    var _submit_modal_submit_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../submit-modal/submit-modal.component */
    "./src/app/components/submit-modal/submit-modal.component.ts");
    /* harmony import */


    var src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/type-tracker.service */
    "./src/app/services/type-tracker.service.ts");
    /* harmony import */


    var src_app_services_point_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/point.service */
    "./src/app/services/point.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function CartComponent_mat_card_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Email Address: " + ctx_r48.family.emailAddress);
      }
    }

    function CartComponent_mat_card_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Number of children between 4 and 18 years old: " + ctx_r49.family.schoolChildren);
      }
    }

    function CartComponent_mat_card_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Any children 3 or younger: Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_mat_card_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your cart is empty!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To place an order, please press the \"Back to Shop\" button and add items. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_ng_container_82_ng_container_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "These items have limited availability.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_ng_container_82_ng_container_1_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_ng_container_82_ng_container_1_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r62.productName);
      }
    }

    function CartComponent_ng_container_82_ng_container_1_ng_container_8_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_ng_container_82_ng_container_1_ng_container_8_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r65 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r65.amount);
      }
    }

    function CartComponent_ng_container_82_ng_container_1_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ng_container_82_ng_container_1_ng_container_8_th_1_Template, 2, 0, "th", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_ng_container_82_ng_container_1_ng_container_8_td_2_Template, 2, 1, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function CartComponent_ng_container_82_ng_container_1_ng_container_9_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Total Amount Received: " + type_r54.typeAmountReceived);
      }
    }

    function CartComponent_ng_container_82_ng_container_1_ng_container_9_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Requested");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_ng_container_82_ng_container_1_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ng_container_82_ng_container_1_ng_container_9_th_1_Template, 2, 1, "th", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_ng_container_82_ng_container_1_ng_container_9_td_2_Template, 2, 0, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function CartComponent_ng_container_82_ng_container_1_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
      }
    }

    function CartComponent_ng_container_82_ng_container_1_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
      }
    }

    function CartComponent_ng_container_82_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_ng_container_82_ng_container_1_div_3_Template, 3, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_ng_container_82_ng_container_1_th_6_Template, 2, 0, "th", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CartComponent_ng_container_82_ng_container_1_td_7_Template, 2, 1, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_ng_container_82_ng_container_1_ng_container_8_Template, 3, 0, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_ng_container_82_ng_container_1_ng_container_9_Template, 3, 0, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CartComponent_ng_container_82_ng_container_1_tr_10_Template, 1, 0, "tr", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CartComponent_ng_container_82_ng_container_1_tr_11_Template, 1, 0, "tr", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var type_r54 = ctx.$implicit;

        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", type_r54.typeAmountReceived ? "no-bottom-border" : "full-border");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r54.typeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r54.typeAmountReceived);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", type_r54.products);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !type_r54.typeAmountReceived);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r54.typeAmountReceived);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r53.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r53.columns);
      }
    }

    function CartComponent_ng_container_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ng_container_82_ng_container_1_Template, 13, 8, "ng-container", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.cart);
      }
    }

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(authService, cartService, dialog, familyService, httpClient, pickUpDateService, pointService, router, snackBar, typeTrackerService) {
        _classCallCheck(this, CartComponent);

        this.authService = authService;
        this.cartService = cartService;
        this.dialog = dialog;
        this.familyService = familyService;
        this.httpClient = httpClient;
        this.pickUpDateService = pickUpDateService;
        this.pointService = pointService;
        this.router = router;
        this.snackBar = snackBar;
        this.typeTrackerService = typeTrackerService;
        this.cartPanelOpenState = false;
        this.cartTypes = [];
        this.columns = ['column1', 'column2'];
        this.contactPanelOpenState = false;
        this.householdPanelOpenState = false;
        this.MODAL_WIDTH = '35rem';
        this.orderReceived = false;
        this.pickUpPanelOpenState = false;
        this.submitErrorCount = 0;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subscription"]();
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["combineLatest"])([this.authService.getLogOutClicked(), this.familyService.getFamily(), this.cartService.getCart(), this.pickUpDateService.getPickUpDate()]).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 4),
                logOutClicked = _ref2[0],
                family = _ref2[1],
                cart = _ref2[2],
                pickUpDate = _ref2[3];

            _this5.logOutClicked = logOutClicked;
            _this5.family = family;
            _this5.cart = cart;

            _this5.sortCart();

            _this5.pickUpDate = pickUpDate;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "clearSession",
        value: function clearSession() {
          this.cartService.resetCart();
          this.familyService.resetFamily();
          this.pickUpDateService.resetPickUpDate();
          this.pointService.setMaxPoints(0);
          this.pointService.updatePoints(0);
          this.typeTrackerService.resetTypeTrackers();
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          var order = new src_app_models_order_model__WEBPACK_IMPORTED_MODULE_4__["Order"]();
          order.family = this.family;
          order.cart = this.cart;
          order.pickUpDate = this.pickUpDate;
          order.received = false;
          return order;
        }
      }, {
        key: "sortCart",
        value: function sortCart() {
          this.cart.sort(function (before, after) {
            return before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1;
          });
          this.cart.forEach(function (type) {
            type.products.sort(function (before, after) {
              return before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1;
            });
          });
        }
      }, {
        key: "onBackToShopClick",
        value: function onBackToShopClick() {
          this.router.navigate(["/shop"]);
        }
      }, {
        key: "onSubmitOrder",
        value: function onSubmitOrder() {
          var _this6 = this;

          this.httpClient.post("".concat(this.url, "/orders/add"), this.createOrder()).subscribe(function (response) {
            if (response.status === 200) {
              _this6.orderReceived = true;
              var dialogWidth;
              _this6.family.referral ? dialogWidth = '37rem' : dialogWidth = '45rem';

              _this6.dialog.open(_submit_modal_submit_modal_component__WEBPACK_IMPORTED_MODULE_10__["SubmitModalComponent"], {
                backdropClass: 'darkest-back-drop',
                width: dialogWidth,
                disableClose: true,
                data: {
                  family: _this6.family,
                  pickUpDate: _this6.pickUpDate
                }
              });

              _this6.clearSession();
            } else {
              if (_this6.submitErrorCount < 4) {
                _this6.snackBar.open('Submission failed. Please try again', 'Dismiss', {
                  duration: 2000,
                  panelClass: ['red-snackbar']
                });

                _this6.submitErrorCount++;
              } else {
                _this6.snackBar.open('Terminal Error.', 'Dismiss', {
                  duration: 2000,
                  panelClass: ['red-snackbar']
                });

                _this6.router.navigate(["/"]);
              }
            }
          });
        }
      }, {
        key: "openUpdateContactModal",
        value: function openUpdateContactModal() {
          this.dialog.open(_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_8__["UpdateModalComponent"], {
            backdropClass: 'darker-back-drop',
            data: {
              modal: 'contact',
              family: this.family
            },
            disableClose: true,
            width: this.MODAL_WIDTH
          });
        }
      }, {
        key: "openUpdateHouseholdModal",
        value: function openUpdateHouseholdModal() {
          this.dialog.open(_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_8__["UpdateModalComponent"], {
            backdropClass: 'darker-back-drop',
            data: {
              modal: 'household',
              family: this.family
            },
            disableClose: true,
            width: this.MODAL_WIDTH
          });
        }
      }, {
        key: "openUpdatePickUpModal",
        value: function openUpdatePickUpModal() {
          this.dialog.open(_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_8__["UpdateModalComponent"], {
            backdropClass: 'darker-back-drop',
            data: {
              modal: 'pick-up',
              family: this.family,
              pickUpDate: this.pickUpDate
            },
            disableClose: true,
            width: this.MODAL_WIDTH
          });
        }
      }, {
        key: "unloadNotification",
        value: function unloadNotification($event) {
          if (!this.orderReceived && !this.logOutClicked) {
            $event.returnValue = true;
          }
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pick_up_date_service__WEBPACK_IMPORTED_MODULE_9__["PickUpDateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_point_service__WEBPACK_IMPORTED_MODULE_12__["PointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_11__["TypeTrackerService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      hostBindings: function CartComponent_HostBindings(rf, ctx, elIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function CartComponent_beforeunload_HostBindingHandler($event) {
            return ctx.unloadNotification($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 90,
      vars: 21,
      consts: [["id", "flex-grid"], [1, "button-container"], [1, "button-div"], ["mat-raised-button", "", 3, "click"], ["id", "overview"], [3, "itemSize"], [3, "expanded", "opened", "closed"], [1, "icon-title"], [1, "icon"], [1, "title"], [1, "info-container"], [4, "ngIf"], [1, "flex-justify-center"], [3, "click"], ["id", "empty-cart", 4, "ngIf"], ["mat-raised-button", "", 3, "disabled", "click"], ["id", "empty-cart"], [4, "ngFor", "ngForOf"], [1, "items-toolbar", "top-table", "rounded-top", 3, "ngClass"], ["class", "items-toolbar no-top-border text-center padding-bottom-2 dumb-width-87", 4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "column1"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "column2", 4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "items-toolbar", "full-border", "bottom-table", "dumb-width-89"], [1, "items-toolbar", "no-top-border", "text-center", "padding-bottom-2", "dumb-width-87"], [1, "inline"], ["mat-header-cell", ""], ["mat-cell", ""], ["matColumnDef", "column2"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Change Cart Items?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_6_listener($event) {
            return ctx.onBackToShopClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "cdk-virtual-scroll-viewport", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-expansion-panel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CartComponent_Template_mat_expansion_panel_opened_12_listener($event) {
            return ctx.contactPanelOpenState = true;
          })("closed", function CartComponent_Template_mat_expansion_panel_closed_12_listener($event) {
            return ctx.contactPanelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CartComponent_mat_card_31_Template, 2, 1, "mat-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_33_listener($event) {
            return ctx.openUpdateContactModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Update Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-action-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_mat_action_row_click_35_listener($event) {
            return ctx.contactPanelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-expansion-panel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CartComponent_Template_mat_expansion_panel_opened_36_listener($event) {
            return ctx.householdPanelOpenState = true;
          })("closed", function CartComponent_Template_mat_expansion_panel_closed_36_listener($event) {
            return ctx.householdPanelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "house");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Household Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CartComponent_mat_card_49_Template, 2, 1, "mat-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CartComponent_mat_card_50_Template, 2, 0, "mat-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_52_listener($event) {
            return ctx.openUpdateHouseholdModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Update Household");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-action-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_mat_action_row_click_54_listener($event) {
            return ctx.householdPanelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-expansion-panel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CartComponent_Template_mat_expansion_panel_opened_55_listener($event) {
            return ctx.pickUpPanelOpenState = true;
          })("closed", function CartComponent_Template_mat_expansion_panel_closed_55_listener($event) {
            return ctx.pickUpPanelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "directions_car");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Pick Up Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-action-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_mat_action_row_click_70_listener($event) {
            return ctx.pickUpPanelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-expansion-panel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CartComponent_Template_mat_expansion_panel_opened_71_listener($event) {
            return ctx.cartPanelOpenState = true;
          })("closed", function CartComponent_Template_mat_expansion_panel_closed_71_listener($event) {
            return ctx.cartPanelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Your Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, CartComponent_mat_card_81_Template, 5, 0, "mat-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, CartComponent_ng_container_82_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-action-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_mat_action_row_click_83_listener($event) {
            return ctx.cartPanelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "aside", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Ready to Submit?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_88_listener($event) {
            return ctx.onSubmitOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Submit Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.contactPanelOpenState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contactPanelOpenState ? "close" : "open", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("First Name: " + ctx.family.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Last Name: " + ctx.family.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Zip Code: " + ctx.family.zipCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Phone Number: " + ctx.family.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.family.emailAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.householdPanelOpenState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.householdPanelOpenState ? "close" : "open", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Family Size: " + ctx.family.familySize, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.family.schoolChildren !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.family.infants);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.pickUpPanelOpenState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pickUpPanelOpenState ? "close" : "open", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.family.referral ? "Pick Up Location: CELC" : "Pick Up Location: Broad Street Food Pantry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Pick Up Date: " + ctx.pickUpDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.cartPanelOpenState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cartPanelOpenState ? "close" : "open", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cart.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.cart.length);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["CdkFixedSizeVirtualScroll"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanelTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanelDescription"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanelActionRow"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatRow"]],
      styles: ["#flex-grid[_ngcontent-%COMP%] {\r\n    margin: 5%;\r\n    margin-bottom: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.button-container[_ngcontent-%COMP%] {\r\n    background: #46a8d0;\r\n    background-image: url('wavecut.png');    border: solid black 1px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    border-radius: 10px;\r\n    height: 70%;\r\n    min-width: 200px;\r\n    width: 20%;\r\n}\r\n.button-div[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] { \r\n    background-color: #F6D936;\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    color: black;\r\n    height: auto;\r\n    margin: 5%;\r\n    width: 10rem;\r\n}\r\n#overview[_ngcontent-%COMP%] {\r\n    background: #46a8d0;\r\n    background-image: url('wavecut.png');\r\n    border: solid black 1px;\r\n    border-radius: 10px;\r\n    min-width: 700px;\r\n}\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    margin: 5%;\r\n    border: solid black 1px;\r\n}\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    margin-right: .5rem;\r\n}\r\n.icon-title[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n.icon[_ngcontent-%COMP%] {\r\n    margin-right: .5rem;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.info-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n    background: #71A040;\r\n    border: solid black 1px;\r\n    margin: 2%;\r\n}\r\n.info-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    margin-bottom: 0;\r\n}\r\n.flex-justify-center[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.mat-action-row[_ngcontent-%COMP%] {\r\n    border-top: 0;\r\n    cursor: pointer;\r\n}\r\n#empty-cart[_ngcontent-%COMP%] {\r\n    background: #A71E2A;\r\n    border: solid black .5px;\r\n    border-radius: 10px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.cdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\r\n    height: 70vh;\r\n    width: 100%;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    background: #065777;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    color: white;\r\n}\r\n.rounded-top[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n.items-toolbar[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    height: 50%;\r\n    margin-left: 5%;\r\n    width: 90%;\r\n}\r\n.full-border[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n}\r\n.no-bottom-border[_ngcontent-%COMP%] {\r\n    border-left: solid black 1px;\r\n    border-right: solid black 1px;\r\n    border-top: solid black 1px;\r\n}\r\n.no-top-border[_ngcontent-%COMP%] {\r\n    border-bottom: solid black 1px;\r\n    border-left: solid black 1px;\r\n    border-right: solid black 1px;\r\n}\r\n.text-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.inline[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n.padding-bottom-2[_ngcontent-%COMP%] {\r\n    padding-left: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n.dumb-width-87[_ngcontent-%COMP%] {\r\n    width: 87.7%;\r\n}\r\n.dumb-width-89[_ngcontent-%COMP%] {\r\n    width: 89.7%\r\n}\r\n.top-table[_ngcontent-%COMP%] {\r\n    margin-top: 2.5%;\r\n}\r\n.bottom-table[_ngcontent-%COMP%] {\r\n    border-top: none;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    height: 1rem;\r\n    margin-bottom: 2.5%;\r\n}\r\n.mat-table[_ngcontent-%COMP%] {\r\n    background: #46a8d0;\r\n    margin-left: 5%;\r\n    color: black;\r\n    width: 90%;\r\n}\r\nth[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\nth.mat-header-cell[_ngcontent-%COMP%] {\r\n    border-bottom-color: black;\r\n}\r\ntd.mat-cell[_ngcontent-%COMP%] {\r\n    border-bottom-color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9DQUEyRCxLQUFLLHVCQUF1QjtJQUN2RixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9DQUEyRDtJQUMzRCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmbGV4LWdyaWQge1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0NmE4ZDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3dhdmVjdXQucG5nXCIpOyAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuLmJ1dHRvbi1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEOTM2O1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxufVxyXG4jb3ZlcnZpZXcge1xyXG4gICAgYmFja2dyb3VuZDogIzQ2YThkMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2F2ZWN1dC5wbmdcIik7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQ6ICM2MDNBMTc7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuLm1hdC1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbn1cclxuLmljb24tdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5pbmZvLWNvbnRhaW5lciAubWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogIzcxQTA0MDtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG4uaW5mby1jb250YWluZXIgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uZmxleC1qdXN0aWZ5LWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1hdC1hY3Rpb24tcm93IHtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gIFxyXG4jZW1wdHktY2FydCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTcxRTJBO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA2NTc3NztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucm91bmRlZC10b3Age1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5pdGVtcy10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU3Nzc7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuLmZ1bGwtYm9yZGVyIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcbi5uby1ib3R0b20tYm9yZGVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG4ubm8tdG9wLWJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ucGFkZGluZy1ib3R0b20tMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcbi5kdW1iLXdpZHRoLTg3IHtcclxuICAgIHdpZHRoOiA4Ny43JTtcclxufVxyXG4uZHVtYi13aWR0aC04OSB7XHJcbiAgICB3aWR0aDogODkuNyVcclxufVxyXG4udG9wLXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbn1cclxuLmJvdHRvbS10YWJsZSB7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi41JTtcclxufVxyXG4ubWF0LXRhYmxlIHtcclxuICAgIGJhY2tncm91bmQ6ICM0NmE4ZDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbnRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnRoLCB0ZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxudGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xyXG59XHJcbnRkLm1hdC1jZWxsIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _services_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: src_app_services_pick_up_date_service__WEBPACK_IMPORTED_MODULE_9__["PickUpDateService"]
        }, {
          type: src_app_services_point_service__WEBPACK_IMPORTED_MODULE_12__["PointService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }, {
          type: src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_11__["TypeTrackerService"]
        }];
      }, {
        unloadNotification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/family/family.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/family/family.component.ts ***!
    \*******************************************************/

  /*! exports provided: FamilyComponent */

  /***/
  function srcAppComponentsFamilyFamilyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FamilyComponent", function () {
      return FamilyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_family_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/family.service */
    "./src/app/services/family.service.ts");
    /* harmony import */


    var src_app_services_point_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/point.service */
    "./src/app/services/point.service.ts");
    /* harmony import */


    var src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/type-tracker.service */
    "./src/app/services/type-tracker.service.ts");
    /* harmony import */


    var src_app_services_pick_up_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/pick-up-date.service */
    "./src/app/services/pick-up-date.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function FamilyComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Contact Information");
      }
    }

    function FamilyComponent_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.requiredError);
      }
    }

    function FamilyComponent_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.requiredError);
      }
    }

    function FamilyComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zipcode must be exactly five digits (example: 64359).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FamilyComponent_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.requiredError);
      }
    }

    function FamilyComponent_mat_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number must be in the following format: 555-555-5555.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FamilyComponent_mat_error_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.requiredError);
      }
    }

    function FamilyComponent_mat_error_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email address must include the @ symbol.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FamilyComponent_ng_template_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Household Information");
      }
    }

    function FamilyComponent_mat_error_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.requiredError);
      }
    }

    function FamilyComponent_mat_error_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.requiredError);
      }
    }

    function FamilyComponent_mat_error_97_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.requiredError);
      }
    }

    function FamilyComponent_ng_template_104_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Pick Up Options");
      }
    }

    function FamilyComponent_mat_option_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pickUpDate_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pickUpDate_r18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pickUpDate_r18);
      }
    }

    function FamilyComponent_mat_error_112_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FamilyComponent_ng_template_118_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FamilyComponent_ng_template_119_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "house");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FamilyComponent_ng_template_120_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "directions_car");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FamilyComponent =
    /*#__PURE__*/
    function () {
      function FamilyComponent(authService, cartService, familyService, pickUpDateService, pointService, router, typeTrackerService) {
        _classCallCheck(this, FamilyComponent);

        this.authService = authService;
        this.cartService = cartService;
        this.familyService = familyService;
        this.pickUpDateService = pickUpDateService;
        this.pointService = pointService;
        this.router = router;
        this.typeTrackerService = typeTrackerService;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{5}$/)]),
          phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)]),
          emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email)
        });
        this.familyPanelCloseState = true;
        this.isCompleted = false;
        this.householdForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          familySize: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          schoolChildren: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          infants: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.pickUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          // referral: new FormControl('', Validators.required),
          pickUpDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.typeTrackers = [];
        this.requiredError = 'This field is required.';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
      }

      _createClass(FamilyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.familyService.resetFamily();
          this.cartService.resetCart();
          this.pickUpDateService.resetPickUpDate();
          this.pointService.setMaxPoints(0);
          this.pointService.updatePoints(0);
          this.setPickUpDateOptions();
          this.typeTrackerService.resetTypeTrackers();
          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([this.authService.getLogOutClicked(), this.familyService.getFamily(), this.pointService.getPointsMapping()]).subscribe(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 3),
                logOutClicked = _ref4[0],
                family = _ref4[1],
                pointsMapping = _ref4[2];

            _this7.logOutClicked = logOutClicked;
            _this7.family = family;
            _this7.pointsMapping = pointsMapping;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "initPoints",
        value: function initPoints(familySize) {
          var _this8 = this;

          this.pointsMapping.forEach(function (mapping) {
            if (mapping.minSize <= familySize && familySize <= mapping.maxSize) {
              _this8.pointService.setMaxPoints(mapping.points);

              _this8.pointService.updatePoints(mapping.points);
            }
          });
        }
      }, {
        key: "setContactInfo",
        value: function setContactInfo() {
          this.family.firstName = this.family.firstName = this.contactForm.get('firstName').value;
          this.family.lastName = this.contactForm.get('lastName').value;
          this.family.phoneNumber = this.contactForm.get('phoneNumber').value;
          this.family.zipCode = this.contactForm.get('zipCode').value;

          if (this.contactForm.get('emailAddress').value) {
            this.family.emailAddress = this.contactForm.get('emailAddress').value;
          }
        }
      }, {
        key: "setHouseholdInfo",
        value: function setHouseholdInfo() {
          this.family.familySize = this.householdForm.get('familySize').value;
          this.family.schoolChildren = this.householdForm.get('schoolChildren').value;
          this.family.infants = this.householdForm.get('infants').value;
        }
      }, {
        key: "setPickUpInfo",
        value: function setPickUpInfo() {
          // LEFT IN FOR WHEN OR IF WE WANT TO RE-IMPLEMENT SELECT PICK UP DATES/LOCATIONS
          // this.family.referral = this.pickUpForm.get('referral').value;
          // this.pickUpDateService.updatePickUpDate(this.pickUpForm.get('pickUpDate').value);
          this.pickUpDateService.setTomorrowPickUpDate();
          this.pickUpDateService.updatePickUpDateTomorrow();
        }
      }, {
        key: "setPickUpDateOptions",
        value: function setPickUpDateOptions(referral) {
          this.pickUpForm.controls.pickUpDate.reset(); // LEFT IN FOR WHEN OR IF WE WANT TO RE-IMPLEMENT SELECT PICK UP DATES/LOCATIONS
          // this.pickUpDateOptions = this.pickUpDateService.getPickUpDateOptions(referral);

          this.pickUpDateOptions = this.pickUpDateService.getTomorrowPickUpOption();
        }
      }, {
        key: "onShopClick",
        value: function onShopClick() {
          if (this.contactForm.valid && this.householdForm.valid && this.pickUpForm.valid) {
            this.family.referral = false;
            this.setContactInfo();
            this.setHouseholdInfo();
            this.setPickUpInfo();
            this.familyService.updateFamily(this.family);
            this.initPoints(this.family.familySize);
            this.router.navigate(["/shop"]);
          }
        }
      }, {
        key: "unloadNotification",
        value: function unloadNotification($event) {
          if (!this.logOutClicked) {
            $event.returnValue = true;
          }
        }
      }]);

      return FamilyComponent;
    }();

    FamilyComponent.ɵfac = function FamilyComponent_Factory(t) {
      return new (t || FamilyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_family_service__WEBPACK_IMPORTED_MODULE_4__["FamilyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pick_up_date_service__WEBPACK_IMPORTED_MODULE_7__["PickUpDateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_point_service__WEBPACK_IMPORTED_MODULE_5__["PointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_6__["TypeTrackerService"]));
    };

    FamilyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FamilyComponent,
      selectors: [["app-family"]],
      hostBindings: function FamilyComponent_HostBindings(rf, ctx, elIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function FamilyComponent_beforeunload_HostBindingHandler($event) {
            return ctx.unloadNotification($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["STEPPER_GLOBAL_OPTIONS"],
        useValue: {
          displayDefaultIndicatorType: false
        }
      }])],
      decls: 121,
      vars: 39,
      consts: [[1, "flex-grid"], ["id", "family-form"], ["linear", "", "labelPosition", "bottom"], ["state", "contact", 3, "formGroup", "completed"], ["matStepLabel", ""], ["matInput", "", "formControlName", "firstName"], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "zipCode", "placeholder", "Example: 78965"], ["matInput", "", "formControlName", "phoneNumber", "placeholder", "Example: 777-777-7777"], ["matInput", "", "formControlName", "emailAddress"], [1, "button-space"], ["mat-raised-button", "", "matStepperNext", "", 3, "disabled"], ["state", "household", 3, "formGroup", "completed"], ["matInput", "", "formControlName", "familySize"], [3, "value"], ["matInput", "", "formControlName", "schoolChildren"], ["matInput", "", "formControlName", "infants"], ["mat-raised-button", "", "matStepperPrevious", ""], ["state", "pick-up", 3, "formGroup", "completed"], ["matInput", "", "formControlName", "pickUpDate"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "matStepperNext", "", 3, "disabled", "click"], ["matStepperIcon", "contact"], ["matStepperIcon", "household"], ["matStepperIcon", "pick-up"]],
      template: function FamilyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FamilyComponent_ng_template_5_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FamilyComponent_mat_error_11_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FamilyComponent_mat_error_17_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Zip Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FamilyComponent_mat_error_23_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FamilyComponent_mat_error_24_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FamilyComponent_mat_error_30_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FamilyComponent_mat_error_31_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email Address (optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FamilyComponent_mat_error_37_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-step", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, FamilyComponent_ng_template_43_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Family Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "9+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, FamilyComponent_mat_error_67_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Number of children between 4 and 18 years old");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "6+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, FamilyComponent_mat_error_87_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Any children 3 or younger?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, FamilyComponent_mat_error_97_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-step", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, FamilyComponent_ng_template_104_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Pick Up Dates:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, FamilyComponent_mat_option_111_Template, 2, 2, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, FamilyComponent_mat_error_112_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FamilyComponent_Template_button_click_116_listener($event) {
            return ctx.onShopClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Shop!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, FamilyComponent_ng_template_118_Template, 2, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, FamilyComponent_ng_template_119_Template, 2, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, FamilyComponent_ng_template_120_Template, 2, 0, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm)("completed", ctx.contactForm.status === "VALID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("firstName").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("lastName").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("zipCode").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("zipCode").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("phoneNumber").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("phoneNumber").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("emailAddress").hasError("email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.householdForm)("completed", ctx.householdForm.status === "VALID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.householdForm.get("familySize").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.householdForm.get("schoolChildren").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.householdForm.get("infants").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.householdForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.pickUpForm)("completed", ctx.pickUpForm.status === "VALID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pickUpDateOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pickUpForm.get("pickUpDate").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.pickUpForm.valid);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperNext"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperPrevious"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"]],
      styles: [".flex-grid[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    border-top: none;\r\n}\r\n#family-form[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    background-image: url(\"https://www.transparenttextures.com/patterns/wavecut.png\");\r\n    border: solid black 1px;\r\n}\r\n.mat-stepper-horizontal[_ngcontent-%COMP%]{\r\n    background-color:  #46a8d0;\r\n    color: black;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    background-color: #F6D936;\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    color: black;\r\n}\r\n.button-space[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    margin-top: 3%;\r\n    margin-bottom: 0%;\r\n}\r\n.mat-error[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYW1pbHkvZmFtaWx5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpRkFBaUY7SUFDakYsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYW1pbHkvZmFtaWx5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1ncmlkIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuI2ZhbWlseS1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy50cmFuc3BhcmVudHRleHR1cmVzLmNvbS9wYXR0ZXJucy93YXZlY3V0LnBuZ1wiKTtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcbi5tYXQtc3RlcHBlci1ob3Jpem9udGFse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0NmE4ZDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkQ5MzY7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIC41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJ1dHRvbi1zcGFjZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxufVxyXG4ubWF0LWVycm9yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-family',
          templateUrl: './family.component.html',
          styleUrls: ['./family.component.css'],
          providers: [{
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["STEPPER_GLOBAL_OPTIONS"],
            useValue: {
              displayDefaultIndicatorType: false
            }
          }]
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
        }, {
          type: _services_family_service__WEBPACK_IMPORTED_MODULE_4__["FamilyService"]
        }, {
          type: src_app_services_pick_up_date_service__WEBPACK_IMPORTED_MODULE_7__["PickUpDateService"]
        }, {
          type: src_app_services_point_service__WEBPACK_IMPORTED_MODULE_5__["PointService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_6__["TypeTrackerService"]
        }];
      }, {
        unloadNotification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/intro-modal/intro-modal.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/intro-modal/intro-modal.component.ts ***!
    \*****************************************************************/

  /*! exports provided: IntroModalComponent */

  /***/
  function srcAppComponentsIntroModalIntroModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroModalComponent", function () {
      return IntroModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function IntroModalComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IntroModalComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "thumb_up_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IntroModalComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "computer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IntroModalComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "commute");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IntroModalComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var IntroModalComponent =
    /*#__PURE__*/
    function () {
      function IntroModalComponent(dialogRef) {
        _classCallCheck(this, IntroModalComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(IntroModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCloseClick",
        value: function onCloseClick() {
          this.dialogRef.close();
        }
      }]);

      return IntroModalComponent;
    }();

    IntroModalComponent.ɵfac = function IntroModalComponent_Factory(t) {
      return new (t || IntroModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    IntroModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroModalComponent,
      selectors: [["app-intro-modal"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
        useValue: {
          displayDefaultIndicatorType: false
        }
      }])],
      decls: 21,
      vars: 0,
      consts: [[1, "questions"], ["labelPosition", "bottom"], ["label", "Qualify", "state", "qualification", "completed", "false"], ["label", "Order", "state", "order", "completed", "false"], ["label", "Pick Up", "state", "pick-up", "completed", "false"], ["matStepperIcon", "contact"], ["matStepperIcon", "qualification"], ["matStepperIcon", "order"], ["matStepperIcon", "pick-up"], ["matStepperIcon", "edit"], ["id", "return", "mat-raised-button", "", "cdkFocusInitial", "", 3, "click"]],
      template: function IntroModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "How It Works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "[Qualifications Goes Here]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "[Placing an Order Goes Here]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-step", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "[Pick Up Goes Here]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IntroModalComponent_ng_template_13_Template, 2, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, IntroModalComponent_ng_template_14_Template, 2, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, IntroModalComponent_ng_template_15_Template, 2, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IntroModalComponent_ng_template_16_Template, 2, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, IntroModalComponent_ng_template_17_Template, 2, 0, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroModalComponent_Template_button_click_19_listener($event) {
            return ctx.onCloseClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Return to Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStep"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      styles: [".questions[_ngcontent-%COMP%] {\r\n    background-color: #46a8d0;\r\n    padding: 1rem;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    font-size: large;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 2%;\r\n}\r\n.mat-stepper-horizontal[_ngcontent-%COMP%] {\r\n    background-color: #D47B28;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n    background-color: #71A040;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    color: black;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    background-color: #F6D936;\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    color: black;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n#return[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby1tb2RhbC9pbnRyby1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludHJvLW1vZGFsL2ludHJvLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NmE4ZDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY1Nzc3O1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q0N0IyODtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzFBMDQwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkQ5MzY7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIC41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4jcmV0dXJuIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intro-modal',
          templateUrl: './intro-modal.component.html',
          styleUrls: ['./intro-modal.component.css'],
          providers: [{
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
            useValue: {
              displayDefaultIndicatorType: false
            }
          }]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/limited-product/limited-product.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/limited-product/limited-product.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LimitedProductComponent */

  /***/
  function srcAppComponentsLimitedProductLimitedProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LimitedProductComponent", function () {
      return LimitedProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base_product_base_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../base-product/base-product.component */
    "./src/app/components/base-product/base-product.component.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/point.service */
    "./src/app/services/point.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LimitedProductComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Points");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r147.points);
      }
    }

    var LimitedProductComponent =
    /*#__PURE__*/
    function (_base_product_base_pr) {
      _inherits(LimitedProductComponent, _base_product_base_pr);

      function LimitedProductComponent(cartService, pointService) {
        var _this9;

        _classCallCheck(this, LimitedProductComponent);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(LimitedProductComponent).call(this, cartService));
        _this9.cartService = cartService;
        _this9.pointService = pointService;
        return _this9;
      }

      _createClass(LimitedProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.setLimit();
          this.setPoints();
          this.inCart = this.isProductInCart();
          this.subscription.add(this.pointService.getCurrentPoints().subscribe(function (currentPoints) {
            _this10.currentPoints = currentPoints;

            _this10.updateInCartAndBtn();
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "addPoints",
        value: function addPoints() {
          if (this.product.points) {
            this.currentPoints = this.currentPoints + this.product.points;
            this.pointService.updatePoints(this.currentPoints);
          }
        }
      }, {
        key: "addOneProduct",
        value: function addOneProduct() {
          this.isProductInCart() ? this.addOneToCart() : this.addProductToCart();
          this.removePoints();

          if (!this.product.points) {
            this.updateInCartAndBtn();
          }
        }
      }, {
        key: "hasEnoughPoints",
        value: function hasEnoughPoints() {
          if (this.product.points) {
            return this.currentPoints >= this.product.points;
          } else {
            return true;
          }
        }
      }, {
        key: "isProductUnderLimit",
        value: function isProductUnderLimit() {
          if (this.product.prodSizeAmount) {
            return this.getAmountInCart() < this.limit;
          } else {
            return true;
          }
        }
      }, {
        key: "subtractOneProduct",
        value: function subtractOneProduct() {
          this.getAmountInCart() > 1 ? this.subtractOneFromCart() : this.removeProductFromCart();
          this.addPoints();

          if (!this.product.points) {
            this.updateInCartAndBtn();
          }
        }
      }, {
        key: "removePoints",
        value: function removePoints() {
          if (this.product.points) {
            this.currentPoints = this.currentPoints - this.product.points;
            this.pointService.updatePoints(this.currentPoints);
          }
        }
      }, {
        key: "setLimit",
        value: function setLimit() {
          var _this11 = this;

          if (this.product.prodSizeAmount) {
            var familyValue;
            this.product.school ? familyValue = this.family.schoolChildren : familyValue = this.family.familySize;
            this.product.prodSizeAmount.forEach(function (mapping) {
              if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
                _this11.limit = mapping.maxAmount;
              }
            });
          }
        }
      }, {
        key: "setPoints",
        value: function setPoints() {
          if (this.product.points) {
            this.points = this.product.points;
          }
        }
      }, {
        key: "updateInCartAndBtn",
        value: function updateInCartAndBtn() {
          this.amountInCart = this.getAmountInCart();
          this.addBtnDisabled = !this.isProductUnderLimit() || !this.hasEnoughPoints();
        }
      }]);

      return LimitedProductComponent;
    }(_base_product_base_product_component__WEBPACK_IMPORTED_MODULE_1__["BaseProductComponent"]);

    LimitedProductComponent.ɵfac = function LimitedProductComponent_Factory(t) {
      return new (t || LimitedProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]));
    };

    LimitedProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LimitedProductComponent,
      selectors: [["app-limited-product"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 24,
      vars: 6,
      consts: [[1, "product-name"], [1, "icon-button-container"], [1, "info-container"], [1, "icon-container"], [1, "icon-badge", 3, "matBadge"], ["class", "icon-container", 4, "ngIf"], [1, "amount-button-container"], [1, "badge-cart", 3, "matBadge"], [1, "button-container"], ["mat-raised-button", "", 3, "disabled", "click"]],
      template: function LimitedProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LimitedProductComponent_div_11_Template, 5, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Amount in Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LimitedProductComponent_Template_button_click_20_listener($event) {
            return ctx.subtractOneProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LimitedProductComponent_Template_button_click_22_listener($event) {
            return ctx.addOneProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx.limit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.points);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx.amountInCart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.inCart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addBtnDisabled);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".mat-raised-button[_ngcontent-%COMP%] {\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    background-color: #F6D936;\r\n    color: black;\r\n    font-size: 1.5rem;\r\n    margin-left: 10%;\r\n  }\r\n  .mat-card[_ngcontent-%COMP%] {\r\n    background: #71A040;\r\n    border: solid black 1px;\r\n    margin-bottom: 2%;\r\n  }\r\n  .icon-button-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 6rem 4rem 10rem;\r\n    margin-top: 1rem;\r\n  }\r\n  .product-name[_ngcontent-%COMP%] {\r\n    background: #065777;\r\n    border: 1px black solid;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px black;\r\n    display: inline-block;\r\n    font-size: large;\r\n    margin-left: -2rem;\r\n    padding: .5rem;\r\n  }\r\n  .amount-button-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    margin-top: 2%;\r\n  }\r\n  .info-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    margin-top: 1.5rem;\r\n  }\r\n  .icon-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n  .button-container[_ngcontent-%COMP%] {\r\n      display: -webkit-box;\r\n      display: flex;\r\n  }\r\n  .limit-reached-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 1rem;\r\n  }\r\n  .limit-info-sub[_ngcontent-%COMP%] {\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    padding: 8px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saW1pdGVkLXByb2R1Y3QvbGltaXRlZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtFQUNBO01BQ0ksb0JBQWE7TUFBYixhQUFhO0VBQ2pCO0VBQ0E7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saW1pdGVkLXByb2R1Y3QvbGltaXRlZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgLjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkQ5MzY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzFBMDQwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcbiAgLmljb24tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2cmVtIDRyZW0gMTByZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuICAucHJvZHVjdC1uYW1lIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNjU3Nzc7XHJcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgfVxyXG4gIC5hbW91bnQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxuICAuaW5mby1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICB9XHJcbiAgLmljb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5saW1pdC1yZWFjaGVkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuICAubGltaXQtaW5mby1zdWIge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuXHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LimitedProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-limited-product',
          templateUrl: './limited-product.component.html',
          styleUrls: ['./limited-product.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/limited-type/limited-type.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/limited-type/limited-type.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LimitedTypeComponent */

  /***/
  function srcAppComponentsLimitedTypeLimitedTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LimitedTypeComponent", function () {
      return LimitedTypeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _type_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../type/type.component */
    "./src/app/components/type/type.component.ts");
    /* harmony import */


    var src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/type-tracker.service */
    "./src/app/services/type-tracker.service.ts");
    /* harmony import */


    var src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/point.service */
    "./src/app/services/point.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _type_limited_product_type_limited_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../type-limited-product/type-limited-product.component */
    "./src/app/components/type-limited-product/type-limited-product.component.ts");
    /* harmony import */


    var _sub_type_product_sub_type_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../sub-type-product/sub-type-product.component */
    "./src/app/components/sub-type-product/sub-type-product.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "at-limit": a0
      };
    };

    function LimitedTypeComponent_ng_container_0_mat_card_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Points Remaining");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r132.allPointsUsed));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r132.currentPoints);
      }
    }

    function LimitedTypeComponent_ng_container_0_mat_card_7_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "shopping_cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r133.atTypeLimit));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r133.typeLimit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r133.type.typeName + " Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r133.atTypeLimit));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r133.typeAmountInCart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r133.type.typeName + " in Cart");
      }
    }

    function LimitedTypeComponent_ng_container_0_mat_card_7_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r134.typeLimit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r134.type.typeName + " Received in Total");
      }
    }

    function LimitedTypeComponent_ng_container_0_mat_card_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LimitedTypeComponent_ng_container_0_mat_card_7_div_1_Template, 10, 4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LimitedTypeComponent_ng_container_0_mat_card_7_ng_container_2_Template, 21, 10, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LimitedTypeComponent_ng_container_0_mat_card_7_ng_container_3_Template, 11, 2, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r128.hasPoints);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r128.type.typeLimits.enableTypeTracking);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r128.type.typeLimits.enableTypeTracking);
      }
    }

    function LimitedTypeComponent_ng_container_0_mat_card_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r129.type.typeComment);
      }
    }

    function LimitedTypeComponent_ng_container_0_ng_container_9_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r136 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r136);
      }
    }

    function LimitedTypeComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LimitedTypeComponent_ng_container_0_ng_container_9_mat_card_1_Template, 2, 1, "mat-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r130.subTypeComments);
      }
    }

    function LimitedTypeComponent_ng_container_0_div_10_div_1_app_type_limited_product_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-type-limited-product", 20);
      }

      if (rf & 2) {
        var product_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cart", ctx_r139.cart)("family", ctx_r139.family)("product", product_r138)("type", ctx_r139.type)("typeLimit", ctx_r139.typeLimit);
      }
    }

    function LimitedTypeComponent_ng_container_0_div_10_div_1_app_sub_type_product_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sub-type-product", 21);
      }

      if (rf & 2) {
        var product_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cart", ctx_r140.cart)("family", ctx_r140.family)("product", product_r138)("type", ctx_r140.type);
      }
    }

    function LimitedTypeComponent_ng_container_0_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LimitedTypeComponent_ng_container_0_div_10_div_1_app_type_limited_product_1_Template, 1, 5, "app-type-limited-product", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LimitedTypeComponent_ng_container_0_div_10_div_1_app_sub_type_product_2_Template, 1, 4, "app-sub-type-product", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r138 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r138.typeId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r138.typeId);
      }
    }

    function LimitedTypeComponent_ng_container_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LimitedTypeComponent_ng_container_0_div_10_div_1_Template, 3, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r131.products);
      }
    }

    function LimitedTypeComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function LimitedTypeComponent_ng_container_0_Template_mat_expansion_panel_opened_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r143.panelOpenState = true;
        })("closed", function LimitedTypeComponent_ng_container_0_Template_mat_expansion_panel_closed_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r145.panelOpenState = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LimitedTypeComponent_ng_container_0_mat_card_7_Template, 4, 3, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LimitedTypeComponent_ng_container_0_mat_card_8_Template, 2, 1, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LimitedTypeComponent_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LimitedTypeComponent_ng_container_0_div_10_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-action-row", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LimitedTypeComponent_ng_container_0_Template_mat_action_row_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r146.closePanel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r127.panelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r127.type.typeName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r127.panelOpenState ? "close" : "open", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.panelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.type.typeComment && ctx_r127.panelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.subTypeComments.length && ctx_r127.panelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r127.panelOpenState);
      }
    }

    var LimitedTypeComponent =
    /*#__PURE__*/
    function (_type_type_component_) {
      _inherits(LimitedTypeComponent, _type_type_component_);

      function LimitedTypeComponent(pointService, typeTrackerService) {
        var _this12;

        _classCallCheck(this, LimitedTypeComponent);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(LimitedTypeComponent).call(this, pointService));
        _this12.pointService = pointService;
        _this12.typeTrackerService = typeTrackerService;
        return _this12;
      }

      _createClass(LimitedTypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.setProducts();
          this.sortProductsByName();
          this.setInfant();
          this.setSchool();
          this.setHasPoints();
          this.setTypeLimit();
          this.setSubTypeComments();

          if (this.type.typeLimits.enableTypeTracking) {
            this.typeTrackerService.addTypeTracker(this.type._id);
          }

          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.pointService.getCurrentPoints(), this.typeTrackerService.getTypeTrackers()]).subscribe(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                currentPoints = _ref6[0],
                typeTrackers = _ref6[1];

            _this13.currentPoints = currentPoints;
            _this13.allPointsUsed = _this13.currentPoints <= 0;

            if (_this13.type.typeLimits.enableTypeTracking) {
              _this13.typeTracker = typeTrackers.find(function (typeTracker) {
                return typeTracker.typeId === _this13.type._id;
              });
              _this13.typeAmountInCart = _this13.typeTracker.typeAmountInCart;
              _this13.atTypeLimit = _this13.typeTracker.atTypeMaxAmount;
            }
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "setTypeLimit",
        value: function setTypeLimit() {
          var _this14 = this;

          var familyValue;
          this.schoolType ? familyValue = this.family.schoolChildren : familyValue = this.family.familySize;
          this.type.typeLimits.typeSizeAmount.forEach(function (mapping) {
            if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
              _this14.typeLimit = mapping.maxAmount;
            }
          });
        }
      }]);

      return LimitedTypeComponent;
    }(_type_type_component__WEBPACK_IMPORTED_MODULE_1__["TypeComponent"]);

    LimitedTypeComponent.ɵfac = function LimitedTypeComponent_Factory(t) {
      return new (t || LimitedTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_2__["TypeTrackerService"]));
    };

    LimitedTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LimitedTypeComponent,
      selectors: [["app-limited-type"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "expanded", "opened", "closed"], ["class", "icon-top-container", 4, "ngIf"], ["class", "comment-container", 4, "ngIf"], ["class", "product-card-container", 4, "ngIf"], [3, "click"], [1, "icon-top-container"], ["class", "icon-sub-container", 3, "ngClass", 4, "ngIf"], [1, "icon-sub-container", 3, "ngClass"], [1, "label-container"], [1, "label"], [1, "icon-container"], [1, "icon-sub-container"], [1, "comment-container"], ["class", "comment-container", 4, "ngFor", "ngForOf"], [1, "product-card-container"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [3, "cart", "family", "product", "type", "typeLimit", 4, "ngIf"], [3, "cart", "family", "product", "type", 4, "ngIf"], [3, "cart", "family", "product", "type", "typeLimit"], [3, "cart", "family", "product", "type"]],
      template: function LimitedTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LimitedTypeComponent_ng_container_0_Template, 12, 7, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.schoolType || ctx.schoolIncluded) && (!ctx.infantType || ctx.infantsIncluded));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelActionRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _type_limited_product_type_limited_product_component__WEBPACK_IMPORTED_MODULE_9__["TypeLimitedProductComponent"], _sub_type_product_sub_type_product_component__WEBPACK_IMPORTED_MODULE_10__["SubTypeProductComponent"]],
      styles: [".mat-expansion-panel[_ngcontent-%COMP%] {\r\n    background:  #603A17;\r\n    margin: 2%;\r\n    border: solid black 1px;\r\n} \r\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n} \r\n.mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n} \r\n.icon-top-container[_ngcontent-%COMP%] {\r\n    background-color:  #D47B28;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    margin-bottom: 2rem;\r\n} \r\n.icon-sub-container[_ngcontent-%COMP%] {\r\n    background-color: #143e0c;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    padding: 16px;\r\n} \r\n.comment-container[_ngcontent-%COMP%] {\r\n    background-color: #9a0707;\r\n    margin-bottom: 2rem;\r\n} \r\n.at-limit[_ngcontent-%COMP%] {\r\n    background-color: #A71E2A;\r\n} \r\n.icon-container[_ngcontent-%COMP%] {\r\n    background: dodgerblue;\r\n    border: 1px black solid;\r\n    border-radius: 100px;\r\n    color: white;\r\n    font-size: xx-large;\r\n    margin-left: -8px;\r\n    margin-top: -55px;\r\n    padding: 12px;\r\n    position: fixed;\r\n} \r\n.label-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    font-size: large;\r\n} \r\n.label[_ngcontent-%COMP%] {\r\n    margin-top: .25rem;\r\n} \r\n.product-card-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n} \r\n.product-card[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n    margin-bottom: 2rem;\r\n  } \r\n.mat-action-row[_ngcontent-%COMP%] {\r\n    border-top: 0;\r\n    color: rgba(255,255,255,.7);\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saW1pdGVkLXR5cGUvbGltaXRlZC10eXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBQ0Y7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpbWl0ZWQtdHlwZS9saW1pdGVkLXR5cGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQ6ICAjNjAzQTE3O1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG59IFxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuLmljb24tdG9wLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0Q0N0IyODtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmljb24tc3ViLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQzZTBjO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbi5jb21tZW50LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWEwNzA3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4uYXQtbGltaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E3MUUyQTtcclxufVxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTVweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmxhYmVsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XHJcbn1cclxuLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuLm1hdC1hY3Rpb24tcm93IHtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LimitedTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-limited-type',
          templateUrl: './limited-type.component.html',
          styleUrls: ['./limited-type.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]
        }, {
          type: src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_2__["TypeTrackerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_family_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/family.service */
    "./src/app/services/family.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _intro_modal_intro_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../intro-modal/intro-modal.component */
    "./src/app/components/intro-modal/intro-modal.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_13_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.authService.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_14_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.toFamily();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Let's Begin!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, dialog, familyService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.dialog = dialog;
        this.familyService = familyService;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.familyService.resetFamily();
        }
      }, {
        key: "openIntroModal",
        value: function openIntroModal() {
          this.dialog.open(_intro_modal_intro_modal_component__WEBPACK_IMPORTED_MODULE_5__["IntroModalComponent"], {
            backdropClass: 'darker-back-drop',
            width: '35rem'
          });
        }
      }, {
        key: "toFamily",
        value: function toFamily() {
          this.router.navigate(["/family"]);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_family_service__WEBPACK_IMPORTED_MODULE_3__["FamilyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 18,
      vars: 2,
      consts: [["id", "top-container"], ["id", "card-container"], ["id", "logo", "src", "../../../assets/images/bsfp-logo-login.png", "alt", "bsfp-logo-login"], ["id", "message-button-container", 1, "center"], ["mat-fab", "", 3, "click"], ["id", "message-button-middle"], [1, "center"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["id", "cookie-message", 1, "center"], ["mat-raised-button", "", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener($event) {
            return ctx.openIntroModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First visit?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Click here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Welcome Neighbor!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_button_13_Template, 2, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_button_14_Template, 2, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "[Cookie Message]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: [".mat-fab[_ngcontent-%COMP%] {\r\n    background-color: #A71E2A;\r\n    color: white;\r\n    font-weight: bold;\r\n    position: fixed;\r\n    margin-top: -12rem;\r\n    margin-left: 12rem;\r\n    z-index: 2;\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n    display: block;\r\n    height: 7rem;\r\n    width: 7rem;\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n#top-container[_ngcontent-%COMP%] {\r\n    margin-top: 7%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n    border-radius: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    background-color:  #065777;\r\n    border: solid black 1px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    width: 100%;\r\n}\r\n#card-container[_ngcontent-%COMP%] {\r\n    background: #603A17;\r\n    background-image: url('wavecut.png');    \r\n    border: solid black 1px;\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto;\r\n    justify-items: center; \r\n}\r\n#message-button-container[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    width: 20rem;\r\n}\r\n#message-button-middle[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n#message-button-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n    background-color:  #46a8d0;\r\n    background-image: url('wavecut.png');  \r\n    border: solid black 1px;\r\n    border-top: 0;\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0;\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    row-gap: 1rem;\r\n    white-space: nowrap;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: #F6D936;\r\n    border: solid black .5px;\r\n    color: black;\r\n    margin: 0;\r\n    width: auto;\r\n}\r\n#cookie-message[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n}\r\n#cookie-message[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n    background-color: rgba(177, 177, 177, 0.6);\r\n    color: rgb(65, 63, 63);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztJQUNkLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsb0NBQTJEO0lBQzNELHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsb0NBQTJEO0lBQzNELHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZhYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTcxRTJBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMTJyZW07XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICB3aWR0aDogN3JlbTtcclxufVxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI3RvcC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMDY1Nzc3O1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jY2FyZC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzYwM0ExNztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2F2ZWN1dC5wbmdcIik7ICAgIFxyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IFxyXG59XHJcbiNtZXNzYWdlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG59XHJcbiNtZXNzYWdlLWJ1dHRvbi1taWRkbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI21lc3NhZ2UtYnV0dG9uLWNvbnRhaW5lciAubWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0NmE4ZDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3dhdmVjdXQucG5nXCIpOyAgXHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgcm93LWdhcDogMXJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkQ5MzY7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIC41cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG4jY29va2llLW1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuI2Nvb2tpZS1tZXNzYWdlIC5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTc3LCAxNzcsIDAuNik7XHJcbiAgICBjb2xvcjogcmdiKDY1LCA2MywgNjMpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_services_family_service__WEBPACK_IMPORTED_MODULE_3__["FamilyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../questions-modal/questions-modal.component */
    "./src/app/components/questions-modal/questions-modal.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_6_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r108.onLogOutClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(activatedRoute, authService, dialog) {
        _classCallCheck(this, NavbarComponent);

        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.dialog = dialog;
        this.routesButtonMap = new Map([['family', 'Form Help'], ['shop', 'Shop Help'], ['order', 'Order Help']]);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.activatedRoute.url.subscribe(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 1),
                currentPath = _ref8[0];

            return _this15.currentPath = currentPath.path;
          });
          this.setButtonContent();
        }
      }, {
        key: "onLogOutClick",
        value: function onLogOutClick() {
          this.authService.logOutClicked();
          this.authService.logout();
        }
      }, {
        key: "openQuestionsModal",
        value: function openQuestionsModal() {
          this.dialog.open(_questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsModalComponent"], {
            backdropClass: 'darker-back-drop',
            data: this.currentPath,
            width: '35rem'
          });
        }
      }, {
        key: "setButtonContent",
        value: function setButtonContent() {
          var _this16 = this;

          this.routesButtonMap.forEach(function (buttonContent, route) {
            if (route === _this16.currentPath) {
              _this16.buttonContent = buttonContent;
            }
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 12,
      vars: 2,
      consts: [["id", "header"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["id", "footer"], ["href", "https://bspc.org/foodpantry/", "target", "_blank"], ["href", "https://bspc.org/privacy-policy/", "target", "_blank"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Broad Street Food Pantry Online");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener($event) {
            return ctx.openQuestionsModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_button_6_Template, 2, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pantry Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["#header[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 2;\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(113,58,23,1)), to(#D47B28)) ;\r\n  background: linear-gradient(to right, rgba(113,58,23,1), #D47B28) ;\r\n  border-bottom: solid black 2px;\r\n  height: auto;\r\n  display: grid;\r\n  grid-template-columns: 10% 70% 10% 10%;\r\n  min-width: 1020px;\r\n}\r\na[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  color: rgb(65, 63, 63);\r\n  font-size: medium;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  border: solid black .1px;\r\n  border-radius: 2px;\r\n  margin: .2%;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n  background-color: #F6D936;\r\n  border: solid black .5px;\r\n  border-radius: 5px;\r\n  color: black;\r\n  margin: 5%;\r\n}\r\n#footer[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: space-around;\r\n  position: fixed;\r\n  bottom: 0;\r\n  z-index: 2;\r\n  background-color: rgba(177, 177, 177, 0.8);\r\n  border-top: solid  rgba(177, 177, 177, 0.9) 2px;\r\n  height: 5vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFVBQVU7RUFDVixnR0FBa0U7RUFBbEUsa0VBQWtFO0VBQ2xFLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBDQUEwQztFQUMxQywrQ0FBK0M7RUFDL0MsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDExMyw1OCwyMywxKSwgI0Q0N0IyOCkgO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDJweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA3MCUgMTAlIDEwJTtcclxuICBtaW4td2lkdGg6IDEwMjBweDtcclxufVxyXG5hLCBwIHtcclxuICBjb2xvcjogcmdiKDY1LCA2MywgNjMpO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcbmltZyB7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAuMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBtYXJnaW46IC4yJTtcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkQ5MzY7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAuNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luOiA1JTtcclxufVxyXG4jZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjgpO1xyXG4gIGJvcmRlci10b3A6IHNvbGlkICByZ2JhKDE3NywgMTc3LCAxNzcsIDAuOSkgMnB4O1xyXG4gIGhlaWdodDogNXZoO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/questions-modal/questions-modal.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/questions-modal/questions-modal.component.ts ***!
    \*************************************************************************/

  /*! exports provided: QuestionsModalComponent */

  /***/
  function srcAppComponentsQuestionsModalQuestionsModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionsModalComponent", function () {
      return QuestionsModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function QuestionsModalComponent_ng_container_2_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_2_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "house");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_2_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "directions_car");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_2_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Form Help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "[Contact Help Goes Here]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "[Household Help Goes Here]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-step", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "[Pick Up Help Goes Here]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuestionsModalComponent_ng_container_2_ng_template_13_Template, 2, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuestionsModalComponent_ng_container_2_ng_template_14_Template, 2, 0, "ng-template", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuestionsModalComponent_ng_container_2_ng_template_15_Template, 2, 0, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, QuestionsModalComponent_ng_container_2_ng_template_16_Template, 2, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_3_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_3_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_3_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "storefront");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_3_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shop Help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "[Choice Points Help Goes Here]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "[Limits Help Goes Here]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-step", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "[Shop Options Help Goes Here]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuestionsModalComponent_ng_container_3_ng_template_13_Template, 2, 0, "ng-template", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuestionsModalComponent_ng_container_3_ng_template_14_Template, 2, 0, "ng-template", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuestionsModalComponent_ng_container_3_ng_template_15_Template, 2, 0, "ng-template", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, QuestionsModalComponent_ng_container_3_ng_template_16_Template, 2, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_4_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_4_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shopping_cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_4_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_4_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionsModalComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "[Update Help Goes Here]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "[Cart Help Goes Here]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-step", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "[Submit Help Goes Here]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuestionsModalComponent_ng_container_4_ng_template_13_Template, 2, 0, "ng-template", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuestionsModalComponent_ng_container_4_ng_template_14_Template, 2, 0, "ng-template", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuestionsModalComponent_ng_container_4_ng_template_15_Template, 2, 0, "ng-template", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, QuestionsModalComponent_ng_container_4_ng_template_16_Template, 2, 0, "ng-template", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var QuestionsModalComponent =
    /*#__PURE__*/
    function () {
      function QuestionsModalComponent(dialogRef, currentPath) {
        _classCallCheck(this, QuestionsModalComponent);

        this.dialogRef = dialogRef;
        this.currentPath = currentPath;
        this.routesButtonMap = new Map([['family', 'Return to Form'], ['shop', 'Return to Shopping'], ['order', 'Return to Order Overview']]);
      }

      _createClass(QuestionsModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setButtonContent();
        }
      }, {
        key: "onCloseClick",
        value: function onCloseClick() {
          this.dialogRef.close();
        }
      }, {
        key: "setButtonContent",
        value: function setButtonContent() {
          var _this17 = this;

          this.routesButtonMap.forEach(function (buttonContent, route) {
            if (route === _this17.currentPath) {
              _this17.buttonContent = buttonContent;
            }
          });
        }
      }]);

      return QuestionsModalComponent;
    }();

    QuestionsModalComponent.ɵfac = function QuestionsModalComponent_Factory(t) {
      return new (t || QuestionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    QuestionsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestionsModalComponent,
      selectors: [["app-questions-modal"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
        useValue: {
          displayDefaultIndicatorType: false
        }
      }])],
      decls: 8,
      vars: 5,
      consts: [[1, "questions"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["id", "return", "mat-raised-button", "", "cdkFocusInitial", "", 3, "click"], ["labelPosition", "bottom"], ["label", "Contact", "state", "contact", "completed", "false"], ["label", "Household", "state", "household", "completed", "false"], ["label", "Pick Up", "state", "pick-up", "completed", "false"], ["matStepperIcon", "contact"], ["matStepperIcon", "household"], ["matStepperIcon", "pick-up"], ["matStepperIcon", "edit"], ["label", "Choice Points", "state", "choice-points", "completed", "false"], ["label", "Limits", "state", "limits", "completed", "false"], ["label", "Shop Options", "state", "shop-options", "completed", "false"], ["matStepperIcon", "choice-points"], ["matStepperIcon", "limits"], ["matStepperIcon", "shop-options"], ["label", "Updates", "state", "updates", "completed", "false"], ["label", "Your Cart", "state", "cart", "completed", "false"], ["label", "Submitting", "state", "submit", "completed", "false"], ["matStepperIcon", "updates"], ["matStepperIcon", "cart"], ["matStepperIcon", "submit"]],
      template: function QuestionsModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuestionsModalComponent_ng_container_2_Template, 17, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuestionsModalComponent_ng_container_3_Template, 17, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuestionsModalComponent_ng_container_4_Template, 17, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsModalComponent_Template_button_click_6_listener($event) {
            return ctx.onCloseClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.currentPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "family");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonContent);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperIcon"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      styles: [".questions[_ngcontent-%COMP%] {\r\n    background-color: #46a8d0;\r\n    padding: 1rem;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    font-size: large;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 2%;\r\n}\r\n.mat-stepper-horizontal[_ngcontent-%COMP%] {\r\n    background-color: #D47B28;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n    background-color: #71A040;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    color: black;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    background-color: #F6D936;\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    color: black;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n#return[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbnMtbW9kYWwvcXVlc3Rpb25zLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb25zLW1vZGFsL3F1ZXN0aW9ucy1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZhOGQwO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENDdCMjg7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxQTA0MDtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEOTM2O1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuI3JldHVybiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-questions-modal',
          templateUrl: './questions-modal.component.html',
          styleUrls: ['./questions-modal.component.css'],
          providers: [{
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
            useValue: {
              displayDefaultIndicatorType: false
            }
          }]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shop/shop.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/shop/shop.component.ts ***!
    \***************************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppComponentsShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/family.service */
    "./src/app/services/family.service.ts");
    /* harmony import */


    var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/shop.service */
    "./src/app/services/shop.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _type_type_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../type/type.component */
    "./src/app/components/type/type.component.ts");
    /* harmony import */


    var _limited_type_limited_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../limited-type/limited-type.component */
    "./src/app/components/limited-type/limited-type.component.ts");

    function ShopComponent_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function ShopComponent_ng_container_2_ng_container_6_app_type_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-type", 9);
      }

      if (rf & 2) {
        var type_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allSubTypes", ctx_r75.allSubTypes)("cart", ctx_r75.cart)("family", ctx_r75.family)("type", type_r74);
      }
    }

    function ShopComponent_ng_container_2_ng_container_6_app_limited_type_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-limited-type", 9);
      }

      if (rf & 2) {
        var type_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allSubTypes", ctx_r76.allSubTypes)("cart", ctx_r76.cart)("family", ctx_r76.family)("type", type_r74);
      }
    }

    function ShopComponent_ng_container_2_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopComponent_ng_container_2_ng_container_6_app_type_1_Template, 1, 4, "app-type", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopComponent_ng_container_2_ng_container_6_app_limited_type_2_Template, 1, 4, "app-limited-type", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var type_r74 = ctx.$implicit;

        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r73.nonLimitedTypes.includes(type_r74));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r73.limitedTypes.includes(type_r74));
      }
    }

    function ShopComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to our Shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cdk-virtual-scroll-viewport", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShopComponent_ng_container_2_ng_container_6_Template, 3, 2, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aside", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ready to Review?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_container_2_Template_button_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r79.onReviewOrderClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Review Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r72.types);
      }
    }

    var ShopComponent =
    /*#__PURE__*/
    function () {
      function ShopComponent(authService, cartService, familyService, shopService, router) {
        _classCallCheck(this, ShopComponent);

        this.authService = authService;
        this.cartService = cartService;
        this.familyService = familyService;
        this.shopService = shopService;
        this.router = router;
        this.allSubTypes = [];
        this.loading = true;
        this.limitedTypes = [];
        this.nonLimitedTypes = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.types = [];
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.authService.getLogOutClicked(), this.cartService.getCart(), this.familyService.getFamily(), this.shopService.getShop()]).subscribe(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 4),
                logOutClicked = _ref10[0],
                cart = _ref10[1],
                family = _ref10[2],
                types = _ref10[3];

            _this18.logOutClicked = logOutClicked;
            _this18.cart = cart;
            _this18.family = family;
            _this18.types = types;

            _this18.setTypes();

            _this18.sortTypesByName();

            _this18.loading = false;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onReviewOrderClick",
        value: function onReviewOrderClick() {
          this.router.navigate(["/order"]);
        }
      }, {
        key: "setTypes",
        value: function setTypes() {
          var _this19 = this;

          this.types.forEach(function (type) {
            if (!type.superTypeId && type.typeLimits) {
              _this19.limitedTypes.push(type);
            }

            if (!type.superTypeId && !type.typeLimits) {
              _this19.nonLimitedTypes.push(type);
            }

            if (type.superTypeId) {
              _this19.allSubTypes.push(type);
            }
          });
        }
      }, {
        key: "sortTypesByName",
        value: function sortTypesByName() {
          this.types.sort(function (before, after) {
            return before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1;
          });
        }
      }, {
        key: "unloadNotification",
        value: function unloadNotification($event) {
          if (!this.logOutClicked) {
            $event.returnValue = true;
          }
        }
      }]);

      return ShopComponent;
    }();

    ShopComponent.ɵfac = function ShopComponent_Factory(t) {
      return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopComponent,
      selectors: [["app-shop"]],
      hostBindings: function ShopComponent_HostBindings(rf, ctx, elIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function ShopComponent_beforeunload_HostBindingHandler($event) {
            return ctx.unloadNotification($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"], [1, "top-grid"], ["id", "shop"], ["itemSize", ""], [4, "ngFor", "ngForOf"], [1, "aside-container"], ["id", "review"], ["mat-raised-button", "", 3, "click"], [3, "allSubTypes", "cart", "family", "type", 4, "ngIf"], [3, "allSubTypes", "cart", "family", "type"]],
      template: function ShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopComponent_ng_container_2_Template, 13, 1, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkFixedSizeVirtualScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _type_type_component__WEBPACK_IMPORTED_MODULE_13__["TypeComponent"], _limited_type_limited_type_component__WEBPACK_IMPORTED_MODULE_14__["LimitedTypeComponent"]],
      styles: [".top-grid[_ngcontent-%COMP%] {\r\n    margin: 5%;\r\n    margin-bottom: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    background: #065777;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    border-bottom: solid black .5px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    color: white;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n    border: solid black 1px;\r\n    border-radius: 10px;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-top: none;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    background-color: #F6D936;\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    color: black;\r\n}\r\n.aside-container[_ngcontent-%COMP%] {\r\n    background: #46a8d0;\r\n    background-image: url(\"https://www.transparenttextures.com/patterns/wavecut.png\");\r\n    border: solid black 1px;\r\n    color: black;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 10%;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    width: 20%;\r\n    border-radius: 10px;\r\n    height: 100%;\r\n    min-width: 200px;\r\n}\r\n#shop[_ngcontent-%COMP%] {\r\n    background: #46a8d0;\r\n    background-image: url(\"https://www.transparenttextures.com/patterns/wavecut.png\");\r\n    border: solid black 1px;\r\n    border-radius: 10px;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 80%;\r\n    min-width: 700px;\r\n}\r\n.cdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 70vh;\r\n    width: 100%;\r\n}\r\n#review[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin: 5%;\r\n}\r\n.mat-spinner[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: visible;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlGQUFpRjtJQUNqRix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLG1CQUFhO1lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUZBQWlGO0lBQ2pGLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQWE7WUFBYixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1ncmlkIHtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA2NTc3NztcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIC41cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkQ5MzY7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIC41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmFzaWRlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDZhOGQwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cudHJhbnNwYXJlbnR0ZXh0dXJlcy5jb20vcGF0dGVybnMvd2F2ZWN1dC5wbmdcIik7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMCAwIDEwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG4jc2hvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDZhOGQwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cudHJhbnNwYXJlbnR0ZXh0dXJlcy5jb20vcGF0dGVybnMvd2F2ZWN1dC5wbmdcIik7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmbGV4OiAwIDAgODAlO1xyXG4gICAgbWluLXdpZHRoOiA3MDBweDtcclxufVxyXG4uY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jcmV2aWV3IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNSU7XHJcbn1cclxuLm1hdC1zcGlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shop',
          templateUrl: './shop.component.html',
          styleUrls: ['./shop.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }, {
          type: _services_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]
        }, {
          type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        unloadNotification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/sub-type-product/sub-type-product.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/sub-type-product/sub-type-product.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SubTypeProductComponent */

  /***/
  function srcAppComponentsSubTypeProductSubTypeProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubTypeProductComponent", function () {
      return SubTypeProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _type_limited_product_type_limited_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../type-limited-product/type-limited-product.component */
    "./src/app/components/type-limited-product/type-limited-product.component.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/point.service */
    "./src/app/services/point.service.ts");
    /* harmony import */


    var src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/type-tracker.service */
    "./src/app/services/type-tracker.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SubTypeProductComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Limit Reached");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SubTypeProductComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "shopping_cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "In Cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r161.typeLimit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r161.typeAmountInCart);
      }
    }

    function SubTypeProductComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r162.limit);
      }
    }

    function SubTypeProductComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Points");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r163.points);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "at-type-limit-border": a0,
        "border": a1
      };
    };

    var SubTypeProductComponent =
    /*#__PURE__*/
    function (_type_limited_product) {
      _inherits(SubTypeProductComponent, _type_limited_product);

      function SubTypeProductComponent(cartService, pointService, typeTrackerService) {
        var _this20;

        _classCallCheck(this, SubTypeProductComponent);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(SubTypeProductComponent).call(this, cartService, pointService, typeTrackerService));
        _this20.cartService = cartService;
        _this20.pointService = pointService;
        _this20.typeTrackerService = typeTrackerService;
        _this20.panelOpenState = false;
        return _this20;
      }

      _createClass(SubTypeProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.typeId = this.product.typeId;
          this.typeName = this.product.typeName;
          this.typeLimits = this.product.typeLimits;
          this.setLimit();
          this.setPoints();
          this.setTypeLimit();
          this.inCart = this.isProductInCart();
          this.typeTrackerService.addTypeTracker(this.typeId);
          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.pointService.getCurrentPoints(), this.typeTrackerService.getTypeTrackers()]).subscribe(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
                currentPoints = _ref12[0],
                typeTrackers = _ref12[1];

            _this21.currentPoints = currentPoints;
            _this21.amountInCart = _this21.getAmountInCart();
            _this21.typeTracker = typeTrackers.find(function (typeTracker) {
              return typeTracker.typeId === _this21.typeId;
            });
            _this21.atTypeLimit = _this21.typeTracker.atTypeMaxAmount;
            _this21.typeAmountInCart = _this21.typeTracker.typeAmountInCart;

            _this21.updateAddBtn();
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "setTypeLimit",
        value: function setTypeLimit() {
          var _this22 = this;

          var familyValue = this.family.familySize;
          this.typeLimits.typeSizeAmount.forEach(function (mapping) {
            if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
              _this22.typeLimit = mapping.maxAmount;
            }
          });
        }
      }]);

      return SubTypeProductComponent;
    }(_type_limited_product_type_limited_product_component__WEBPACK_IMPORTED_MODULE_1__["TypeLimitedProductComponent"]);

    SubTypeProductComponent.ɵfac = function SubTypeProductComponent_Factory(t) {
      return new (t || SubTypeProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_4__["TypeTrackerService"]));
    };

    SubTypeProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubTypeProductComponent,
      selectors: [["app-sub-type-product"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 25,
      vars: 14,
      consts: [[3, "ngClass", "expanded", "clickOutside", "opened", "closed"], ["class", "at-limit-message-container", 4, "ngIf"], ["class", "info-container", 4, "ngIf"], [1, "product-name"], [1, "icon-button-container"], [1, "info-container"], ["class", "icon-container", 4, "ngIf"], [1, "amount-button-container"], [1, "icon-container"], [1, "badge-cart", 3, "matBadge"], [1, "button-container"], ["mat-raised-button", "", 3, "disabled", "click"], [1, "at-limit-message-container"], [1, "icon-badge", 3, "matBadge"]],
      template: function SubTypeProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function SubTypeProductComponent_Template_mat_expansion_panel_clickOutside_0_listener($event) {
            return ctx.panelOpenState = false;
          })("opened", function SubTypeProductComponent_Template_mat_expansion_panel_opened_0_listener($event) {
            return ctx.panelOpenState = true;
          })("closed", function SubTypeProductComponent_Template_mat_expansion_panel_closed_0_listener($event) {
            return ctx.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubTypeProductComponent_div_3_Template, 3, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubTypeProductComponent_div_4_Template, 11, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SubTypeProductComponent_div_11_Template, 5, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SubTypeProductComponent_div_12_Template, 5, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amount in Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubTypeProductComponent_Template_button_click_21_listener($event) {
            return ctx.subtractOneTypeLimitProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubTypeProductComponent_Template_button_click_23_listener($event) {
            return ctx.addOneTypeLimitProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.atTypeLimit, !ctx.atTypeLimit))("expanded", ctx.panelOpenState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.typeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.atTypeLimit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.panelOpenState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.limit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.points);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx.amountInCart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.inCart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addBtnDisabled);
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadge"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
      styles: [".mat-raised-button[_ngcontent-%COMP%] {\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    background-color: #F6D936;\r\n    color: black;\r\n    font-size: 1.5rem;\r\n    margin-left: 10%;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n    background: #71A040;\r\n    border: solid black 1px;\r\n    margin-bottom: 2%;\r\n}\r\n.icon-button-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 6rem 4rem 10rem;\r\n    margin-top: 1rem;\r\n}\r\n.product-name[_ngcontent-%COMP%] {\r\n    background: #065777;\r\n    border: 1px black solid;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px black;\r\n    display: inline-block;\r\n    font-size: large;\r\n    margin-left: -2rem;\r\n    padding: .5rem;\r\n}\r\n.amount-button-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    margin-top: 2%;\r\n}\r\n.at-type-limit-border[_ngcontent-%COMP%]{\r\n    border: 3px solid #A71E2A;\r\n}\r\n.border[_ngcontent-%COMP%] {\r\n    border: 1px black solid ;\r\n}\r\n.at-limit-message-container[_ngcontent-%COMP%]{\r\n    background: #A71E2A;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.info-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    margin-top: 1.5rem;\r\n}\r\n.icon-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n.button-container[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n    background: #143e0c;\r\n    border-radius: 5px;\r\n    position: fixed;\r\n    margin-left: 14rem;\r\n    margin-top: -1rem;\r\n    width: 9rem;\r\n    z-index: 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWItdHlwZS1wcm9kdWN0L3N1Yi10eXBlLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1Yi10eXBlLXByb2R1Y3Qvc3ViLXR5cGUtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgLjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkQ5MzY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MUEwNDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5pY29uLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNnJlbSA0cmVtIDEwcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4ucHJvZHVjdC1uYW1lIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNjU3Nzc7XHJcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuLmFtb3VudC1idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmF0LXR5cGUtbGltaXQtYm9yZGVye1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0E3MUUyQTtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkIDtcclxufVxyXG4uYXQtbGltaXQtbWVzc2FnZS1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTcxRTJBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmluZm8tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuLmljb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZDogIzE0M2UwYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xyXG4gICAgd2lkdGg6IDlyZW07XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubTypeProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sub-type-product',
          templateUrl: './sub-type-product.component.html',
          styleUrls: ['./sub-type-product.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]
        }, {
          type: src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_4__["TypeTrackerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/submit-modal/submit-modal.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/submit-modal/submit-modal.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SubmitModalComponent */

  /***/
  function srcAppComponentsSubmitModalSubmitModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitModalComponent", function () {
      return SubmitModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SubmitModalComponent_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Your order will be ready for pick on " + ctx_r46.data.pickUpDate + " at the Broad Street Food Pantry.", " ");
      }
    }

    function SubmitModalComponent_mat_card_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Your order will be delivered on " + ctx_r47.data.pickUpDate + " by CELC.", " ");
      }
    }

    var SubmitModalComponent =
    /*#__PURE__*/
    function () {
      function SubmitModalComponent(authService, dialogRef, data, router) {
        _classCallCheck(this, SubmitModalComponent);

        this.authService = authService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
      }

      _createClass(SubmitModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubmitModalComponent;
    }();

    SubmitModalComponent.ɵfac = function SubmitModalComponent_Factory(t) {
      return new (t || SubmitModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SubmitModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubmitModalComponent,
      selectors: [["app-submit-modal"]],
      decls: 9,
      vars: 2,
      consts: [["id", "top-container"], ["id", "success"], ["class", "location-message", 4, "ngIf"], ["id", "buttons"], ["mat-raised-button", "", 3, "click"], [1, "location-message"]],
      template: function SubmitModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubmitModalComponent_mat_card_4_Template, 2, 1, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubmitModalComponent_mat_card_5_Template, 2, 1, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitModalComponent_Template_button_click_7_listener($event) {
            return ctx.authService.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.family.referral);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.family.referral);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      styles: ["#top-container[_ngcontent-%COMP%] {\r\n    background-color: #46a8d0;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    font-size: large;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 2%;\r\n}\r\n#buttons[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n#success[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    margin-bottom: 2%;\r\n}\r\n.location-message[_ngcontent-%COMP%] {\r\n    background: #D47B28;\r\n    border: 1px black solid;\r\n    border-radius: 5px;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    background-color: #F6D936;\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    color: black;\r\n    margin-top: 3%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJtaXQtbW9kYWwvc3VibWl0LW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VibWl0LW1vZGFsL3N1Ym1pdC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvcC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2YThkMDtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbiNidXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jc3VjY2VzcyB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4ubG9jYXRpb24tbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDQ3QjI4O1xyXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkQ5MzY7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIC41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-submit-modal',
          templateUrl: './submit-modal.component.html',
          styleUrls: ['./submit-modal.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/type-limited-product/type-limited-product.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/type-limited-product/type-limited-product.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: TypeLimitedProductComponent */

  /***/
  function srcAppComponentsTypeLimitedProductTypeLimitedProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeLimitedProductComponent", function () {
      return TypeLimitedProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _limited_product_limited_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../limited-product/limited-product.component */
    "./src/app/components/limited-product/limited-product.component.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/point.service */
    "./src/app/services/point.service.ts");
    /* harmony import */


    var src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/type-tracker.service */
    "./src/app/services/type-tracker.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function TypeLimitedProductComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Limit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r148.limit);
      }
    }

    function TypeLimitedProductComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Points");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r149.points);
      }
    }

    function TypeLimitedProductComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Amount in Cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r150.amountInCart);
      }
    }

    function TypeLimitedProductComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Item Requested");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", ctx_r151.inCart ? "Yes" : "No");
      }
    }

    function TypeLimitedProductComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeLimitedProductComponent_span_12_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r155);

          var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r154.subtractOneTypeLimitProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeLimitedProductComponent_span_12_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r155);

          var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r156.addOneTypeLimitProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r152.inCart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r152.addBtnDisabled);
      }
    }

    function TypeLimitedProductComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeLimitedProductComponent_span_13_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158);

          var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r157.subtractOneProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeLimitedProductComponent_span_13_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158);

          var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r159.addOneProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r153.inCart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r153.inCart);
      }
    }

    var TypeLimitedProductComponent =
    /*#__PURE__*/
    function (_limited_product_limi) {
      _inherits(TypeLimitedProductComponent, _limited_product_limi);

      function TypeLimitedProductComponent(cartService, pointService, typeTrackerService) {
        var _this23;

        _classCallCheck(this, TypeLimitedProductComponent);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(TypeLimitedProductComponent).call(this, cartService, pointService));
        _this23.cartService = cartService;
        _this23.pointService = pointService;
        _this23.typeTrackerService = typeTrackerService;
        return _this23;
      }

      _createClass(TypeLimitedProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.setLimit();
          this.setPoints();
          this.inCart = this.isProductInCart();
          this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.pointService.getCurrentPoints(), this.typeTrackerService.getTypeTrackers()]).subscribe(function (_ref13) {
            var _ref14 = _slicedToArray(_ref13, 2),
                currentPoints = _ref14[0],
                typeTrackers = _ref14[1];

            _this24.currentPoints = currentPoints;
            _this24.amountInCart = _this24.getAmountInCart();

            if (_this24.type.typeLimits.enableTypeTracking) {
              _this24.typeTracker = typeTrackers.find(function (typeTracker) {
                return typeTracker.typeId === _this24.type._id;
              });
              _this24.atTypeLimit = _this24.typeTracker.atTypeMaxAmount;

              _this24.updateAddBtn();
            }
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "addOneTypeLimitProduct",
        value: function addOneTypeLimitProduct() {
          this.addOneProduct();
          this.typeTracker.typeAmountInCart++;
          this.typeTracker.atTypeMaxAmount = this.isAtTypeLimit();
          this.typeTrackerService.updateTypeTrackers(this.typeTracker);
        }
      }, {
        key: "isAtTypeLimit",
        value: function isAtTypeLimit() {
          return this.typeTracker.typeAmountInCart === this.typeLimit;
        }
      }, {
        key: "subtractOneTypeLimitProduct",
        value: function subtractOneTypeLimitProduct() {
          if (this.typeTracker.typeAmountInCart > 0) {
            this.subtractOneProduct();
            this.typeTracker.typeAmountInCart--;
            this.typeTracker.atTypeMaxAmount = this.isAtTypeLimit();
            this.typeTrackerService.updateTypeTrackers(this.typeTracker);
          }
        }
      }, {
        key: "updateAddBtn",
        value: function updateAddBtn() {
          this.addBtnDisabled = this.atTypeLimit || !this.isProductUnderLimit() || !this.hasEnoughPoints();
        }
      }]);

      return TypeLimitedProductComponent;
    }(_limited_product_limited_product_component__WEBPACK_IMPORTED_MODULE_1__["LimitedProductComponent"]);

    TypeLimitedProductComponent.ɵfac = function TypeLimitedProductComponent_Factory(t) {
      return new (t || TypeLimitedProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_4__["TypeTrackerService"]));
    };

    TypeLimitedProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypeLimitedProductComponent,
      selectors: [["app-type-limited-product"]],
      inputs: {
        typeLimit: "typeLimit"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 7,
      consts: [[1, "product-name"], [1, "icon-button-container"], [1, "info-container"], ["class", "icon-container", 4, "ngIf"], [1, "amount-button-container"], ["class", "button-container", 4, "ngIf"], [1, "icon-container"], [1, "icon-badge", 3, "matBadge"], [1, "badge-cart", 3, "matBadge"], [1, "button-container"], ["mat-raised-button", "", 1, "plus-minus-font", 3, "disabled", "click"], ["mat-raised-button", "", 3, "disabled", "click"]],
      template: function TypeLimitedProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TypeLimitedProductComponent_div_6_Template, 5, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TypeLimitedProductComponent_div_7_Template, 5, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TypeLimitedProductComponent_div_10_Template, 5, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TypeLimitedProductComponent_div_11_Template, 5, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TypeLimitedProductComponent_span_12_Template, 5, 2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TypeLimitedProductComponent_span_13_Template, 5, 2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.limit && ctx.type.typeLimits.enableTypeTracking);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.points);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type.typeLimits.enableTypeTracking);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.type.typeLimits.enableTypeTracking);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type.typeLimits.enableTypeTracking);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.type.typeLimits.enableTypeTracking);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadge"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
      styles: [".mat-raised-button[_ngcontent-%COMP%] {\r\n  border: solid black .5px;\r\n  border-radius: 5px;\r\n  background-color: #F6D936;\r\n  color: black;\r\n  margin-left: 10%;\r\n}\r\n.plus-minus-font[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n  background: #71A040;\r\n  border: solid black 1px;\r\n  margin-bottom: 2%;\r\n}\r\n.icon-button-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 6rem 4rem 10rem;\r\n  margin-top: 1rem;\r\n}\r\n.product-name[_ngcontent-%COMP%] {\r\n  background: #065777;\r\n  border: 1px black solid;\r\n  border-radius: 5px;\r\n  box-shadow: 1px 1px black;\r\n  display: inline-block;\r\n  font-size: large;\r\n  margin-left: -2rem;\r\n  padding: .5rem;\r\n}\r\n.amount-button-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  margin-top: 2%;\r\n}\r\n.info-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  margin-top: 1.5rem;\r\n}\r\n.icon-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n.button-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n.center-for-flex[_ngcontent-%COMP%] {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90eXBlLWxpbWl0ZWQtcHJvZHVjdC90eXBlLWxpbWl0ZWQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjtBQUNBO0VBQ0Usd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwZS1saW1pdGVkLXByb2R1Y3QvdHlwZS1saW1pdGVkLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAuNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEOTM2O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbi5wbHVzLW1pbnVzLWZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogIzcxQTA0MDtcclxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4uaWNvbi1idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNnJlbSA0cmVtIDEwcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuLnByb2R1Y3QtbmFtZSB7XHJcbiAgYmFja2dyb3VuZDogIzA2NTc3NztcclxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBtYXJnaW4tbGVmdDogLTJyZW07XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuLmFtb3VudC1idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmluZm8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuLmljb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2VudGVyLWZvci1mbGV4IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeLimitedProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-type-limited-product',
          templateUrl: './type-limited-product.component.html',
          styleUrls: ['./type-limited-product.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]
        }, {
          type: src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_4__["TypeTrackerService"]
        }];
      }, {
        typeLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/type/type.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/type/type.component.ts ***!
    \***************************************************/

  /*! exports provided: TypeComponent */

  /***/
  function srcAppComponentsTypeTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeComponent", function () {
      return TypeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/type.model */
    "./src/app/models/type.model.ts");
    /* harmony import */


    var src_app_models_family_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/family.model */
    "./src/app/models/family.model.ts");
    /* harmony import */


    var src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/point.service */
    "./src/app/services/point.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _limited_product_limited_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../limited-product/limited-product.component */
    "./src/app/components/limited-product/limited-product.component.ts");
    /* harmony import */


    var _sub_type_product_sub_type_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../sub-type-product/sub-type-product.component */
    "./src/app/components/sub-type-product/sub-type-product.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "at-limit": a0
      };
    };

    function TypeComponent_ng_container_0_mat_card_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Points Remaining");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r111.allPointsUsed));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r111.currentPoints);
      }
    }

    function TypeComponent_ng_container_0_mat_card_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r112.type.typeComment);
      }
    }

    function TypeComponent_ng_container_0_ng_container_9_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r116 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r116);
      }
    }

    function TypeComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypeComponent_ng_container_0_ng_container_9_mat_card_1_Template, 2, 1, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r113.subTypeComments);
      }
    }

    function TypeComponent_ng_container_0_div_10_div_1_app_limited_product_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-limited-product", 17);
      }

      if (rf & 2) {
        var product_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cart", ctx_r119.cart)("family", ctx_r119.family)("product", product_r118)("type", ctx_r119.type);
      }
    }

    function TypeComponent_ng_container_0_div_10_div_1_app_sub_type_product_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sub-type-product", 17);
      }

      if (rf & 2) {
        var product_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cart", ctx_r120.cart)("family", ctx_r120.family)("product", product_r118)("type", ctx_r120.type);
      }
    }

    function TypeComponent_ng_container_0_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypeComponent_ng_container_0_div_10_div_1_app_limited_product_1_Template, 1, 4, "app-limited-product", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TypeComponent_ng_container_0_div_10_div_1_app_sub_type_product_2_Template, 1, 4, "app-sub-type-product", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r118 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r118.typeId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r118.typeId);
      }
    }

    function TypeComponent_ng_container_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypeComponent_ng_container_0_div_10_div_1_Template, 3, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r114.products);
      }
    }

    function TypeComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function TypeComponent_ng_container_0_Template_mat_expansion_panel_opened_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r123.panelOpenState = true;
        })("closed", function TypeComponent_ng_container_0_Template_mat_expansion_panel_closed_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r125.panelOpenState = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TypeComponent_ng_container_0_mat_card_7_Template, 11, 4, "mat-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TypeComponent_ng_container_0_mat_card_8_Template, 2, 1, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TypeComponent_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TypeComponent_ng_container_0_div_10_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-action-row", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypeComponent_ng_container_0_Template_mat_action_row_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r126.closePanel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r110.panelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r110.type.typeName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r110.panelOpenState ? "close" : "open", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.hasPoints && ctx_r110.panelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.type.typeComment && ctx_r110.panelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.subTypeComments.length && ctx_r110.panelOpenState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.panelOpenState);
      }
    }

    var TypeComponent =
    /*#__PURE__*/
    function () {
      function TypeComponent(pointService) {
        _classCallCheck(this, TypeComponent);

        this.pointService = pointService;
        this.loading = true;
        this.panelOpenState = false;
        this.products = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.subTypeComments = [];
      }

      _createClass(TypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.setProducts();
          this.sortProductsByName();
          this.setInfant();
          this.setSchool();
          this.setHasPoints();
          this.setSubTypeComments();
          this.subscription.add(this.pointService.getCurrentPoints().subscribe(function (currentPoints) {
            _this25.currentPoints = currentPoints;
            _this25.allPointsUsed = _this25.currentPoints <= 0;
          }));
          this.loading = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "closePanel",
        value: function closePanel() {
          this.panelOpenState = false;
        }
      }, {
        key: "setHasPoints",
        value: function setHasPoints() {
          this.hasPoints = this.products.some(function (product) {
            return product.points;
          });
        }
      }, {
        key: "setInfant",
        value: function setInfant() {
          this.infantsIncluded = this.family.infants ? true : false;
          this.infantType = !this.type.products.some(function (product) {
            return !product.infant;
          });
        }
      }, {
        key: "setProducts",
        value: function setProducts() {
          var _this26 = this;

          this.type.products.forEach(function (product) {
            _this26.setProductsForFamilySize(product);
          });
          this.allSubTypes.forEach(function (subType) {
            if (_this26.type._id === subType.superTypeId) {
              subType.products.forEach(function (subTypeProduct) {
                subTypeProduct.typeId = subType._id;
                subTypeProduct.typeName = subType.typeName;
                subTypeProduct.typeComment = subType.typeComment;
                subTypeProduct.typeLimits = subType.typeLimits;

                _this26.setProductsForFamilySize(subTypeProduct);
              });
            }
          });
        }
      }, {
        key: "setProductsForFamilySize",
        value: function setProductsForFamilySize(product) {
          var _this27 = this;

          var familyValue;
          product.school ? familyValue = this.family.schoolChildren : familyValue = this.family.familySize;

          if (product.prodSizeAmount) {
            product.prodSizeAmount.forEach(function (mapping) {
              if (mapping.minFamSize <= familyValue && familyValue <= mapping.maxFamSize) {
                _this27.products.push(product);
              }
            });
          } else {
            this.products.push(product);
          }
        }
      }, {
        key: "setSchool",
        value: function setSchool() {
          this.schoolIncluded = this.family.schoolChildren > 0;
          this.schoolType = !this.type.products.some(function (product) {
            return !product.school;
          });
        }
      }, {
        key: "setSubTypeComments",
        value: function setSubTypeComments() {
          var _this28 = this;

          this.allSubTypes.forEach(function (subType) {
            if (_this28.type._id === subType.superTypeId && subType.typeComment) {
              _this28.subTypeComments.push(subType.typeComment);
            }
          });
        }
      }, {
        key: "sortProductsByName",
        value: function sortProductsByName() {
          this.products.sort(function (before, after) {
            return before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1;
          });
        }
      }]);

      return TypeComponent;
    }();

    TypeComponent.ɵfac = function TypeComponent_Factory(t) {
      return new (t || TypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]));
    };

    TypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypeComponent,
      selectors: [["app-type"]],
      inputs: {
        allSubTypes: "allSubTypes",
        cart: "cart",
        family: "family",
        type: "type"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "expanded", "opened", "closed"], ["class", "icon-top-container", 4, "ngIf"], ["class", "comment-container", 4, "ngIf"], ["class", "product-card-container", 4, "ngIf"], [3, "click"], [1, "icon-top-container"], [1, "icon-sub-container", 3, "ngClass"], [1, "label-container"], [1, "label"], [1, "icon-container"], [1, "comment-container"], ["class", "comment-container", 4, "ngFor", "ngForOf"], [1, "product-card-container"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [3, "cart", "family", "product", "type", 4, "ngIf"], [3, "cart", "family", "product", "type"]],
      template: function TypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TypeComponent_ng_container_0_Template, 12, 7, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.schoolType || ctx.schoolIncluded) && (!ctx.infantType || ctx.infantsIncluded));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelActionRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _limited_product_limited_product_component__WEBPACK_IMPORTED_MODULE_9__["LimitedProductComponent"], _sub_type_product_sub_type_product_component__WEBPACK_IMPORTED_MODULE_10__["SubTypeProductComponent"]],
      styles: [".mat-expansion-panel[_ngcontent-%COMP%] {\r\n  background:  #603A17;\r\n  border: solid black 1px;\r\n  margin: 2%;\r\n}\r\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n}\r\n.mat-card[_ngcontent-%COMP%] {\r\n  border: solid black 1px;\r\n}\r\n.icon-top-container[_ngcontent-%COMP%] {\r\n  background-color:  #D47B28;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  margin-bottom: 2rem;\r\n}\r\n.icon-sub-container[_ngcontent-%COMP%] {\r\n  background-color: #143e0c;\r\n  border: 1px black solid;\r\n  border-radius: 4px;\r\n  padding: 16px;\r\n}\r\n.at-limit[_ngcontent-%COMP%]{\r\n  background-color: #A71E2A;\r\n}\r\n.icon-container[_ngcontent-%COMP%] {\r\n  background: dodgerblue;\r\n  border: 1px black solid;\r\n  border-radius: 100px;\r\n  color: white;\r\n  font-size: xx-large;\r\n  margin-left: -8px;\r\n  margin-top: -55px;\r\n  padding: 12px;\r\n  position: fixed;\r\n}\r\n.label-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  font-size: large;\r\n}\r\n.label[_ngcontent-%COMP%] {\r\n  margin-top: .25rem;\r\n}\r\n.comment-container[_ngcontent-%COMP%] {\r\n  background-color: #9a0707;\r\n  margin-bottom: 2rem;\r\n}\r\n.product-card-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  margin: 0 -1rem;\r\n}\r\n.product-card[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n  margin: 0 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n.mat-action-row[_ngcontent-%COMP%] {\r\n  border-top: 0;\r\n  color: rgba(255,255,255,.7);\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90eXBlL3R5cGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R5cGUvdHlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIGJhY2tncm91bmQ6ICAjNjAzQTE3O1xyXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gIG1hcmdpbjogMiU7XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuLmljb24tdG9wLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICNENDdCMjg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5pY29uLXN1Yi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDNlMGM7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuLmF0LWxpbWl0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNzFFMkE7XHJcbn1cclxuLmljb24tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gIG1hcmdpbi10b3A6IC01NXB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5sYWJlbC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuLmxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAuMjVyZW07XHJcbn1cclxuLmNvbW1lbnQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWEwNzA3O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbjogMCAtMXJlbTtcclxufVxyXG4ucHJvZHVjdC1jYXJkIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW46IDAgMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5tYXQtYWN0aW9uLXJvdyB7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-type',
          templateUrl: './type.component.html',
          styleUrls: ['./type.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_point_service__WEBPACK_IMPORTED_MODULE_3__["PointService"]
        }];
      }, {
        allSubTypes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        family: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/update-modal/update-modal.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/update-modal/update-modal.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UpdateModalComponent */

  /***/
  function srcAppComponentsUpdateModalUpdateModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateModalComponent", function () {
      return UpdateModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/family.service */
    "./src/app/services/family.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_services_point_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/point.service */
    "./src/app/services/point.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/type-tracker.service */
    "./src/app/services/type-tracker.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_components_family_family_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/components/family/family.component */
    "./src/app/components/family/family.component.ts");
    /* harmony import */


    var src_app_services_pick_up_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/pick-up-date.service */
    "./src/app/services/pick-up-date.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function UpdateModalComponent_form_0_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.requiredError);
      }
    }

    function UpdateModalComponent_form_0_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.requiredError);
      }
    }

    function UpdateModalComponent_form_0_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zipcode must be exactly five digits (example: 64359).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateModalComponent_form_0_mat_error_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.requiredError);
      }
    }

    function UpdateModalComponent_form_0_mat_error_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number must be in the following format: 555-555-5555.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateModalComponent_form_0_mat_error_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.requiredError);
      }
    }

    function UpdateModalComponent_form_0_mat_error_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email address must include the @ symbol.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateModalComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Contact Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdateModalComponent_form_0_mat_error_8_Template, 2, 1, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UpdateModalComponent_form_0_mat_error_14_Template, 2, 1, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Zip Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UpdateModalComponent_form_0_mat_error_20_Template, 2, 0, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UpdateModalComponent_form_0_mat_error_21_Template, 2, 1, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UpdateModalComponent_form_0_mat_error_27_Template, 2, 0, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UpdateModalComponent_form_0_mat_error_28_Template, 2, 1, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email Address (optional)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UpdateModalComponent_form_0_mat_error_34_Template, 2, 0, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateModalComponent_form_0_Template_button_click_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.onCancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateModalComponent_form_0_Template_button_click_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.onUpdateContactClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r19.contactForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r19.family.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.contactForm.get("firstName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r19.family.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.contactForm.get("lastName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r19.family.zipCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.contactForm.get("zipCode").hasError("pattern"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.contactForm.get("zipCode").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r19.family.phoneNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.contactForm.get("phoneNumber").hasError("pattern"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.contactForm.get("phoneNumber").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r19.family.emailAddress ? ctx_r19.family.emailAddress : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.contactForm.get("emailAddress").hasError("email"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r19.contactForm.valid || !ctx_r19.contactForm.dirty);
      }
    }

    function UpdateModalComponent_form_1_mat_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.requiredError);
      }
    }

    function UpdateModalComponent_form_1_mat_error_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.requiredError);
      }
    }

    function UpdateModalComponent_form_1_mat_error_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.requiredError);
      }
    }

    function UpdateModalComponent_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Household Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Since household information determines shopping options, an update will reset your cart and return you to the shopping screen.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Family Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "9+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UpdateModalComponent_form_1_mat_error_30_Template, 2, 1, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Number of children between 4 and 18 years old");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "6+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, UpdateModalComponent_form_1_mat_error_50_Template, 2, 1, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Any children 3 or younger?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-select", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, UpdateModalComponent_form_1_mat_error_60_Template, 2, 1, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateModalComponent_form_1_Template_button_click_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.onCancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateModalComponent_form_1_Template_button_click_64_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.onUpdateHouseholdClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Update and Shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r20.householdForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.family.familySize);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.householdForm.get("familySize").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.family.schoolChildren);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.householdForm.get("schoolChildren").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.family.infants);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.householdForm.get("infants").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r20.householdForm.valid || !ctx_r20.householdForm.dirty);
      }
    }

    function UpdateModalComponent_form_2_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.requiredError);
      }
    }

    function UpdateModalComponent_form_2_mat_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pickUpDate_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pickUpDate_r41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pickUpDate_r41);
      }
    }

    function UpdateModalComponent_form_2_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateModalComponent_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Pick Up Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Were you referred by CELC?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function UpdateModalComponent_form_2_Template_mat_select_selectionChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.setPickUpDateOptions($event.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UpdateModalComponent_form_2_mat_error_12_Template, 2, 1, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pick Up Dates:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UpdateModalComponent_form_2_mat_option_18_Template, 2, 2, "mat-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UpdateModalComponent_form_2_mat_error_19_Template, 2, 0, "mat-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateModalComponent_form_2_Template_button_click_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.onCancelClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateModalComponent_form_2_Template_button_click_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.onUpdatePickUpClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r21.pickUpForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r21.family.referral);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.pickUpForm.get("referral").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r21.pickUpDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.pickUpDateOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.pickUpForm.get("pickUpDate").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r21.pickUpForm.valid || !ctx_r21.pickUpForm.dirty);
      }
    }

    var UpdateModalComponent =
    /*#__PURE__*/
    function (_src_app_components_f) {
      _inherits(UpdateModalComponent, _src_app_components_f);

      function UpdateModalComponent(authService, cartService, dialogRef, familyService, data, pickUpDateService, pointService, snackBar, router, typeTrackerService) {
        var _this29;

        _classCallCheck(this, UpdateModalComponent);

        _this29 = _possibleConstructorReturn(this, _getPrototypeOf(UpdateModalComponent).call(this, authService, cartService, familyService, pickUpDateService, pointService, router, typeTrackerService));
        _this29.authService = authService;
        _this29.cartService = cartService;
        _this29.dialogRef = dialogRef;
        _this29.familyService = familyService;
        _this29.data = data;
        _this29.pickUpDateService = pickUpDateService;
        _this29.pointService = pointService;
        _this29.snackBar = snackBar;
        _this29.router = router;
        _this29.typeTrackerService = typeTrackerService;
        _this29.loading = true;
        return _this29;
      }

      _createClass(UpdateModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.family = this.data.family;
          this.pickUpDate = this.data.pickUpDate;
          this.setContactModal();
          this.setHouseHoldModal();
          this.setPickUpModal();
          this.setPickUpDateOptions(this.family.referral);
          this.pickUpForm.get('pickUpDate').setValue(this.pickUpDate);
          this.pointService.getPointsMapping().subscribe(function (pointsMapping) {
            return _this30.pointsMapping = pointsMapping;
          });
        }
      }, {
        key: "onCancelClick",
        value: function onCancelClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onUpdateContactClick",
        value: function onUpdateContactClick() {
          if (this.contactForm.valid) {
            this.setContactInfo();
            this.familyService.updateFamily(this.family);
            this.snackBar.open('Contact Information Updated.', 'Dismiss', {
              duration: 2000,
              panelClass: ['green-snackbar', 'mat-raised-button']
            });
            this.dialogRef.close();
          }
        }
      }, {
        key: "onUpdateHouseholdClick",
        value: function onUpdateHouseholdClick() {
          if (this.householdForm.valid) {
            this.setHouseholdInfo();
            this.familyService.updateFamily(this.family);
            this.initPoints(this.family.familySize);
            this.cartService.resetCart();
            this.typeTrackerService.resetTypeTrackers();
            this.dialogRef.close();
            this.snackBar.open('Household Information Updated and Cart Reset.', 'Dismiss', {
              duration: 2000,
              panelClass: ['green-snackbar']
            });
            this.router.navigate(["/shop"]);
          }
        }
      }, {
        key: "onUpdatePickUpClick",
        value: function onUpdatePickUpClick() {
          if (this.pickUpForm.valid) {
            this.setPickUpInfo();
            this.familyService.updateFamily(this.family);
            this.snackBar.open('Pick Up Information Updated.', 'Dismiss', {
              duration: 2000,
              panelClass: ['green-snackbar']
            });
            this.dialogRef.close();
          }
        }
      }, {
        key: "setContactModal",
        value: function setContactModal() {
          this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.family.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.family.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.family.zipCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{5}$/)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.family.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.family.emailAddress, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email)
          });
        }
      }, {
        key: "setHouseHoldModal",
        value: function setHouseHoldModal() {
          this.householdForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            familySize: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.family.familySize, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            schoolChildren: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.family.schoolChildren, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            infants: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.family.infants, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "setPickUpModal",
        value: function setPickUpModal() {
          this.pickUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            referral: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.family.referral, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            pickUpDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.pickUpDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }]);

      return UpdateModalComponent;
    }(src_app_components_family_family_component__WEBPACK_IMPORTED_MODULE_9__["FamilyComponent"]);

    UpdateModalComponent.ɵfac = function UpdateModalComponent_Factory(t) {
      return new (t || UpdateModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pick_up_date_service__WEBPACK_IMPORTED_MODULE_10__["PickUpDateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_point_service__WEBPACK_IMPORTED_MODULE_5__["PointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_7__["TypeTrackerService"]));
    };

    UpdateModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateModalComponent,
      selectors: [["app-update-modal"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 3,
      consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["matInput", "", "formControlName", "firstName", 3, "value"], [4, "ngIf"], ["matInput", "", "formControlName", "lastName", 3, "value"], ["matInput", "", "formControlName", "zipCode", 3, "value"], ["matInput", "", "formControlName", "phoneNumber", 3, "value"], ["matInput", "", "formControlName", "emailAddress", 3, "value"], [1, "button-div"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], ["id", "household-caution"], ["formControlName", "familySize", 3, "value"], [3, "value"], ["matInput", "", "formControlName", "schoolChildren", 3, "value"], ["matInput", "", "formControlName", "infants", 3, "value"], ["matInput", "", "formControlName", "referral", 3, "value", "selectionChange"], ["matInput", "", "formControlName", "pickUpDate", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"]],
      template: function UpdateModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UpdateModalComponent_form_0_Template, 40, 14, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateModalComponent_form_1_Template, 66, 26, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UpdateModalComponent_form_2_Template, 25, 9, "form", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.modal === "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.modal === "household");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.modal === "pick-up");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]],
      styles: ["form[_ngcontent-%COMP%] {\r\n    background-color: #46a8d0;\r\n    padding: 1rem;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    background-color: #F6D936;\r\n    border: solid black .5px;\r\n    border-radius: 5px;\r\n    color: black;\r\n}\r\n.button-div[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\nheader[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    font-size: large;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 2%;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    background-color: #065777;\r\n    border: solid black 1px;\r\n    border-radius: 5px;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    font-size: large;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 2%;\r\n}\r\n#household-caution[_ngcontent-%COMP%] {\r\n    background: #A71E2A;\r\n    border: 1px black solid;\r\n    border-radius: 5px;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    padding: 2%;\r\n}\r\n.mat-error[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtbW9kYWwvdXBkYXRlLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtbW9kYWwvdXBkYXRlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NmE4ZDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEOTM2O1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5idXR0b24tZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTc3NztcclxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbiNob3VzZWhvbGQtY2F1dGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTcxRTJBO1xyXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcbi5tYXQtZXJyb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-modal',
          templateUrl: './update-modal.component.html',
          styleUrls: ['./update-modal.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: src_app_services_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_app_services_pick_up_date_service__WEBPACK_IMPORTED_MODULE_10__["PickUpDateService"]
        }, {
          type: src_app_services_point_service__WEBPACK_IMPORTED_MODULE_5__["PointService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: src_app_services_type_tracker_service__WEBPACK_IMPORTED_MODULE_7__["TypeTrackerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this31 = this;

          return this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (loggedIn) {
            if (!loggedIn) {
              _this31.authService.login(state.url);
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/family.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/guards/family.guard.ts ***!
    \****************************************/

  /*! exports provided: FamilyGuard */

  /***/
  function srcAppGuardsFamilyGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FamilyGuard", function () {
      return FamilyGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/family.service */
    "./src/app/services/family.service.ts");

    var FamilyGuard =
    /*#__PURE__*/
    function () {
      function FamilyGuard(familyService, router) {
        _classCallCheck(this, FamilyGuard);

        this.familyService = familyService;
        this.router = router;
      }

      _createClass(FamilyGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this32 = this;

          this.familyService.getFamily().subscribe(function (family) {
            _this32.family = family;
          });
          return this.hasFamilyCheck() ? true : this.router.parseUrl('/family');
        }
      }, {
        key: "hasFamilyCheck",
        value: function hasFamilyCheck() {
          var familyValues = Object.values(this.family);
          var nullValues = familyValues.filter(function (familyValue) {
            return familyValue === null;
          });
          return !nullValues.length;
        }
      }]);

      return FamilyGuard;
    }();

    FamilyGuard.ɵfac = function FamilyGuard_Factory(t) {
      return new (t || FamilyGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    FamilyGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FamilyGuard,
      factory: FamilyGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/no-family.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/guards/no-family.guard.ts ***!
    \*******************************************/

  /*! exports provided: NoFamilyGuard */

  /***/
  function srcAppGuardsNoFamilyGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoFamilyGuard", function () {
      return NoFamilyGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_family_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/family.service */
    "./src/app/services/family.service.ts");

    var NoFamilyGuard =
    /*#__PURE__*/
    function () {
      function NoFamilyGuard(familyService) {
        _classCallCheck(this, NoFamilyGuard);

        this.familyService = familyService;
      }

      _createClass(NoFamilyGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this33 = this;

          this.familyService.getFamily().subscribe(function (family) {
            _this33.family = family;
          });
          return this.hasNoFamilyCheck();
        }
      }, {
        key: "hasNoFamilyCheck",
        value: function hasNoFamilyCheck() {
          var familyValues = Object.values(this.family);
          var nullValues = familyValues.filter(function (familyValue) {
            return familyValue === null;
          });
          return nullValues.length ? true : false;
        }
      }]);

      return NoFamilyGuard;
    }();

    NoFamilyGuard.ɵfac = function NoFamilyGuard_Factory(t) {
      return new (t || NoFamilyGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_family_service__WEBPACK_IMPORTED_MODULE_1__["FamilyService"]));
    };

    NoFamilyGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NoFamilyGuard,
      factory: NoFamilyGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoFamilyGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_family_service__WEBPACK_IMPORTED_MODULE_1__["FamilyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/family.model.ts":
  /*!****************************************!*\
    !*** ./src/app/models/family.model.ts ***!
    \****************************************/

  /*! exports provided: Family */

  /***/
  function srcAppModelsFamilyModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Family", function () {
      return Family;
    });

    var Family = function Family() {
      _classCallCheck(this, Family);
    };
    /***/

  },

  /***/
  "./src/app/models/order.model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/order.model.ts ***!
    \***************************************/

  /*! exports provided: Order */

  /***/
  function srcAppModelsOrderModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });

    var Order = function Order() {
      _classCallCheck(this, Order);
    };
    /***/

  },

  /***/
  "./src/app/models/product.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/product.model.ts ***!
    \*****************************************/

  /*! exports provided: Product */

  /***/
  function srcAppModelsProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product() {
      _classCallCheck(this, Product);
    };
    /***/

  },

  /***/
  "./src/app/models/type-product.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/models/type-product.model.ts ***!
    \**********************************************/

  /*! exports provided: TypeProduct */

  /***/
  function srcAppModelsTypeProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeProduct", function () {
      return TypeProduct;
    });
    /* harmony import */


    var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./product.model */
    "./src/app/models/product.model.ts");

    var TypeProduct =
    /*#__PURE__*/
    function (_product_model__WEBPA) {
      _inherits(TypeProduct, _product_model__WEBPA);

      function TypeProduct() {
        _classCallCheck(this, TypeProduct);

        return _possibleConstructorReturn(this, _getPrototypeOf(TypeProduct).apply(this, arguments));
      }

      return TypeProduct;
    }(_product_model__WEBPACK_IMPORTED_MODULE_0__["Product"]);
    /***/

  },

  /***/
  "./src/app/models/type.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/type.model.ts ***!
    \**************************************/

  /*! exports provided: Type */

  /***/
  function srcAppModelsTypeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Type", function () {
      return Type;
    });

    var Type = function Type() {
      _classCallCheck(this, Type);
    };
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../auth.config */
    "./auth.config.ts");
    /* harmony import */


    var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @auth0/auth0-spa-js */
    "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
    /* harmony import */


    var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5__);

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router) {
        var _this34 = this;

        _classCallCheck(this, AuthService);

        this.router = router;
        this.loggedIn = null;
        this.logOutClick = false;
        this.logOutClickSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.logOutClick);
        this.currentLogOutClick = this.logOutClickSource.asObservable();
        this.auth0Client = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5___default()(_auth_config__WEBPACK_IMPORTED_MODULE_4__["default"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
        this.isAuthenticated = this.auth0Client.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(client.isAuthenticated());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
          return _this34.loggedIn = res;
        }));
        this.handleRedirectCallback = this.auth0Client.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(client.handleRedirectCallback());
        }));
      }

      _createClass(AuthService, [{
        key: "getTokenSilently$",
        value: function getTokenSilently$(options) {
          return this.auth0Client.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (client) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(client.getTokenSilently(options));
          }));
        }
      }, {
        key: "localAuthSetup",
        value: function localAuthSetup() {
          var _this35 = this;

          var checkAuth = this.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (loggedIn) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(loggedIn);
          }));
          checkAuth.subscribe(function (response) {
            _this35.loggedIn = !!response;
          });
        }
      }, {
        key: "login",
        value: function login() {
          var redirectPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/family";
          this.auth0Client.subscribe(function (client) {
            client.loginWithRedirect({
              redirect_uri: "".concat(window.location.origin, "/callback"),
              appState: {
                target: redirectPath
              }
            });
          });
        }
      }, {
        key: "handleAuthCallback",
        value: function handleAuthCallback() {
          var _this36 = this;

          var targetRoute;
          var authComplete = this.handleRedirectCallback.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (cbRes) {
            targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([_this36.isAuthenticated]);
          }));
          authComplete.subscribe(function (_ref15) {
            var _ref16 = _slicedToArray(_ref15, 1),
                loggedIn = _ref16[0];

            _this36.router.navigate([targetRoute]);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.auth0Client.subscribe(function (client) {
            client.logout({
              client_id: _auth_config__WEBPACK_IMPORTED_MODULE_4__["default"].client_id,
              returnTo: "".concat(window.location.origin)
            });
          });
        }
      }, {
        key: "getLogOutClicked",
        value: function getLogOutClicked() {
          return this.currentLogOutClick;
        }
      }, {
        key: "logOutClicked",
        value: function logOutClicked() {
          this.logOutClickSource.next(true);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.cart = [];
        this.cartSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cart);
        this.currentCart = this.cartSource.asObservable();
      }

      _createClass(CartService, [{
        key: "getCart",
        value: function getCart() {
          return this.currentCart;
        }
      }, {
        key: "resetCart",
        value: function resetCart() {
          var defaultCart = [];
          this.cartSource.next(defaultCart);
        }
      }, {
        key: "updateCart",
        value: function updateCart(cart) {
          this.cartSource.next(cart);
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)();
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/family.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/family.service.ts ***!
    \********************************************/

  /*! exports provided: FamilyService */

  /***/
  function srcAppServicesFamilyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FamilyService", function () {
      return FamilyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FamilyService =
    /*#__PURE__*/
    function () {
      function FamilyService() {
        _classCallCheck(this, FamilyService);

        this.family = {
          firstName: null,
          lastName: null,
          zipCode: null,
          phoneNumber: null,
          familySize: null,
          schoolChildren: null,
          infants: null,
          referral: null
        };
        this.familySource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.family);
        this.currentFamily = this.familySource.asObservable();
      }

      _createClass(FamilyService, [{
        key: "getFamily",
        value: function getFamily() {
          return this.currentFamily;
        }
      }, {
        key: "resetFamily",
        value: function resetFamily() {
          var defaultFamily = {
            firstName: null,
            lastName: null,
            zipCode: null,
            phoneNumber: null,
            familySize: null,
            schoolChildren: null,
            infants: null,
            referral: null
          };
          this.familySource.next(defaultFamily);
        }
      }, {
        key: "updateFamily",
        value: function updateFamily(family) {
          this.familySource.next(family);
        }
      }]);

      return FamilyService;
    }();

    FamilyService.ɵfac = function FamilyService_Factory(t) {
      return new (t || FamilyService)();
    };

    FamilyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FamilyService,
      factory: FamilyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/interceptor.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/interceptor.service.ts ***!
    \*************************************************/

  /*! exports provided: InterceptorService */

  /***/
  function srcAppServicesInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptorService", function () {
      return InterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var InterceptorService =
    /*#__PURE__*/
    function () {
      function InterceptorService(authService) {
        _classCallCheck(this, InterceptorService);

        this.authService = authService;
      }

      _createClass(InterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          return this.authService.getTokenSilently$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (token) {
            var tokenReq = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
            return next.handle(tokenReq);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }));
        }
      }]);

      return InterceptorService;
    }();

    InterceptorService.ɵfac = function InterceptorService_Factory(t) {
      return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InterceptorService,
      factory: InterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/pick-up-date.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/pick-up-date.service.ts ***!
    \**************************************************/

  /*! exports provided: PickUpDateService */

  /***/
  function srcAppServicesPickUpDateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickUpDateService", function () {
      return PickUpDateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment-timezone */
    "./node_modules/moment-timezone/index.js");
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__); // THIS SERVICE ONLY CURRENTLY RETURNS PICK UP DATES FOR TOMORROW OR MONDAY
    // THE METHODS MARKED "UNUSED" WERE PART OF THE THE ORIGINAL DESIGN TO
    // RETURN SPECIFIC DAYS OF THE WEEK FOR DIFFERENT PICK UP LOCATIONS
    // IN THE FUTURE WE MAY RE-IMPLEMENT THIS DESIGN, SO THEY WERE LEFT HERE


    var PickUpDateService =
    /*#__PURE__*/
    function () {
      function PickUpDateService() {
        _classCallCheck(this, PickUpDateService);

        this.daysOfTheWeek = new Map([[0, 'Sunday'], [1, 'Monday'], [2, 'Tuesday'], [3, 'Wednesday'], [4, 'Thursday'], [5, 'Friday'], [6, 'Saturday']]);
        this.now = new Date();
        this.pickUpDate = null;
        this.pickUpDateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.pickUpDate);
        this.currentPickUpDate = this.pickUpDateSource.asObservable();
      } // UNUSED


      _createClass(PickUpDateService, [{
        key: "formatDate",
        value: function formatDate(date) {
          var weekDay = this.daysOfTheWeek.get(date.getDay());
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          return weekDay + ' (' + month + '/' + day + '/' + year + ')';
        }
      }, {
        key: "getPickUpDate",
        value: function getPickUpDate() {
          return this.currentPickUpDate;
        }
      }, {
        key: "getTomorrowPickUpOption",
        value: function getTomorrowPickUpOption() {
          return moment_timezone__WEBPACK_IMPORTED_MODULE_2__().tz('America/New_York').day() < 5 ? this.pickUpDateOptions = ['Tomorrow'] : this.pickUpDateOptions = ['Monday'];
        } // UNUSED

      }, {
        key: "getPickUpDateOptions",
        value: function getPickUpDateOptions(referral) {
          if (!referral) {
            var secondThursday = this.findNthWeekdayOfMonth(4, 2, false);
            var secondSaturday = this.findNthWeekdayOfMonth(6, 2, false);

            if (this.now > secondThursday && this.now > secondSaturday) {
              secondThursday = this.findNthWeekdayOfMonth(4, 2, true);
              secondSaturday = this.findNthWeekdayOfMonth(6, 2, true);
            }

            if (this.now < secondThursday && this.now > secondSaturday) {
              this.orderAndPush(secondThursday);
            } else if (this.now > secondThursday && this.now < secondSaturday) {
              this.orderAndPush(secondSaturday);
            } else {
              this.orderAndPush(secondThursday, secondSaturday);
            }
          } else {
            var thirdWednesday = this.findNthWeekdayOfMonth(3, 3, false);

            if (this.now > thirdWednesday) {
              thirdWednesday = this.findNthWeekdayOfMonth(3, 3, true);
            }

            this.orderAndPush(thirdWednesday);
          }

          return this.pickUpDateOptions;
        } // UNUSED

      }, {
        key: "findNthWeekdayOfMonth",
        value: function findNthWeekdayOfMonth(weekday, n, nextMonth) {
          var pickUpDate = new Date();
          var firstOfTheMonth = new Date(this.now.getFullYear(), this.now.getMonth(), 1);

          if (nextMonth) {
            pickUpDate = new Date(this.now.getFullYear(), this.now.getMonth() + 1);
            firstOfTheMonth = new Date(this.now.getFullYear(), this.now.getMonth() + 1, 1);
          }

          var add = (weekday - firstOfTheMonth.getDay() + 7) % 7 + (n - 1) * 7;
          pickUpDate.setDate(1 + add);
          return pickUpDate;
        } // UNUSED

      }, {
        key: "orderAndPush",
        value: function orderAndPush(firstDay, secondDay) {
          this.pickUpDateOptions = [];

          if (firstDay && secondDay) {
            if (firstDay < secondDay) {
              this.pickUpDateOptions.push(this.formatDate(firstDay));
              this.pickUpDateOptions.push(this.formatDate(secondDay));
            } else {
              this.pickUpDateOptions.push(this.formatDate(secondDay));
              this.pickUpDateOptions.push(this.formatDate(firstDay));
            }
          } else {
            this.pickUpDateOptions.push(this.formatDate(firstDay));
          }
        }
      }, {
        key: "setTomorrowPickUpDate",
        value: function setTomorrowPickUpDate() {
          if (moment_timezone__WEBPACK_IMPORTED_MODULE_2__().tz('America/New_York').day() < 5) {
            this.pickUpDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2__().tz('America/New_York').add(1, 'day').format('MM/DD/YYYY');
          } else if (moment_timezone__WEBPACK_IMPORTED_MODULE_2__().tz('America/New_York').day() === 5) {
            this.pickUpDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2__().tz('America/New_York').add(3, 'day').format('MM/DD/YYYY');
          } else if (moment_timezone__WEBPACK_IMPORTED_MODULE_2__().tz('America/New_York').day() === 6) {
            this.pickUpDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2__().tz('America/New_York').add(2, 'day').format('MM/DD/YYYY');
          }
        }
      }, {
        key: "resetPickUpDate",
        value: function resetPickUpDate() {
          var defaultPickUpDate = null;
          this.pickUpDateSource.next(defaultPickUpDate);
        } // UNUSED

      }, {
        key: "updatePickUpDate",
        value: function updatePickUpDate(pickUpDate) {
          this.pickUpDateSource.next(pickUpDate);
        }
      }, {
        key: "updatePickUpDateTomorrow",
        value: function updatePickUpDateTomorrow() {
          this.pickUpDateSource.next(this.pickUpDate);
        }
      }]);

      return PickUpDateService;
    }();

    PickUpDateService.ɵfac = function PickUpDateService_Factory(t) {
      return new (t || PickUpDateService)();
    };

    PickUpDateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PickUpDateService,
      factory: PickUpDateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickUpDateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/point.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/point.service.ts ***!
    \*******************************************/

  /*! exports provided: PointService */

  /***/
  function srcAppServicesPointServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointService", function () {
      return PointService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var PointService =
    /*#__PURE__*/
    function () {
      function PointService(httpClient) {
        _classCallCheck(this, PointService);

        this.httpClient = httpClient;
        this.points = 0;
        this.maxPoints = 0;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.pointSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.points);
        this.currentPoints = this.pointSource.asObservable();
      }

      _createClass(PointService, [{
        key: "getCurrentPoints",
        value: function getCurrentPoints() {
          return this.currentPoints;
        }
      }, {
        key: "getPointsMapping",
        value: function getPointsMapping() {
          return this.httpClient.get("".concat(this.url, "/points-mappings")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result[0].pointsMapping;
          }));
        }
      }, {
        key: "setMaxPoints",
        value: function setMaxPoints(maxPoints) {
          this.maxPoints = maxPoints;
        }
      }, {
        key: "updatePoints",
        value: function updatePoints(currentPoints) {
          this.pointSource.next(currentPoints);
        }
      }]);

      return PointService;
    }();

    PointService.ɵfac = function PointService_Factory(t) {
      return new (t || PointService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PointService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PointService,
      factory: PointService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/shop.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/shop.service.ts ***!
    \******************************************/

  /*! exports provided: ShopService */

  /***/
  function srcAppServicesShopServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopService", function () {
      return ShopService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ShopService =
    /*#__PURE__*/
    function () {
      function ShopService(httpClient) {
        _classCallCheck(this, ShopService);

        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(ShopService, [{
        key: "getShop",
        value: function getShop() {
          return this.httpClient.get("".concat(this.url, "/shop")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result[0].shop;
          }));
        }
      }]);

      return ShopService;
    }();

    ShopService.ɵfac = function ShopService_Factory(t) {
      return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShopService,
      factory: ShopService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/type-tracker.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/type-tracker.service.ts ***!
    \**************************************************/

  /*! exports provided: TypeTrackerService */

  /***/
  function srcAppServicesTypeTrackerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeTrackerService", function () {
      return TypeTrackerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TypeTrackerService =
    /*#__PURE__*/
    function () {
      function TypeTrackerService() {
        _classCallCheck(this, TypeTrackerService);

        this.typeTrackers = [];
        this.typeTrackerSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.typeTrackers);
        this.currentTypeTrackers = this.typeTrackerSource.asObservable();
      }

      _createClass(TypeTrackerService, [{
        key: "addTypeTracker",
        value: function addTypeTracker(typeIdToAdd) {
          if (!this.typeTrackers.some(function (typeTracker) {
            return typeIdToAdd === typeTracker.typeId;
          })) {
            this.typeTrackers.push({
              typeId: typeIdToAdd,
              atTypeMaxAmount: false,
              typeAmountInCart: 0
            });
            this.typeTrackerSource.next(this.typeTrackers);
          }
        }
      }, {
        key: "getTypeTrackers",
        value: function getTypeTrackers() {
          return this.currentTypeTrackers;
        }
      }, {
        key: "resetTypeTrackers",
        value: function resetTypeTrackers() {
          this.typeTrackers = [];
          this.typeTrackerSource.next(this.typeTrackers);
        }
      }, {
        key: "updateTypeTrackers",
        value: function updateTypeTrackers(componentTracker) {
          var index = this.typeTrackers.findIndex(function (typeTracker) {
            return typeTracker.typeId === componentTracker.typeId;
          });
          this.typeTrackers[index] = componentTracker;
          this.typeTrackerSource.next(this.typeTrackers);
        }
      }]);

      return TypeTrackerService;
    }();

    TypeTrackerService.ɵfac = function TypeTrackerService_Factory(t) {
      return new (t || TypeTrackerService)();
    };

    TypeTrackerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TypeTrackerService,
      factory: TypeTrackerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeTrackerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:4200/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\AlienRobot\Desktop\Code\bsfp-pantry-test\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map