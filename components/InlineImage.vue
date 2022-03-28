<template>
  <div v-editable="body" class="flex -mx-2 my-4">
    <nuxt-picture
      :src="body.Image.filename"
      class="rounded-full object-cover"
      height="150"
      width="150"
    />
  </div>
</template>
 
<script>
export default {
  props: {
    body: {
      type: Object,
      required: true,
    },
  },
}
</script>