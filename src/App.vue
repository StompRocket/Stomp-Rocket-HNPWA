<template>
<div id="app">
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">SR HNPWA</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li v-bind:class="{ active: mode == 'news' }">
          <a class="nav-link" @click="refresh('news')">News</a>
        </li>
        <li v-bind:class="{ active: mode == 'newest' }" class="nav-item">
          <a class="nav-link" @click="refresh('newest')">Newest</a>
        </li>
        <li v-bind:class="{ active: mode == 'ask' }" class="nav-item">
          <a class="nav-link" @click="refresh('ask')">Ask</a>
        </li>
        <li v-bind:class="{ active: mode == 'show' }" class="nav-item">
          <a class="nav-link" @click="refresh('show')">Show</a>
        </li>
        <li v-bind:class="{ active: mode == 'jobs' }" class="nav-item">
          <a class="nav-link" @click="refresh('jobs')">Jobs</a>
        </li>
      </ul>

    </div>
  </nav>
  <main id="main">
    <router-view></router-view>
  </main>
</div>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/global.scss'
export default {
  name: 'app',
  created() {
    //do something after creating vue instance
    this.$emit('refresh')
  },
  data() {
    return {
      mode: 'news'
    }
  },
  methods: {
    refresh(path) {
      this.mode = path
      this.$router.push({
        path: path,
        props: {
          mode: path
        }
      })
      this.$emit('refresh', path)
    }
  }
}
</script>
