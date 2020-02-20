import Vue from 'vue'
import VueRouter from 'vue-router'
import registration from '../views/registration'
import Home from '../views/HomePage'
import Card from '../views/Card'
import Category from '../views/category'
import Search from '../views/Search'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/Registration',
    name: 'Registration',
    component: registration
  }, {
    path: '/Card',
    name: 'Card',
    component: Card
  }, {
    path: '/Category',
    name: 'Category',
    component: Category
  }, {
    path: '/Search',
    name: 'Search',
    component: Search
  }
];

const router = new VueRouter({
  routes
})

export default router
