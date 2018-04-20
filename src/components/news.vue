<template>
<div id="news" class="page">

  <div class="container articles">
    <story v-for='story in stories' :data="story" :key="story.id"></story>
    <button @click='loadMore' type="button" name="loadMore" class="loadMoreBtn">Load More</button>
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
    pageNumber: 1
  }),
  created() {
    fetch(`https://api.hnpwa.com/v0/${this.mode}/1.json`, {

        method: 'get'

      }).then((response) => {
        return response.json()
      })
      .then(jsonData => {
        console.log(jsonData);
        this.stories = jsonData

      }).catch(err => {
        console.log(err)
        //error block
      })
    this.$parent.$on('refresh', (mode) => {
      console.log('refreshing', this.mode, mode);
      fetch(`https://api.hnpwa.com/v0/${mode}/1.json`, {

          method: 'get'

        }).then((response) => {
          return response.json()
        })
        .then(jsonData => {
          console.log(jsonData);
          this.stories = jsonData

        }).catch(err => {
          console.log(err)
          //error block
        })
    })

  },
  methods: {

    loadMore() {
      this.pageNumber++
        fetch(`https://api.hnpwa.com/v0/${this.mode}/${this.pageNumber}.json`, {

          method: 'get'

        }).then(response => response.json())
        .then(jsonData => {
          jsonData.map((item) => this.stories.push(item))


        }).catch(err => {
          console.log(err)
          //error block
        })
    }
  }

}
</script>
