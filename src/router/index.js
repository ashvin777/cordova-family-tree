import Vue from 'vue'
import Router from 'vue-router'
import PATH from './path.js';

import MainPage from '../components/pages/main.vue';
import AllMembers from '../components/pages/all-members/all-members.vue';
import FamilyTree from '../components/pages/family-tree/family-tree.vue';
import Favourite from '../components/pages/favourite/favourite.vue';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: PATH.FAMILY_TREE
  }, {
    path: '/',
    component: MainPage,
    children: [{
      path: PATH.ALL_MEMBERS,
      component: AllMembers
    }, {
      path: PATH.FAMILY_TREE,
      component: FamilyTree
    }, {
      path: PATH.FAVOURITE,
      component: Favourite
    }]
  }]
})
