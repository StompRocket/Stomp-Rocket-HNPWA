<template>
<a :href="data.url" target="_blank" class=" story">

  <h2>{{data.title}} <span class="domain">({{data.domain}})</span></h2>
  <p>By: {{data.user}} {{data.time_ago}}</p>
</a>
</template>
<script>
export default {
  name: "story",
  props: ['data'],
  data: () => ({

  })
}
</script>
