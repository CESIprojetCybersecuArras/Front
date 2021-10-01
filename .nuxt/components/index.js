export const AddFreezbeForm = () => import('../..\\components\\AddFreezbeForm.vue' /* webpackChunkName: "components/add-freezbe-form" */).then(c => wrapFunctional(c.default || c))
export const AddIngredientForm = () => import('../..\\components\\AddIngredientForm.vue' /* webpackChunkName: "components/add-ingredient-form" */).then(c => wrapFunctional(c.default || c))
export const AddProcedeForm = () => import('../..\\components\\AddProcedeForm.vue' /* webpackChunkName: "components/add-procede-form" */).then(c => wrapFunctional(c.default || c))
export const Card = () => import('../..\\components\\Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const EditFreezbeForm = () => import('../..\\components\\EditFreezbeForm.vue' /* webpackChunkName: "components/edit-freezbe-form" */).then(c => wrapFunctional(c.default || c))
export const EditIngredient = () => import('../..\\components\\EditIngredient.vue' /* webpackChunkName: "components/edit-ingredient" */).then(c => wrapFunctional(c.default || c))
export const EditProcede = () => import('../..\\components\\EditProcede.vue' /* webpackChunkName: "components/edit-procede" */).then(c => wrapFunctional(c.default || c))
export const FreezbeCard = () => import('../..\\components\\FreezbeCard.vue' /* webpackChunkName: "components/freezbe-card" */).then(c => wrapFunctional(c.default || c))
export const IngredientCard = () => import('../..\\components\\IngredientCard.vue' /* webpackChunkName: "components/ingredient-card" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../..\\components\\Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const ProcedeCard = () => import('../..\\components\\ProcedeCard.vue' /* webpackChunkName: "components/procede-card" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
