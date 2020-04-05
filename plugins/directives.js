import Vue from 'vue'

const classMethod = (el, value) => {
  el.children[1].children[0].children[0].addEventListener('focus', () => {
    el.children[0].classList.add('has-value')
  })
  el.children[1].children[0].children[0].addEventListener('blur', () => {
    if (value === '') {
      el.children[0].classList.remove('has-value')
    } else {
      el.children[0].classList.add('has-value')
    }
  })
}

Vue.directive('custom-input', {
  bind(el, binding, vnode) {
    if (binding.value !== '') {
      el.children[0].classList.add('has-value')
    }
    classMethod(el, binding.value)
  },
  update: (el, binding, vnode) => {
    classMethod(el, binding.value)
  }
})
