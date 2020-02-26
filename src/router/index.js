import Vue from 'vue'
import VueRouter from 'vue-router'
import registration from '../views/Store/registration'
import Home from '../views/Store/HomePage'
import Card from '../views/Store/Card'
import Category from '../views/Store/category'
import Search from '../views/Store/Search'
import Store from '../views/Store'
import ControlPanel from '../views/ControlPanel'
import Item from '../views/ControlPanel/Items'
import Users from '../views/ControlPanel/Users'
import NewUsers from '../views/ControlPanel/NewUsers'
import Categories from '../views/ControlPanel/Categories'
import Orders from '../views/ControlPanel/Orders'

Vue.use(VueRouter);

const routes = [
  {path:'/Store',
    name:'Store'
    ,component:Store,
    children:[ {
      path: '/Store/Registration',
      name: 'Registration',
      component: registration
    },{
      path: '/Store/HomePage',
      name: 'Home',
      component: Home
    }, {
      path: '/Store/Card',
      name: 'Card',
      component: Card
    }, {
      path: '/Store/Category',
      name: 'Category',
      component: Category
    }, {
      path: '/Store/Search',
      name: 'Search',
      component: Search
    }]},
  {path:'/ControlPanel',
    name:'ControlPanel'
    ,component:ControlPanel,
    children:[ {
      path: '/ControlPanel/Items',
      name: 'Items',
      component: Item
    },{
      path: '/ControlPanel/Users',
      name: 'Users',
      component: Users
    },{
      path: '/ControlPanel/NewUsers',
      name: 'NewUsers',
      component: NewUsers
    },{
      path: '/ControlPanel/Categories',
      name: 'Categories',
      component: Categories
    },
      {
        path: '/ControlPanel/Orders',
        name: 'Orders',
        component: Orders
      }]}
];

const router = new VueRouter({
  routes
});

export default router
