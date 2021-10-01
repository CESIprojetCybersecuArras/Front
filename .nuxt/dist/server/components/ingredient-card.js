exports.ids = [9];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/killerBee.323e7ff.jpeg";

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IngredientCard.vue?vue&type=template&id=02bde11e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shadow-lg hover:shadow-xl grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 bg-white mb-10 rounded-xl w-1/2"},[_vm._ssrNode("<div class=\"col-span-2 sm:col-span-1 xl:col-span-1 h-1/2 \"><img alt=\"...\""+(_vm._ssrAttr("src",__webpack_require__(28)))+" class=\" h-15 w-15 rounded-xl  mx-auto\"></div> <div class=\"col-span-2 sm:col-span-4 xl:col-span-4 p-2\"><h3 class=\"font-semibold text-black pb-1\">"+_vm._ssrEscape("Ingrédient : "+_vm._s(_vm.name))+"</h3> <p><span class=\"font-semibold\">Description : </span>"+_vm._ssrEscape("\n      "+_vm._s(_vm.description)+"\n      ")+"</p> <div class=\"flex w-full justify-evenly\"><button class=\"mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2\">Modifier l'ingrédient</button> <button class=\"mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2\">Supprimer l'ingrédient</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/IngredientCard.vue?vue&type=template&id=02bde11e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IngredientCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var IngredientCardvue_type_script_lang_js_ = ({
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
    },
    id: {
      type: Number,
      required: false,
      default: () => 1
    }
  },
  methods: {
    remove() {
      this.$parent.removeIngredient(this.id);
    },

    update() {
      this.$router.push('EditIngredient');
    }

  }
});
// CONCATENATED MODULE: ./components/IngredientCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IngredientCardvue_type_script_lang_js_ = (IngredientCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/IngredientCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IngredientCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5c553f07"
  
)

/* harmony default export */ var IngredientCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ingredient-card.js.map