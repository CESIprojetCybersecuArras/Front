(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{273:function(t,e,n){"use strict";n.r(e);var o=n(7),r=(n(37),{data:function(){return{Nom:"undefined",Gamme:"undefined",Description:"undefined",Ingredients:[],Puht:null}},methods:{Submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var body,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return body={Nom:t.Nom,Gamme:t.Gamme,Description:t.Description,Puht:t.Puht},e.next=3,t.$axios.$post("http://localhost:8000/editModele",body);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},goBack:function(){this.$router.back()}}}),l=n(45),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen flex items-center"},[n("div",{staticClass:"container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300"},[n("div",{staticClass:"py-12 p-10 bg-white rounded-xl"},[n("div",{staticClass:"mb-6"},[n("label",{staticClass:"mr-4 text-gray-700 font-bold inline-block mb-2",attrs:{for:"name"}},[t._v("Nom")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Nom,expression:"Nom"}],staticClass:"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded",attrs:{type:"text",placeholder:"Nom"},domProps:{value:t.Nom},on:{input:function(e){e.target.composing||(t.Nom=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"mr-4 text-gray-700 font-bold inline-block mb-2",attrs:{for:"name"}},[t._v("Gamme")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Gamme,expression:"Gamme"}],staticClass:"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded",attrs:{type:"text",placeholder:"Gamme"},domProps:{value:t.Gamme},on:{input:function(e){e.target.composing||(t.Gamme=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"mr-4 text-gray-700 font-bold inline-block mb-2",attrs:{for:"name"}},[t._v("Description")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Description,expression:"Description"}],staticClass:"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.Description},on:{input:function(e){e.target.composing||(t.Description=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"mr-4 text-gray-700 font-bold inline-block mb-2",attrs:{for:"name"}},[t._v("Puht")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Puht,expression:"Puht"}],staticClass:"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.Puht},on:{input:function(e){e.target.composing||(t.Puht=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"mr-4 text-gray-700 font-bold inline-block mb-2",attrs:{for:"name"}},[t._v("Ingrédients")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Ingredients,expression:"Ingredients"}],staticClass:"border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded",attrs:{type:"text",placeholder:"Ingrédients"},domProps:{value:t.Ingredients},on:{input:function(e){e.target.composing||(t.Ingredients=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"w-full mt-6 text-white font-bold bg-black hover:bg-gray-700 py-3 rounded-md transition duration-300",on:{click:t.Submit}},[t._v("Modifier un modèle")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);