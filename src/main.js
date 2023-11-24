import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BFormGroup, BFormCheckboxGroup, BFormInput, BFormInvalidFeedback, BFormValidFeedback, BForm, BFormSelect, BButton, BCard, BFormText } from 'bootstrap-vue'

import App from './App.vue'


Vue.config.productionTip = false

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 

Vue.component('b-form-group', BFormGroup)
Vue.component('b-form-checkbox-group', BFormCheckboxGroup)
Vue.component('b-form-input', BFormInput)
Vue.component('b-form-invalid-feedback', BFormInvalidFeedback)
Vue.component('b-form-valid-feedback', BFormValidFeedback)
Vue.component('b-form', BForm)
Vue.component('b-form-select', BFormSelect)
Vue.component('b-button', BButton)
Vue.component('b-card', BCard)
Vue.component('b-form-text', BFormText)



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')


