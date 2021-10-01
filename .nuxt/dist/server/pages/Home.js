exports.ids = [17,4];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/killerBee.323e7ff.jpeg";

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=190b2b70&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:" bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-200 w-4/5 h-1/2"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt class=\"rounded-t-lg h-1/2\"> <div class=\"py-4 px-8 grid flex-wrap justify-items-center content-center\"><h1 class=\"hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight\">"+_vm._ssrEscape("Gestion des "+_vm._s(_vm.name))+"</h1> <p class=\"hover:cursor-pointer py-3 text-gray-600 leading-6 text-center\">"+_vm._ssrEscape(" "+_vm._s(_vm.description)+" ")+"</p> <div class=\"text-white bg-black rounded-lg  p-2 content-center w-1/2 text-center\">Consulter</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=190b2b70&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  props: {
    name: {
      type: String,
      required: true,
      default: () => 'undefined'
    },
    description: {
      type: String,
      required: true,
      default: () => 'undefined'
    }
  }
});
// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Card.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a2adb96"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home.vue?vue&type=template&id=21024570&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap"},[_vm._ssrNode("<div class=\"grid w-full place-items-center content-center items-center\"><h1 class=\"w-auto text-4xl pt-10 font-bold h-10vh\">killerBee ERP </h1></div> "),_vm._ssrNode("<div class=\"flex flex-wrap bg-white-500 w-full h-full items-center\">","</div>",_vm._l((_vm.pages),function(page){return _vm._ssrNode("<div class=\"flex flex-wrap w-1/3 justify-center\">","</div>",[_c('Card',{attrs:{"name":page.name,"description":page.description}})],1)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Home.vue?vue&type=template&id=21024570&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  middleware: ['auth'],

  data() {
    return {
      pages: [{
        id: 1,
        name: 'Freezbe',
        description: 'Accès à la page pour consulter, modifier ou faire tout autre action sur la liste des modèles de freezbes.'
      }, {
        id: 2,
        name: 'Ingredients',
        description: 'Accès à la page pour consulter, modifier ou faire tout autre action sur la liste des modèles de ingrédients.'
      }, {
        id: 3,
        name: 'Procedes',
        description: 'Accès à la page pour consulter, modifier ou faire tout autre action sur la liste des modèles de procédés.'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Home.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "12976067"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Card: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=Home.js.map