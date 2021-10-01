exports.ids = [19,12];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/killerBee.323e7ff.jpeg";

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProcedeCard.vue?vue&type=template&id=ed5c1e98&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shadow-lg hover:shadow-xl grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 bg-white mb-10 rounded-xl w-1/2"},[_vm._ssrNode("<div class=\"col-span-2 sm:col-span-1 xl:col-span-1 h-1/2 \"><img alt=\"...\""+(_vm._ssrAttr("src",__webpack_require__(28)))+" class=\" h-15 w-15 rounded-xl  mx-auto\"></div> <div class=\"col-span-2 sm:col-span-4 xl:col-span-4 p-2\"><h3 class=\"font-semibold text-black pb-1\">"+_vm._ssrEscape("Ingrédient : "+_vm._s(_vm.name))+"</h3> <p><span class=\"font-semibold\">Description : </span>"+_vm._ssrEscape("\n      "+_vm._s(_vm.description)+"\n      ")+"</p> <div class=\"flex w-full justify-evenly\"><button class=\"mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2\">Modifier l'ingrédient</button> <button class=\"mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2\">Supprimer l'ingrédient</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProcedeCard.vue?vue&type=template&id=ed5c1e98&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProcedeCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ProcedeCardvue_type_script_lang_js_ = ({
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
    freezbeId: {
      type: String,
      required: true,
      default: () => 'undefined'
    },
    steps: {
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
      this.$parent.removeProcede(this.id);
    },

    update() {
      this.$router.push('EditProcede');
    }

  }
});
// CONCATENATED MODULE: ./components/ProcedeCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProcedeCardvue_type_script_lang_js_ = (ProcedeCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProcedeCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProcedeCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c990eac"
  
)

/* harmony default export */ var ProcedeCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Procedes.vue?vue&type=template&id=03aef6ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid mx-auto px-4 pt-12 w-auto h-full",attrs:{"id":"menu"}},[_vm._ssrNode("<div class=\"grid w-full place-items-center content-center items-center\"><h1 class=\"w-auto text-4xl pb-10 font-bold h-10vh\">Gestion des procédés</h1> <button class=\"mb-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 self-end p-2\">Ajouter un procédé</button></div> "),_vm._ssrNode("<div class=\"grid place-items-center content-center items-center\">","</div>",[_c('ProcedeCard'),_vm._ssrNode(" "),_c('ProcedeCard')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Procedes.vue?vue&type=template&id=03aef6ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Procedes.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Procedesvue_type_script_lang_js_ = ({
  middleware: ['auth'],

  // async asyncData({$axios}, callback){
  //   await $axios.$get('http://localhost:8000/getAllProcedes').then((res) => {
  //     callback(null, {ModelesList: res})
  //   })
  // },
  data() {
    return {
      ProcedesList: []
    };
  },

  methods: {
    async getProcedesList() {
      try {
        const procedesList = await this.$axios.$get('http://localhost:8000/procedes');
        this.procedesList = procedesList;
      } catch (error) {
        this.error = error;
      }
    },

    async removeProcede(el) {
      try {
        const body = {
          id: el
        };
        await this.$axios.$delete('http://localhost:8000/removeProcede', body);
        await this.getProcedesList();
      } catch (error) {
        this.error = error;
      }
    },

    addProcede() {
      this.$router.push('AddProcede');
    }

  }
});
// CONCATENATED MODULE: ./pages/Procedes.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Procedesvue_type_script_lang_js_ = (Procedesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Procedes.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Procedesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7897076b"
  
)

/* harmony default export */ var Procedes = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProcedeCard: __webpack_require__(36).default})


/***/ })

};;
//# sourceMappingURL=Procedes.js.map