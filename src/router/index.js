import Vue from 'vue'
import Router from 'vue-router'
import news from '@/components/news'
import ask from '@/components/ask'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/news',
      name: 'News',
      component: news,
      props: {
        mode: 'news'
      }
    },
    {
      path: '/newest',
      name: 'Newest',
      component: news,
      props: {
        mode: 'newest'
      }
    },
    {
      path: '/ask',
      name: 'Ask',
      component: news,
      props: {
        mode: 'ask'
      }
    },
    {
      path: '/ask/:id',
      name: 'Ask Page',
      component: ask,
      props: {
        mode: 'ask'
      }
    },
    {
      path: '/show',
      name: 'Show',
      component: news,
      props: {
        mode: 'show'
      }
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: news,
      props: {
        mode: 'jobs'
      }
    },
    {
      path: '/',
      redirect: '/news'
    }
  ]
})