exports.ids = [14,2];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddIngredientForm.vue?vue&type=template&id=4bb404aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"min-h-screen flex items-center"},[_vm._ssrNode("<div class=\"container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300\"><div class=\"py-12 p-10 bg-white rounded-xl\"><div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Nom</label> <input type=\"text\" placeholder=\"Nom\""+(_vm._ssrAttr("value",(_vm.Nom)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Description</label> <input type=\"text\" placeholder=\"@email\""+(_vm._ssrAttr("value",(_vm.Description)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <button class=\"w-full mt-6 text-white font-bold bg-black hover:bg-gray-700 py-3 rounded-md transition duration-300\">Ajouter un ingrédient</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AddIngredientForm.vue?vue&type=template&id=4bb404aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddIngredientForm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AddIngredientFormvue_type_script_lang_js_ = ({
  data: () => {
    return {
      Nom: "Undefined",
      Description: ''
    };
  },
  methods: {
    async submit() {
      try {
        const body = {
          Nom: this.Nom,
          Description: this.Description
        };
        const request = await this.$axios.$post('http://localhost:8000/createIngredient', body);
        return request;
      } catch (error) {
        this.error = error;
      }
    },

    goBack() {
      this.$router.back();
    }

  }
});
// CONCATENATED MODULE: ./components/AddIngredientForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AddIngredientFormvue_type_script_lang_js_ = (AddIngredientFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AddIngredientForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AddIngredientFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1db9bda0"
  
)

/* harmony default export */ var AddIngredientForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/AddIngredient.vue?vue&type=template&id=5bd23e3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AddIngredientForm')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/AddIngredient.vue?vue&type=template&id=5bd23e3e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/AddIngredient.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e3b7af0c"
  
)

/* harmony default export */ var AddIngredient = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AddIngredientForm: __webpack_require__(32).default})


/***/ })

};;
//# sourceMappingURL=AddIngredient.js.map