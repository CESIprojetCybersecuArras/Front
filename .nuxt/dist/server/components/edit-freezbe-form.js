exports.ids = [5];
exports.modules = {

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EditFreezbeForm.vue?vue&type=template&id=e0abd41a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"min-h-screen flex items-center"},[_vm._ssrNode("<div class=\"container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300\"><div class=\"py-12 p-10 bg-white rounded-xl\"><div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Nom</label> <input type=\"text\" placeholder=\"Nom\""+(_vm._ssrAttr("value",(_vm.Nom)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Gamme</label> <input type=\"text\" placeholder=\"Gamme\""+(_vm._ssrAttr("value",(_vm.Gamme)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Description</label> <input type=\"text\" placeholder=\"Description\""+(_vm._ssrAttr("value",(_vm.Description)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Puht</label> <input type=\"text\" placeholder=\"Description\""+(_vm._ssrAttr("value",(_vm.Puht)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Ingrédients</label> <input type=\"text\" placeholder=\"Ingrédients\""+(_vm._ssrAttr("value",(_vm.Ingredients)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <button class=\"w-full mt-6 text-white font-bold bg-black hover:bg-gray-700 py-3 rounded-md transition duration-300\">Modifier un modèle</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EditFreezbeForm.vue?vue&type=template&id=e0abd41a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EditFreezbeForm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var EditFreezbeFormvue_type_script_lang_js_ = ({
  data: () => {
    return {
      Nom: 'undefined',
      Gamme: 'undefined',
      Description: 'undefined',
      Ingredients: [],
      Puht: null
    };
  },
  methods: {
    async Submit() {
      const body = {
        Nom: this.Nom,
        Gamme: this.Gamme,
        Description: this.Description,
        Puht: this.Puht
      };
      const request = await this.$axios.$post('http://localhost:8000/editModele', body);
      return request;
    },

    goBack() {
      this.$router.back();
    }

  }
});
// CONCATENATED MODULE: ./components/EditFreezbeForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EditFreezbeFormvue_type_script_lang_js_ = (EditFreezbeFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/EditFreezbeForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EditFreezbeFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "735e76b5"
  
)

/* harmony default export */ var EditFreezbeForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=edit-freezbe-form.js.map