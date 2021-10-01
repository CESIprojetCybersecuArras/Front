exports.ids = [13,1];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddFreezbeForm.vue?vue&type=template&id=00242060&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"min-h-screen flex items-center"},[_vm._ssrNode("<div class=\"container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300\"><div class=\"py-12 p-10 bg-white rounded-xl\"><div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Nom</label> <input type=\"text\" placeholder=\"Nom\""+(_vm._ssrAttr("value",(_vm.Nom)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Gamme</label> <input type=\"text\" placeholder=\"Gamme\""+(_vm._ssrAttr("value",(_vm.Gamme)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Description</label> <input type=\"text\" placeholder=\"Description\""+(_vm._ssrAttr("value",(_vm.Description)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Ingrédients</label> "+(_vm._ssrList((_vm.Ingredients),function(ingr){return ("<ul class=\"divide-y divide-gray-300\"><li class=\"p-4 hover:bg-gray-50 cursor-pointer\">"+_vm._ssrEscape(_vm._s(ingr.nom))+"</li></ul>")}))+"</div> <button class=\"w-full mt-6 text-white font-bold bg-black hover:bg-gray-700 py-3 rounded-md transition duration-300\">Ajouter un modèle</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AddFreezbeForm.vue?vue&type=template&id=00242060&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddFreezbeForm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AddFreezbeFormvue_type_script_lang_js_ = ({
  // async asyncData({$axios}, callback){
  //   await $axios.$get('http://localhost:8000/getAllIngredients').then((res) => {
  //     callback(null, {Ingredients: res})
  //   })
  // },
  data: () => {
    return {
      Nom: null,
      Gamme: null,
      Description: null,
      Ingredients: [],
      Puht: null,
      ingrToAdd: [],
      active: false
    };
  },
  methods: {
    async Submit() {
      const body = {
        Nom: this.Nom,
        Gamme: this.Gamme,
        Description: this.Description,
        Puht: this.Puht,
        ingredients: this.ingrToAdd
      };
      const request = await this.$axios.$post('http://localhost:8000/createModele', body);
      return request;
    },

    goBack() {
      this.$router.back();
    },

    selected(item) {
      this.ingrToAdd.push(item);
    }

  }
});
// CONCATENATED MODULE: ./components/AddFreezbeForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AddFreezbeFormvue_type_script_lang_js_ = (AddFreezbeFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AddFreezbeForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AddFreezbeFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "72bfc65a"
  
)

/* harmony default export */ var AddFreezbeForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/AddFreezbe.vue?vue&type=template&id=0ed5ff60&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AddFreezbeForm')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/AddFreezbe.vue?vue&type=template&id=0ed5ff60&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/AddFreezbe.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0992d110"
  
)

/* harmony default export */ var AddFreezbe = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AddFreezbeForm: __webpack_require__(31).default})


/***/ })

};;
//# sourceMappingURL=AddFreezbe.js.map