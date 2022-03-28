<template>
  <div v-editable="blok" class="prose my-18 mx-auto">
    <nuxt-picture :src="blok.image.filename" quality="75" />

    <h2>{{ blok.company }}</h2>
    <h1>{{ blok.title }}</h1>

    <div class="inline-grid grid-cols-2 gap-4">
      <div>
        <nuxt-picture :src="blok.profile_picture.filename" width="200" quality="75" />
        <h3>{{ blok.Fullname }}</h3>
        <p>{{ blok.job_title }}</p>
        <nuxt-picture :src="blok.logo.filename" width="200" quality="50" />
      </div>
      <div>
        <p>
          <b>Industry:</b>
          {{ blok.industry }}
        </p>
        <rich-text-renderer :document="blok.about" />
      </div>
    </div>

    <rich-text-renderer :document="blok.body" />
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