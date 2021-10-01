exports.ids = [8];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/killerBee.323e7ff.jpeg";

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FreezbeCard.vue?vue&type=template&id=c95bcade&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shadow-lg hover:shadow-xl grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 bg-white mb-10 rounded-xl w-1/2"},[_vm._ssrNode("<div class=\"col-span-2 sm:col-span-1 xl:col-span-1 h-1/2 \"><img alt=\"...\""+(_vm._ssrAttr("src",__webpack_require__(28)))+" class=\" h-15 w-15 rounded-xl  mx-auto\"></div> <div class=\"col-span-2 sm:col-span-4 xl:col-span-4 p-2\"><h3 class=\"font-semibold text-black pb-1\">"+_vm._ssrEscape("Modèle : "+_vm._s(_vm.name))+"</h3> <p><span class=\"font-semibold\">Description : </span>"+_vm._ssrEscape("\n      "+_vm._s(_vm.description)+"\n      ")+"</p> <p class=\"pt-15\"><span class=\"font-semibold\">Gamme : </span>"+_vm._ssrEscape("\n      "+_vm._s(_vm.gamme)+"\n      ")+"</p> <p><span class=\"font-semibold\">Puht : </span>"+_vm._ssrEscape("\n      "+_vm._s(_vm.puht)+"\n      ")+"</p> <h3 class=\"font-semibold text-black pb-1\">Ingrédients :</h3> <ol><li> test </li> <li> test </li> <li> test </li> <li> test </li></ol> <div class=\"flex w-full justify-evenly\"><button class=\"mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2\">Modifier le modèle</button> <button class=\"mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2\">Supprimer le modèle</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FreezbeCard.vue?vue&type=template&id=c95bcade&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FreezbeCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FreezbeCardvue_type_script_lang_js_ = ({
  props: {
    name: {
      type: String,
      required: false,
      default: () => 'undefined'
    },
    description: {
      type: String,
      required: true,
      default: () => 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    gamme: {
      type: String,
      required: true,
      default: () => 'undefined'
    },
    puht: {
      type: Number,
      required: true,
      default: () => 0
    },
    id: {
      type: Number,
      required: false,
      default: () => 1
    }
  },
  data: () => {
    return {
      modele: {
        name: 'undefined',
        desc: 'undefined'
      }
    };
  },
  methods: {
    async getFreezbeData() {
      try {
        const FreezbeIngre = await this.$axios.$get('http://localhost:8000/ingredients/');
        this.ingredients.push(FreezbeIngre);
      } catch (error) {
        this.error = error;
      }
    },

    remove() {
      this.$parent.removeFreezbe(this.id);
    },

    update() {
      this.$router.push('EditFreezbeForm');
    }

  }
});
// CONCATENATED MODULE: ./components/FreezbeCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FreezbeCardvue_type_script_lang_js_ = (FreezbeCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FreezbeCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FreezbeCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b96236b"
  
)

/* harmony default export */ var FreezbeCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=freezbe-card.js.map