import Vue from 'vue'
import { VueCsvImport } from 'vue-csv-import'

const vCsvImport = {
  install(Vue, options) {
    Vue.component('vue-csv-import', VueCsvImport)
  }
}

Vue.use(vCsvImport)

export default vCsvImport
