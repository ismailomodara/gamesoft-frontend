import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13229caa = () => interopDefault(import('../pages/accounts/forgot-password.vue' /* webpackChunkName: "pages/accounts/forgot-password" */))
const _7f82644e = () => interopDefault(import('../pages/accounts/login.vue' /* webpackChunkName: "pages/accounts/login" */))
const _2527a9ce = () => interopDefault(import('../pages/accounts/register.vue' /* webpackChunkName: "pages/accounts/register" */))
const _1689bf44 = () => interopDefault(import('../pages/accounts/reset-password.vue' /* webpackChunkName: "pages/accounts/reset-password" */))
const _c3fadd38 = () => interopDefault(import('../pages/accounts/verify.vue' /* webpackChunkName: "pages/accounts/verify" */))
const _0432f0ad = () => interopDefault(import('../pages/admin/categories/index.vue' /* webpackChunkName: "pages/admin/categories/index" */))
const _8512a942 = () => interopDefault(import('../pages/admin/leaderboard.vue' /* webpackChunkName: "pages/admin/leaderboard" */))
const _5f71066a = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _f7350404 = () => interopDefault(import('../pages/admin/payments/index.vue' /* webpackChunkName: "pages/admin/payments/index" */))
const _31c57b26 = () => interopDefault(import('../pages/admin/transactions/index.vue' /* webpackChunkName: "pages/admin/transactions/index" */))
const _6a13ba26 = () => interopDefault(import('../pages/admin/users/index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _4e02d769 = () => interopDefault(import('../pages/app/activities.vue' /* webpackChunkName: "pages/app/activities" */))
const _77a4c69b = () => interopDefault(import('../pages/app/categories/index.vue' /* webpackChunkName: "pages/app/categories/index" */))
const _31830f48 = () => interopDefault(import('../pages/app/dashboard.vue' /* webpackChunkName: "pages/app/dashboard" */))
const _617b5c2a = () => interopDefault(import('../pages/app/referrals.vue' /* webpackChunkName: "pages/app/referrals" */))
const _198568e2 = () => interopDefault(import('../pages/app/settings/index.vue' /* webpackChunkName: "pages/app/settings/index" */))
const _447375bc = () => interopDefault(import('../pages/admin/categories/add.vue' /* webpackChunkName: "pages/admin/categories/add" */))
const _c2d23034 = () => interopDefault(import('../pages/admin/payments/_id.vue' /* webpackChunkName: "pages/admin/payments/_id" */))
const _1aa40f0e = () => interopDefault(import('../pages/admin/transactions/_id.vue' /* webpackChunkName: "pages/admin/transactions/_id" */))
const _cccc06d6 = () => interopDefault(import('../pages/admin/users/_id.vue' /* webpackChunkName: "pages/admin/users/_id" */))
const _5b952029 = () => interopDefault(import('../pages/app/categories/_category/index.vue' /* webpackChunkName: "pages/app/categories/_category/index" */))
const _0ec8e431 = () => interopDefault(import('../pages/admin/categories/_category/edit.vue' /* webpackChunkName: "pages/admin/categories/_category/edit" */))
const _4b85b7bb = () => interopDefault(import('../pages/app/categories/_category/_stage/index.vue' /* webpackChunkName: "pages/app/categories/_category/_stage/index" */))
const _6a6a77f4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _13229caa,
    name: "accounts-forgot-password"
  }, {
    path: "/accounts/login",
    component: _7f82644e,
    name: "accounts-login"
  }, {
    path: "/accounts/register",
    component: _2527a9ce,
    name: "accounts-register"
  }, {
    path: "/accounts/reset-password",
    component: _1689bf44,
    name: "accounts-reset-password"
  }, {
    path: "/accounts/verify",
    component: _c3fadd38,
    name: "accounts-verify"
  }, {
    path: "/admin/categories",
    component: _0432f0ad,
    name: "admin-categories"
  }, {
    path: "/admin/leaderboard",
    component: _8512a942,
    name: "admin-leaderboard"
  }, {
    path: "/admin/login",
    component: _5f71066a,
    name: "admin-login"
  }, {
    path: "/admin/payments",
    component: _f7350404,
    name: "admin-payments"
  }, {
    path: "/admin/transactions",
    component: _31c57b26,
    name: "admin-transactions"
  }, {
    path: "/admin/users",
    component: _6a13ba26,
    name: "admin-users"
  }, {
    path: "/app/activities",
    component: _4e02d769,
    name: "app-activities"
  }, {
    path: "/app/categories",
    component: _77a4c69b,
    name: "app-categories"
  }, {
    path: "/app/dashboard",
    component: _31830f48,
    name: "app-dashboard"
  }, {
    path: "/app/referrals",
    component: _617b5c2a,
    name: "app-referrals"
  }, {
    path: "/app/settings",
    component: _198568e2,
    name: "app-settings"
  }, {
    path: "/admin/categories/add",
    component: _447375bc,
    name: "admin-categories-add"
  }, {
    path: "/admin/payments/:id",
    component: _c2d23034,
    name: "admin-payments-id"
  }, {
    path: "/admin/transactions/:id",
    component: _1aa40f0e,
    name: "admin-transactions-id"
  }, {
    path: "/admin/users/:id",
    component: _cccc06d6,
    name: "admin-users-id"
  }, {
    path: "/app/categories/:category",
    component: _5b952029,
    name: "app-categories-category"
  }, {
    path: "/admin/categories/:category/edit",
    component: _0ec8e431,
    name: "admin-categories-category-edit"
  }, {
    path: "/app/categories/:category/:stage",
    component: _4b85b7bb,
    name: "app-categories-category-stage"
  }, {
    path: "/",
    component: _6a6a77f4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
