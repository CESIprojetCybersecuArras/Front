exports.ids = [3];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddProcedeForm.vue?vue&type=template&id=6a0c2cee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"min-h-screen flex items-center"},[_vm._ssrNode("<div class=\"container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300\"><div class=\"py-12 p-10 bg-white rounded-xl\"><div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Nom</label> <input type=\"text\" placeholder=\"Nom\""+(_vm._ssrAttr("value",(_vm.Nom)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Modèle freezbe</label> <input type=\"text\" placeholder=\"Modele\""+(_vm._ssrAttr("value",(_vm.Modele)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Description</label> <input type=\"text\" placeholder=\"Descripton\""+(_vm._ssrAttr("value",(_vm.Description)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <div class=\"mb-6\"><label for=\"name\" class=\"mr-4 text-gray-700 font-bold inline-block mb-2\">Etapes et descriptions validations tests</label> <input type=\"text\" placeholder=\"étapes\""+(_vm._ssrAttr("value",(_vm.Etapes)))+" class=\"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded\"></div> <button class=\"w-full mt-6 text-white font-bold bg-black hover:bg-gray-700 py-3 rounded-md transition duration-300\">Ajouter un procédé</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AddProcedeForm.vue?vue&type=template&id=6a0c2cee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddProcedeForm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AddProcedeFormvue_type_script_lang_js_ = ({
  data() {
    return {
      Nom: 'undefined',
      Description: '',
      Modele: '',
      Etapes: ''
    };
  },

  methods: {
    async Submit() {
      const body = {
        Nom: this.Nom,
        Modele: this.Modele,
        Etapes: this.Etapes,
        Description: this.Description
      };
      const request = await this.$axios.$post('http://localhost:8000/createProcede', body);
      return request;
    },

    goBack() {
      this.$router.back();
    }

  }
});
// CONCATENATED MODULE: ./components/AddProcedeForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AddProcedeFormvue_type_script_lang_js_ = (AddProcedeFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AddProcedeForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AddProcedeFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e45c8ce"
  
)

/* harmony default export */ var AddProcedeForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add-procede-form.js.map