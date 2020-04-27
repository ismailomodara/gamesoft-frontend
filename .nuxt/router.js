import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _128fea0c = () => interopDefault(import('../pages/accounts/forgot-password.vue' /* webpackChunkName: "pages/accounts/forgot-password" */))
const _f3e312c4 = () => interopDefault(import('../pages/accounts/login.vue' /* webpackChunkName: "pages/accounts/login" */))
const _0b6eb57e = () => interopDefault(import('../pages/accounts/register.vue' /* webpackChunkName: "pages/accounts/register" */))
const _68f8c914 = () => interopDefault(import('../pages/accounts/verify.vue' /* webpackChunkName: "pages/accounts/verify" */))
const _38209a06 = () => interopDefault(import('../pages/admin/categories/index.vue' /* webpackChunkName: "pages/admin/categories/index" */))
const _b88491e2 = () => interopDefault(import('../pages/admin/leaderboard.vue' /* webpackChunkName: "pages/admin/leaderboard" */))
const _e625e70a = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _2a0e944e = () => interopDefault(import('../pages/admin/payments/index.vue' /* webpackChunkName: "pages/admin/payments/index" */))
const _155ae976 = () => interopDefault(import('../pages/admin/transactions/index.vue' /* webpackChunkName: "pages/admin/transactions/index" */))
const _9d85a2c6 = () => interopDefault(import('../pages/admin/users/index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _548ee9b9 = () => interopDefault(import('../pages/app/activities.vue' /* webpackChunkName: "pages/app/activities" */))
const _1d4ddceb = () => interopDefault(import('../pages/app/categories/index.vue' /* webpackChunkName: "pages/app/categories/index" */))
const _5b0372f8 = () => interopDefault(import('../pages/app/dashboard.vue' /* webpackChunkName: "pages/app/dashboard" */))
const _ea08804c = () => interopDefault(import('../pages/app/referrals.vue' /* webpackChunkName: "pages/app/referrals" */))
const _07c0599c = () => interopDefault(import('../pages/app/settings/index.vue' /* webpackChunkName: "pages/app/settings/index" */))
const _2bc6e7e8 = () => interopDefault(import('../pages/admin/categories/add.vue' /* webpackChunkName: "pages/admin/categories/add" */))
const _fd9d5b94 = () => interopDefault(import('../pages/admin/payments/_id.vue' /* webpackChunkName: "pages/admin/payments/_id" */))
const _0b3e5d44 = () => interopDefault(import('../pages/admin/transactions/_id.vue' /* webpackChunkName: "pages/admin/transactions/_id" */))
const _64903445 = () => interopDefault(import('../pages/admin/users/_id.vue' /* webpackChunkName: "pages/admin/users/_id" */))
const _1e5adb0e = () => interopDefault(import('../pages/app/categories/_category/index.vue' /* webpackChunkName: "pages/app/categories/_category/index" */))
const _2139bbe1 = () => interopDefault(import('../pages/admin/categories/_category/edit.vue' /* webpackChunkName: "pages/admin/categories/_category/edit" */))
const _f7fbe92a = () => interopDefault(import('../pages/app/categories/_category/_stage/index.vue' /* webpackChunkName: "pages/app/categories/_category/_stage/index" */))
const _90bce8b8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accounts/forgot-password",
    component: _128fea0c,
    name: "accounts-forgot-password"
  }, {
    path: "/accounts/login",
    component: _f3e312c4,
    name: "accounts-login"
  }, {
    path: "/accounts/register",
    component: _0b6eb57e,
    name: "accounts-register"
  }, {
    path: "/accounts/verify",
    component: _68f8c914,
    name: "accounts-verify"
  }, {
    path: "/admin/categories",
    component: _38209a06,
    name: "admin-categories"
  }, {
    path: "/admin/leaderboard",
    component: _b88491e2,
    name: "admin-leaderboard"
  }, {
    path: "/admin/login",
    component: _e625e70a,
    name: "admin-login"
  }, {
    path: "/admin/payments",
    component: _2a0e944e,
    name: "admin-payments"
  }, {
    path: "/admin/transactions",
    component: _155ae976,
    name: "admin-transactions"
  }, {
    path: "/admin/users",
    component: _9d85a2c6,
    name: "admin-users"
  }, {
    path: "/app/activities",
    component: _548ee9b9,
    name: "app-activities"
  }, {
    path: "/app/categories",
    component: _1d4ddceb,
    name: "app-categories"
  }, {
    path: "/app/dashboard",
    component: _5b0372f8,
    name: "app-dashboard"
  }, {
    path: "/app/referrals",
    component: _ea08804c,
    name: "app-referrals"
  }, {
    path: "/app/settings",
    component: _07c0599c,
    name: "app-settings"
  }, {
    path: "/admin/categories/add",
    component: _2bc6e7e8,
    name: "admin-categories-add"
  }, {
    path: "/admin/payments/:id",
    component: _fd9d5b94,
    name: "admin-payments-id"
  }, {
    path: "/admin/transactions/:id",
    component: _0b3e5d44,
    name: "admin-transactions-id"
  }, {
    path: "/admin/users/:id",
    component: _64903445,
    name: "admin-users-id"
  }, {
    path: "/app/categories/:category",
    component: _1e5adb0e,
    name: "app-categories-category"
  }, {
    path: "/admin/categories/:category/edit",
    component: _2139bbe1,
    name: "admin-categories-category-edit"
  }, {
    path: "/app/categories/:category/:stage",
    component: _f7fbe92a,
    name: "app-categories-category-stage"
  }, {
    path: "/",
    component: _90bce8b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
