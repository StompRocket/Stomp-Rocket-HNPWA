<template>
<a :href="fetchURL(data)" :target="fetchTarget(data)" class=" story">

  <h2>{{data.title}} <span v-if="data.domain" class="domain">({{data.domain}})</span></h2>
  <p>By: {{data.user}} {{data.time_ago}}</p>
</a>
</template>
<script>
export default {
  name: "story",
  props: ['data'],
  data: () => ({

  }),
  methods: {
    fetchURL(data) {
      if (data.type == 'ask') {
        return '/#/ask/' + data.id
      } else {
        return data.url
      }


    },
    fetchTarget(data) {
      if (data.type == 'ask') {
        return ''
      } else {
        return '_blank'
      }


    }
  }
}
</script>
