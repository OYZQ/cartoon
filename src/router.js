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
import Popularity from './components/rankList/popularity/index.vue'
import Complaints from './components/rankList/complaints/index.vue'
import Dark from './components/rankList/dark/index.vue'
import Free from './components/rankList/free/index.vue'
import Man from './components/rankList/man/index.vue'
import Woman from './components/rankList/woman/index.vue'
import Rcontent from './components/rankList/Rcontent.vue'
import One from './components/update/one/index.vue'
import Two from './components/update/two/index.vue'
import Three from './components/update/three/index.vue'
import Four from './components/update/four/index.vue'
import Five from './components/update/five/index.vue'
import Six from './components/update/six/index.vue'
import Seven from './components/update/seven/index.vue'
import Ucontent from './components/update/Ucontent.vue'
import All from './components/classification/classDetails/all/index.vue'
import Data from './components/classification/classDetails/data/index.vue'
import Hot from './components/classification/classDetails/hot/index.vue'
import New from './components/classification/classDetails/new/index.vue'
import History from './components//bookshelf/History/index.vue'
import Bookrack from './components//bookshelf/bookrack/index.vue'

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
      redirect:'/bookshelf/bookrack',
      children: [{
          path: 'history',
          name: 'history',
          component: History
        },
        {
          path: 'bookrack',
          name: 'bookrack',
          component: Bookrack
        }
      ]
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
      component: RankList,
      redirect: '/rankList/rcontent',
      children: [{
          path: 'popularity',
          name: 'popularity',
          component: Popularity
        },
        {
          path: 'complaints',
          name: 'complaints',
          component: Complaints
        },
        {
          path: 'dark',
          name: 'dark',
          component: Dark
        },
        {
          path: 'free',
          name: 'free',
          component: Free
        },
        {
          path: 'man',
          name: 'man',
          component: Man
        },
        {
          path: 'woman',
          name: 'woman',
          component: Woman
        },
        {
          path: 'rcontent',
          name: 'rcontent',
          component: Rcontent
        }
      ]
    },
    {
      path: '/update',
      name: 'Update',
      component: Update,
      redirect: '/update/ucontent',
      children: [{
          path: 'one',
          name: 'one',
          component: One
        },
        {
          path: 'two',
          name: 'two',
          component: Two
        },
        {
          path: 'three',
          name: 'three',
          component: Three
        },
        {
          path: 'four',
          name: 'four',
          component: Four
        },
        {
          path: 'five',
          name: 'five',
          component: Five
        },
        {
          path: 'six',
          name: 'six',
          component: Six
        },
        {
          path: 'seven',
          name: 'seven',
          component: Seven
        },
        {
          path: 'ucontent',
          name: 'ucontent',
          component: Ucontent
        }
      ]
    },
    {
      path: '/details',
      redirect: '/details/recom',
      name: 'details',
      component: Details,
      children: [{
          path: 'detail',
          component: Detail
        },
        {
          path: 'recom',
          component: Recom
        },
        {
          path: 'cata',
          component: Cata
        },
        {
          path: 'discuss',
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
      component: ClassDetails,
      redirect: '/classDetails/all',
      children: [{
          path: 'all',
          name: 'all',
          component: All
        },
        {
          path: 'data',
          name: 'data',
          component: Data
        },
        {
          path: 'hot',
          name: 'hot',
          component: Hot
        },
        {
          path: 'new',
          name: 'new',
          component: New
        }
      ]
    }
  ]
})