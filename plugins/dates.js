import Vue from 'vue'
import moment from 'moment'

Vue.mixin({
  methods: {
    fullDate(value) {
      return moment(value).format('MMMM Do YYYY')
    }
  }
})
