import Vue from 'vue'
import Router from 'vue-router'
import BookShelf from './components/bookshelf/index.vue'
import Discover from './components/discover/index.vue'
import Classification from './components/classification/index.vue'
import My from './components/my//index.vue'
import RankList from './components/rankList/index.vue'
import Update from './components/update/index.vue'
import Details from './components/details/idnex.vue'
import Search from './components/search/index.vue'
import ClassDetails from './components/classification/classDetails/index.vue'
import Detail from './components/details/detail/index.vue'
import Cata from './components/details/cata/index.vue'
import Discuss from './components/details/discuss/index.vue'
import Recom from './components/details/recom.vue'

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
      component: Classification,
    },
    {
      path: '/rankList',
      name: 'rankList',
      component: RankList
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/details',
      redirect: '/details/recom',
      name: 'details',
      component: Details,
      children: [
        {
          path: 'detail',
          component: Detail
        },
        {
          path:'recom',
          component: Recom
        },
        {
          path:'cata',
          component: Cata
        },
        {
          path:'discuss',
          component: Discuss
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/classDetails',
      name: 'ClassDetails',
      component: ClassDetails
    }
  ]
})