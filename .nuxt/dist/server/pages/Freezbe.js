exports.ids = [16,8];
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

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Freezbe.vue?vue&type=template&id=fc519d62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid mx-auto px-4 pt-12 w-auto h-full",attrs:{"id":"menu"}},[_vm._ssrNode("<div class=\"grid w-full place-items-center content-center items-center\"><h1 class=\"w-auto text-4xl pb-10 font-bold h-10vh\">Gestion des Freezbes</h1> <button class=\"mb-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 self-end p-2\">Ajouter un modèle de freezbe</button></div> "),_vm._ssrNode("<div class=\"grid place-items-center content-center items-center\">","</div>",[_c('FreezbeCard',{attrs:{"name":_vm.test.name,"description":_vm.test.description,"puht":1,"gamme":_vm.test.Gamme}}),_vm._ssrNode(" "),_c('FreezbeCard',{attrs:{"name":_vm.test.name,"description":_vm.test.description,"puht":1,"gamme":_vm.test.Gamme}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Freezbe.vue?vue&type=template&id=fc519d62&

// EXTERNAL MODULE: ./components/FreezbeCard.vue + 4 modules
var FreezbeCard = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Freezbe.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Freezbevue_type_script_lang_js_ = ({
  components: {
    FreezbeCard: FreezbeCard["default"]
  },
  middleware: ['auth'],

  async asyncData({
    $axios
  }, callback) {
    await $axios.$get('http://localhost:4000/freezbes').then(res => {
      callback(null, {
        ModelesList: res
      });
    });
  },

  data() {
    return {
      ModelesList: [],
      test: {
        name: 'Nom de modèle de Freezbe',
        description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Gamme: 'Stylé',
        Puht: 3
      }
    };
  },

  methods: {
    async getModelesList() {
      try {
        const Modeles = await this.$axios.$get('http://localhost:8000/modeles');
        this.ModelesList = Modeles;
      } catch (error) {
        this.error = error;
      }
    },

    async removeFreezbe(el) {
      try {
        const body = {
          id: el
        };
        await this.$axios.$delete('http://localhost:8000/removeModele', body);
        await this.ModelesList();
      } catch (error) {
        this.error = error;
      }
    },

    async updateFreezbe(Id, edit) {
      try {
        const body = {
          id: Id,
          body: { ...edit
          }
        };
        await this.$axios.$delete('http://localhost:8000/updateFreezbe', body);
      } catch (error) {
        this.error = error;
      }
    },

    addFreezbe() {
      this.$router.push('AddFreezbe');
    }

  }
});
// CONCATENATED MODULE: ./pages/Freezbe.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Freezbevue_type_script_lang_js_ = (Freezbevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Freezbe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Freezbevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "200ae3f9"
  
)

/* harmony default export */ var Freezbe = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FreezbeCard: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=Freezbe.js.map