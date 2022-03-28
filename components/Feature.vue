<template>
  <div v-editable="blok" class="py-2">
    <nuxt-picture :src="blok.image.filename" quality="75" height="530" width="400" fit="full" />
    <h3 class="text-lg mt-5">{{ blok.name }}</h3>
    <div class="description mt-5 text-m text-gray-500">{{ blok.blurb }}</div>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>