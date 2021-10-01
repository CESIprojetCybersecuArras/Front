exports.ids = [20,10];
exports.modules = {

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=template&id=07d5e655&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-auto w-1/2 pt-24",style:({'background-image': "url($require('@/assets/killerBee.jpeg'))"})},[_vm._ssrNode("<label class=\"block text-2xl text-gray-700 text-sm font-bold mx-14 mt-8\">\n    Identification\n  </label> <form class=\"bg-white rounded px-8 pt-6 pb-8 mb-4\"><div class=\"mb-4\"><label for=\"email\" class=\"block text-black text-sm font-bold mb-2\">\n        Adresse mail\n      </label> <input id=\"username\" type=\"email\" placeholder=\"Email\" required=\"required\" name=\"email\" class=\"\n          shadow\n          appearance-none\n          border\n          rounded\n          w-full\n          py-2\n          px-3\n          text-gray-700\n          leading-tight\n          focus:outline-none focus:shadow-outline\n        \"></div> <div class=\"mb-6\"><label for=\"password\" class=\"block text-gray-700 text-sm font-bold mb-2\">\n        Mot de passe\n      </label> <input id=\"password\" type=\"password\" placeholder=\"*******\" name=\"password\" required=\"required\" class=\"\n          shadow\n          appearance-none\n          border \n          rounded\n          w-full\n          py-2\n          px-3\n          text-gray-700\n          mb-3\n          leading-tight\n          focus:outline-none focus:shadow-outline\n        \"></div> <div class=\"flex items-center\"><button type=\"submit\" class=\"\n          bg-black\n          hover:bg-gray-700\n          text-white\n          font-bold\n          py-2\n          px-4\n          rounded\n          focus:outline-none focus:shadow-outline\n        \">\n        S'identifier\n      </button></div></form>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Login.vue?vue&type=template&id=07d5e655&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    async logIn() {
      try {
        const body = {
          email: this.email,
          Password: this.password
        };
        const config = {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        };
        const request = await this.$axios.$post('http://localhost:4000/login', body, config);

        if (!request.email.includes('@')) {
          return 'Email must contain an @';
        }

        const user = request.email;
        this.$store.commit('changeEmail', user);
        this.$store.commit('setToken', request.access_token);
        this.$store.commit('toggle');
        this.$router.push('/home');
      } catch (error) {
        this.error = error;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "741c655a"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=c981779c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Login')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=c981779c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d1fd01a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Login: __webpack_require__(37).default})


/***/ })

};;
//# sourceMappingURL=index.js.map