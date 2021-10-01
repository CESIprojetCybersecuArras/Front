import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b4f6d990 = () => interopDefault(import('..\\pages\\AddFreezbe.vue' /* webpackChunkName: "pages/AddFreezbe" */))
const _172794ba = () => interopDefault(import('..\\pages\\AddIngredient.vue' /* webpackChunkName: "pages/AddIngredient" */))
const _1de45ff7 = () => interopDefault(import('..\\pages\\AddProcede.vue' /* webpackChunkName: "pages/AddProcede" */))
const _4bb6ff8e = () => interopDefault(import('..\\pages\\Freezbe.vue' /* webpackChunkName: "pages/Freezbe" */))
const _1efd2c27 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _ab33afac = () => interopDefault(import('..\\pages\\Ingredients.vue' /* webpackChunkName: "pages/Ingredients" */))
const _01b0f32b = () => interopDefault(import('..\\pages\\Procedes.vue' /* webpackChunkName: "pages/Procedes" */))
const _c519074c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AddFreezbe",
    component: _b4f6d990,
    name: "AddFreezbe"
  }, {
    path: "/AddIngredient",
    component: _172794ba,
    name: "AddIngredient"
  }, {
    path: "/AddProcede",
    component: _1de45ff7,
    name: "AddProcede"
  }, {
    path: "/Freezbe",
    component: _4bb6ff8e,
    name: "Freezbe"
  }, {
    path: "/Home",
    component: _1efd2c27,
    name: "Home"
  }, {
    path: "/Ingredients",
    component: _ab33afac,
    name: "Ingredients"
  }, {
    path: "/Procedes",
    component: _01b0f32b,
    name: "Procedes"
  }, {
    path: "/",
    component: _c519074c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
