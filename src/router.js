import Vue from 'vue'
import Router from 'vue-router'
import BookShelf from './components/bookshelf/index.vue'
import Discover from './components/discover/index.vue'
import Classification from './components/classification/index.vue'
import My from './components/my//index.vue'
import RankList from './components/rankList/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/discover'
    },
    {
      path: '/bookshelf',
      name: 'BookShelf',
      component: BookShelf,

    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/classification',
      name: 'Classification',
      component: Classification
    },
    {
      path: '/rankList',
      name: 'rankList',
      component: RankList
    }
  ]
})