(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{259:function(t,e,n){"use strict";n.r(e);var o=n(7),r=(n(37),{data:function(){return{Nom:null,Gamme:null,Description:null,Ingredients:[],Puht:null,ingrToAdd:[],active:!1}},methods:{Submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var body,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return body={Nom:t.Nom,Gamme:t.Gamme,Description:t.Description,Puht:t.Puht,ingredients:t.ingrToAdd},e.next=3,t.$axios.$post("http://localhost:8000/createModele",body);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},goBack:function(){this.$router.back()},selected:function(t){this.ingrToAdd.push(t)}}}),l=n(45),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen flex items-center"},[n("div",{staticClass:"container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300"},[n("div",{staticClass:"py-12 p-10 bg-white rounded-xl"},[n("div",{staticClass:"mb-6"},[n("label",{staticClass:"mr-4 text-gray-700 font-bold inline-block mb-2",attrs:{for:"name"}},[t._v("Nom")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Nom,expression:"Nom"}],staticClass:"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded",attrs:{type:"text",placeholder:"Nom"},domProps:{value:t.Nom},on:{input:function(e){e.target.composing||(t.Nom=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"mr-4 text-gray-700 font-bold inline-block mb-2",attrs:{for:"name"}},[t._v("Gamme")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Gamme,expression:"Gamme"}],staticClass:"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded",attrs:{type:"text",placeholder:"Gamme"},domProps:{value:t.Gamme},on:{input:function(e){e.target.composing||(t.Gamme=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"mr-4 text-gray-700 font-bold inline-block mb-2",attrs:{for:"name"}},[t._v("Description")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Description,expression:"Description"}],staticClass:"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.Description},on:{input:function(e){e.target.composing||(t.Description=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"mr-4 text-gray-700 font-bold inline-block mb-2",attrs:{for:"name"}},[t._v("Ingrédients")]),t._v(" "),t._l(t.Ingredients,(function(e){return n("ul",{key:e.id,staticClass:"divide-y divide-gray-300",on:{click:function(n){return t.selected(e.nom)}}},[n("li",{staticClass:"p-4 hover:bg-gray-50 cursor-pointer"},[t._v(t._s(e.nom))])])}))],2),t._v(" "),n("button",{staticClass:"w-full mt-6 text-white font-bold bg-black hover:bg-gray-700 py-3 rounded-md transition duration-300",on:{click:t.goBack}},[t._v("Ajouter un modèle")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);