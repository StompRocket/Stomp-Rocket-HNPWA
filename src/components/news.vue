<template>
<div id="news" class="page">

  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="container articles">
    <story v-for='story in stories' :data="story" :key="story.id"></story>
    <button @click='loadMore' type="button" name="loadMore" class="loadMoreBtn">{{loadmoreText}}</button>
  </div>

</div>
</template>
<script>
import story from './article.vue'

export default {
  name: "news",
  props: ['mode'],
  components: {
    story
  },
  data: () => ({
    stories: {},
    pageNumber: 1,
    busy: true,
    loadmoreText: 'Loading'
  }),
  created() {
    fetch(`https://api.hnpwa.com/v0/${this.mode}/1.json`, {

        method: 'get'

      }).then((response) => {
        return response.json()
      })
      .then(jsonData => {
        //console.log(jsonData);
        this.stories = jsonData
        this.busy = false
        this.loadmoreText = 'Load More'

      }).catch(err => {
        console.log(err)
        //error block
      })
    this.$parent.$on('refresh', (mode) => {
      this.busy = true
      this.loadmoreText = 'Loading'
      console.log('refreshing', this.mode, mode);
      fetch(`https://api.hnpwa.com/v0/${mode}/1.json`, {

          method: 'get'

        }).then((response) => {
          return response.json()
        })
        .then(jsonData => {
          //  console.log(jsonData);
          this.stories = jsonData
          this.busy = false
          this.loadmoreText = 'Load More'
        }).catch(err => {
          console.log(err)
          //error block
        })
    })

  },
  methods: {

    loadMore() {
      if (this.busy === false) {
        this.busy = true
        this.pageNumber++
          this.loadmoreText = 'Loading'
        fetch(`https://api.hnpwa.com/v0/${this.mode}/${this.pageNumber}.json`, {

            method: 'get'

          }).then(response => response.json())
          .then(jsonData => {
            jsonData.map((item) => this.stories.push(item))
            this.busy = false
            this.loadmoreText = 'Load More'

          }).catch(err => {
            console.log(err)
            //error block
          })
      }

    }
  }

}
</script>
