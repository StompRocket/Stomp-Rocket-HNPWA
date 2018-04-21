<template>
<div id="ask" class="page">
  <div class="contianer">
    <h1>Title</h1>
    <h2>By: </h2>
    <p>Content</p>
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
    fetch(`https://api.hnpwa.com/v0/item/${this.$route.params.id}.json`, {

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

  },
  methods: {}

}
</script>
